import Image from "next/image";
import React from "react";

export default function WorkItem({ name, description, image }) {
  return (
    <div className="md:w-3/12 text-center">
      <Image src={image} alt="work" width="169.03px" height="133px" />

      <h1 className="font-bold md:text-3xl text-xl pb-2">{name}</h1>
      <p className="font-Montserrat text-sm">{description}</p>
    </div>
  );
}
