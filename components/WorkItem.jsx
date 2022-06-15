import Image from "next/image";
import React from "react";

export default function WorkItem({ name, description, image }) {
  console.log(image, name);
  return (
    <div className="w-3/12 text-center">
      <Image src={image} alt="work" width="169.03px" height="133px" />

      <h1 className="font-bold text-3xl pb-2">{name}</h1>
      <p className="font-Montserrat text-sm">{description}</p>
    </div>
  );
}
