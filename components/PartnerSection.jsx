import Image from "next/image";
import React from "react";
import Title from "./Title";
import partner1 from "../assets/partner1.png";
import partner2 from "../assets/partner2.png";

export default function PartnerSection() {
  return (
    <section className="py-10 mb-10 md:mb-32 lg:px-10 md:px-20 px-5">
      <div className="container mx-auto text-center">
        <Title className="md:mb-10 mb-5">Event & Partner</Title>
        <Image src={partner1} alt="partner" width="948px" height="136px" />
        <Image src={partner2} alt="partner" width="948px" height="136px" />
      </div>
    </section>
  );
}
