import Nav from "../components/Nav";
import Button from "../components/Button";
import Swipers from "../components/Swipers";
import HeroSection from "../components/HeroSection";
import Image from "next/image";
import PromoSection from "../components/PromoSection";
import Title from "../components/Title";

import WorkItem from "../components/WorkItem";
import WorksSection from "../components/WorksSection";
import PartnerSection from "../components/PartnerSection";
import BottomSection from "../components/BottomSection";
import FooterSection from "../components/FooterSection";

export default function Home() {
  return (
    <>
      <Nav />
      <HeroSection />
      <Swipers />
      <PromoSection />
      <WorksSection />
      <PartnerSection />
      <BottomSection />
      <FooterSection />
    </>
  );
}
