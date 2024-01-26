import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import ByCoffe from "@/app/Assets/Svg/bmc-logo.svg";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <footer>
      <div className=" my-20 text-center">
        <div className="flex items-center justify-center gap-3 mb-3">
          <Link href="https://twitter.com/mouhamedhanne13">
            <FontAwesomeIcon icon={faXTwitter} />
          </Link>
          <Link href="https://www.instagram.com/geek___genius">
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
          <Link href="https://github.com/mouhamedhanne" target="_blank">
            <FontAwesomeIcon icon={faGithub} className="" />
          </Link>
        </div>
        <div className="flex items-center justify-center mb-3">
          <Link href="https://www.buymeacoffee.com/mouhamedhanne">
            <Image src={ByCoffe} alt="by me a coffe" width={130} />
          </Link>
        </div>
        <p className="text-base text-neutral-600">
          Propulsé avec{" "}
          <FontAwesomeIcon icon={faHeart} className="text-red-500" /> par{" "}
          <Link href="https://mouhamedhanne.vercel.app/">
            <u>@mouhamedhanne</u>
          </Link>
        </p>
      </div>
    </footer>
  );
}
