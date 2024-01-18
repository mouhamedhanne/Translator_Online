import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function page() {
  return (
    <div className=" my-20 text-center">
      <p className="text-sm text-neutral-600">Stay Hungary, Stay Foolish</p>
      <p className="text-base text-neutral-600">
        Propulsé avec{" "}
        <FontAwesomeIcon icon={faHeart} className="text-red-500" /> par{" "}
        <Link href="https://github.com/mouhamedhanne">
          <u>@mouhamedhanne</u>
        </Link>
      </p>
    </div>
  );
}
