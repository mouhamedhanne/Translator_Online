"use client";
import BuyCoffe from "@/app/Assets/Svg/bmc-logo.svg";
import Image from "next/image";

const Transform = () => {
  return (
    <>
      <div className="relative">
        <div className="hidden lg:block absolute bottom-10 left-[6rem] lg:left-[32rem]">
          <Image src={BuyCoffe} alt="buy me a coffe" />
        </div>

        <div>
          <iframe
            title="Embedded HTML"
            src="/index.html"
            width="100%"
            height="700px"
          />
        </div>
      </div>
    </>
  );
};

export default Transform;
