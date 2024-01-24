"use client";
import Image from "next/image";
import LogoMax from "@/app/Assets/Images/Logo/logoMax.png";
import LogoMin from "@/app/Assets/Images/Logo/logoMin.png";

export default function Logo() {
  return (
    <>
      <div className="hidden lg:block">
        <Image src={LogoMax} alt="logo" />
      </div>
      <div className="block lg:hidden">
        <Image src={LogoMin} alt="logo" />
      </div>
    </>
  );
}
