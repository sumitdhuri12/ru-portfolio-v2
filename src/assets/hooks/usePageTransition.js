import { useNavigate } from "react-router-dom";
import gsap from "gsap";

let isAnimating = false;

export default function usePageTransition() {
  const navigate = useNavigate();

  const goTo = (path) => {
    if (isAnimating) return;
    isAnimating = true;

    const tl = gsap.timeline();

    // trigger loader
    tl.call(() => {
      window.dispatchEvent(new Event("startLoader"));
    });

    // wait until loader fully covers
    const handleCovered = () => {
      navigate(path);
      isAnimating = false;
    };

    window.addEventListener("loaderCovered", handleCovered, {
      once: true,
    });
  };

  return goTo;
}
