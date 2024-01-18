//import Container from "@/app/components/Container/page";
import Image from "next/image";
import TraducteurDark from "@/app/Assets/Images/traducteur-dark.png";

export default function page() {
  return (
    <div
      className="mt-[8rem] flex h-full items-center justify-center gap-6
         pb-8 pt-6 max-lg:flex-col px-6 lg:px-0 md:py-10 "
    >
      <div className="flex flex-1 flex-col items-start gap-4">
        <h1
          className="text-3xl font-extrabold leading-tight
              tracking-tighter md:text-4xl lg:text-5xl xl:text-6xl"
        >
          {/**Get */}La{" "}
          <span
            className="inline-block bg-black text-white
             px-1 py-2"
          >
            {/**infinite */}Puissance
          </span>{" "}
          de la <u>Traduction</u>! à Votre Portée...
        </h1>

        {/**user */}

        <div className="flex items-center gap-4 max-lg:flex-col lg:gap-8">
          <div className="flex">
            <span
              className="flex relative h-10 w-10 shrink-0 
              overflow-hidden rounded-full -mr-4"
            >
              <img
                src="https://linkedleads.vercel.app/images/review/1.png"
                alt="illustration"
              />
            </span>

            <span
              className="flex relative h-10 w-10 shrink-0 
              overflow-hidden rounded-full -mr-4"
            >
              <img
                src="https://linkedleads.vercel.app/images/review/2.png"
                alt="illustration"
              />
            </span>

            <span
              className="flex relative h-10 w-10 shrink-0 
              overflow-hidden rounded-full -mr-4"
            >
              <img
                src="https://linkedleads.vercel.app/images/review/3.png"
                alt="illustration"
              />
            </span>

            <span
              className="flex relative h-10 w-10 shrink-0 
              overflow-hidden rounded-full -mr-4"
            >
              <img
                src="https://linkedleads.vercel.app/images/review/4.png"
                alt="illustration"
              />
            </span>

            <span
              className="flex relative h-10 w-10 shrink-0 
              overflow-hidden rounded-full -mr-4"
            >
              <img
                src="https://linkedleads.vercel.app/images/review/1.png"
                alt="illustration"
              />
            </span>

            <span
              className="flex relative h-10 w-10 shrink-0 
              overflow-hidden rounded-full -mr-4"
            >
              <img
                src="https://linkedleads.vercel.app/images/review/2.png"
                alt="illustration"
              />
            </span>

            <span
              className="flex relative h-10 w-10 shrink-0 
              overflow-hidden rounded-full -mr-4"
            >
              <img
                src="https://linkedleads.vercel.app/images/review/3.png"
                alt="illustration"
              />
            </span>

            <span
              className="flex relative h-10 w-10 shrink-0 
              overflow-hidden rounded-full -mr-4"
            >
              <img
                src="https://linkedleads.vercel.app/images/review/4.png"
                alt="illustration"
              />
            </span>
          </div>
          <div className="flex flex-col gap-0.5 text-yellow-500">
            <p className="whitespace-nowrap font-extrabold">
              +100 user trust us
            </p>
            <div className="flex items-center gap-0.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-star"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-star"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-star"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-star"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-star"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/**leads from your */}
      {/**LinkedIn connexions */}
      <div className="flex flex-1">
        <div className="bg-black">
          <Image src={TraducteurDark} alt="illustartion" />
        </div>
      </div>
    </div>
  );
}
