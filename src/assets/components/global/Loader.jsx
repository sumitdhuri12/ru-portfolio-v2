import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";

const Loader = () => {
  const loaderRef = useRef(null);
  const colsRef = useRef([]);
  const isFirstLoad = useRef(true);
  const isNavigation = useRef(false);
  const logoRef = useRef(null);

  const location = useLocation();
  const isHome = location.pathname === "/";

  const shades = ["#ffffff", "#d9d9d9", "#b3b3b3", "#666666", "#232323"];
  // const shades = [
  //   "#ffffff",
  //   "#e5e5e5",
  //   "#cccccc",
  //   "#b3b3b3",
  //   "#999999",
  //   "#666666",
  //   "#444444",
  //   "#232323",
  // ];

  // helper to collect refs
  const addToRefs = (el) => {
    if (el && !colsRef.current.includes(el)) {
      colsRef.current.push(el);
    }
  };

  function startExitAnimation() {
    const loader = loaderRef.current;
    const loaderCols = colsRef.current;
    const tl = gsap.timeline({
      delay: 0.3,
      onComplete: () => {
        gsap.set(loader, { pointerEvents: "none" });
      },
    });
    // columns collapse
    tl.to(loaderCols, {
      duration: 0.5,
      y: "-100%",
      stagger: {
        each: 0.04,
        from: "start", // top → bottom
      },
      ease: "power3.inOut",
    });

    tl.to(
      loader,
      {
        opacity: 0,
        duration: 0.3,
        ease: "power2.out",
      },
      "-=0.2",
    );
  }

  useEffect(() => {
    const handleStart = () => {
      const loader = loaderRef.current;
      const cols = colsRef.current;

      isNavigation.current = true;
      // show loader
      gsap.set(loader, { opacity: 1, pointerEvents: "auto" });

      // reset strips to top
      gsap.set(cols, { y: "-100%" });

      const tl = gsap.timeline({
        onComplete: () => {
          window.dispatchEvent(new Event("loaderCovered"));
        },
      });
      // animate DOWN
      tl.to(cols, {
        y: "0%",
        duration: 0.4,
        stagger: {
          each: 0.04,
          from: "end",
        },
        ease: "power4.out",
      });
    };

    window.addEventListener("startLoader", handleStart);

    return () => {
      window.removeEventListener("startLoader", handleStart);
    };
  }, []);

  useEffect(() => {
    if (!isNavigation.current) return;

    const tl = gsap.timeline({
      onComplete: () => {
        startExitAnimation();
        isNavigation.current = false;
      },
    });

    if (logoRef.current) {
      tl.fromTo(
        logoRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: "power3.out",
        },
      );
    }

    // ⏳ HOLD (logo visible)
    tl.to({}, { duration: 0.6 });

    // logo fade OUT
    if (logoRef.current) {
      tl.fromTo(
        logoRef.current,
        { opacity: 1, scale: 1 },
        {
          opacity: 0,
          scale: 0.95,
          duration: 0.3,
          ease: "power3.in",
        },
      );
    }
  }, [location.pathname]);

  useEffect(() => {
    if (!isFirstLoad.current) return;

    const loader = loaderRef.current;
    const cols = colsRef.current;

    isFirstLoad.current = false;

    gsap.set(loader, { opacity: 1, pointerEvents: "auto" });
    gsap.set(cols, { y: "0%" });

    const tl = gsap.timeline({
      delay: 0.3,
      onComplete: startExitAnimation,
    });

    // logo in
    if (logoRef.current) {
      tl.fromTo(
        logoRef.current,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: "power3.out",
        },
      );
    }

    tl.to({}, { duration: 0.6 });

    if (logoRef.current) {
      tl.to(logoRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 0.4,
        ease: "power3.in",
      });
    }
  }, []);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-9999 flex items-center justify-center bg-transparent pointer-events-none opacity-0"
    >
      <div className="absolute inset-0">
        {shades.map((color, i) => (
          <div
            key={i}
            ref={addToRefs}
            style={{ backgroundColor: color, zIndex: 10 - i }}
            className="absolute inset-0 w-full h-full -translate-y-full"
          />
        ))}
      </div>

      {/* Counter */}
      <div className="relative z-10000 flex items-center justify-center">
        <img
          ref={logoRef}
          src="/images/logo_black.png"
          className="w-24 opacity-0"
        />
      </div>
    </div>
  );
};

export default Loader;
