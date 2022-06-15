import React from "react";
import FooterItem from "./FooterItem";

export default function FooterSub({ children }) {
  return (
    <div className="w-2/12 gap-y-24 text-2xl font-bold mt-5">
      <h1 className="mb-5">{children}</h1>
      <ul>
        <FooterItem>Contact Us</FooterItem>
        <FooterItem>Career</FooterItem>
        <FooterItem>Blog</FooterItem>
        <FooterItem>Press</FooterItem>
      </ul>
    </div>
  );
}
