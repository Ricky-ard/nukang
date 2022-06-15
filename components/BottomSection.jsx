import React from "react";
import Button from "./Button";
import tukang from "../assets/tukang2.png";
import Image from "next/image";

export default function BottomSection() {
  return (
    <section className="py-10 px-20">
      <div className="container mx-auto flex gap-5">
        <div className="w-8/12 my-auto">
          <h1 className="font-bold text-6xl pb-2 ">
            Apakah kamu Seorang Tukang, Konsultan, atau Kontraktor ?
          </h1>
          <p className="font-medium leading-relaxed w-3/4 mb-10">
            Gabung menjadi mitra nukang hub indonesia, mari bertumbuh dan
            berkembang menjadi besar bersama.
          </p>
          <Button variant={"blue"} className="inline-block font-bold ">
            Jadi Mitra Nukang
          </Button>
        </div>
        <div className="w-4/12 text-right">
          <Image src={tukang} alt="partner" width="490px" height="556px" />
        </div>
      </div>
    </section>
  );
}
