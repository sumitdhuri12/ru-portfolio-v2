import React from "react";

const Description = () => {
  return (
    <section className="px-4 md:px-8 lg:px-12 py-8 md:py-20">
      <div className="mx-auto max-w-6xl space-y-12 md:space-y-16">
        {/* Duration */}
        <div>
          <h2 className="mb-4 text-2xl md:text-4xl font-semibold leading-tight">
            Duration
          </h2>
          <p className="text-xl md:text-2xl font-light leading-relaxed">
            1 Week
          </p>
        </div>

        {/* My role & responsibilities */}
        <div>
          <h2 className="mb-4 text-2xl md:text-4xl font-semibold leading-tight">
            Context
          </h2>
          <p className="text-xl md:text-2xl font-light leading-relaxed">
            <strong className="font-bold">EntityMate</strong> is a lightweight
            utility web application built to simplify email development by
            converting special characters into their corresponding HTML
            entities. It helps email developers ensure their HTML is compatible
            across different email clients by replacing characters such as ©, ™,
            €, and & with their encoded equivalents.
          </p>
        </div>
        <div>
          <h2 className="mb-4 text-2xl md:text-4xl font-semibold leading-tight">
            Features
          </h2>
          <ul className="text-xl md:text-2xl font-light leading-relaxed list-disc pl-10 mb-6">
            <li>
              Convert special characters into HTML entities with a single click.
            </li>
            <li>Supports commonly used email-safe HTML entities.</li>
            <li>Copy converted output directly to the clipboard.</li>
            <li>Clear input and output with one action.</li>
            <li>Responsive interface optimized for desktop and mobile.</li>
            <li>Clean, minimal UI focused on usability.</li>
          </ul>
        </div>
        <div>
          <h2 className="mb-4 text-2xl md:text-4xl font-semibold leading-tight">
            Technologies used
          </h2>
          <ul className="text-xl md:text-2xl font-light leading-relaxed list-disc pl-10 mb-6">
            <li>React.js</li>
            <li>JavaScript (ES6+)</li>
            <li>Tailwind CSS</li>
            <li>React Icons</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Description;
