import React from "react";

export default function HeroSection() {
  return (
    <section>
      <div
        className="flex flex-nowrap items-center lg:h-[599px] md:h-[399px] h-40 bg-no-repeat bg-cover px-10 md:px-20 lg:px-30"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0)), url("/hero.svg")`,
        }}
      >
        <div className="w-6/12 md:w-7/12 font-bold lg:text-6xl md:text-3xl text-xs text-white">
          Feel confident when choosing a contractor and your price
        </div>
      </div>
    </section>
  );
}
