import React from "react";

export default function HeroSection() {
  return (
    <section>
      <div
        className="flex items-center   h-[599px]  bg-no-repeat bg-cover px-10 md:px-40 lg:px-30"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)), url("/hero.svg")`,
        }}
      >
        <div className="w-7/12 font-bold text-6xl text-white">
          Feel confident when choosing a contractor and your price
        </div>
      </div>
    </section>
  );
}
