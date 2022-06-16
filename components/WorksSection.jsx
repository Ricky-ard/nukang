import React from "react";
import Title from "./Title";
import WorkItem from "./WorkItem";
import workSearch from "../assets/work-search.svg";
import workChat from "../assets/work-chat.svg";
import workHIre from "../assets/work-hire.svg";

export default function WorksSection() {
  return (
    <section className="py-20 px-5 lg:mb-32 md:mb-24">
      <div className="container mx-auto text-center">
        <Title>How it works</Title>
        <div className="flex flex-wrap pt-10 gap-5 justify-center">
          <WorkItem
            name="Search."
            description="Cari layanan yang telah disediakan 
            oleh nukang, baik service, home care, tukang,
            maupun konsultan"
            image={workSearch}
          />
          <WorkItem
            name="Chat."
            description="Hubungi nukang atau vendor 
              untuk melakukan pemesanan 
              jasa yang kamu butuhkan"
            image={workChat}
          />
          <WorkItem
            name="Hire."
            description="Buat janjian dan kamu bisa memulai 
              menjalan proyek mu"
            image={workHIre}
          />
        </div>
      </div>
    </section>
  );
}
