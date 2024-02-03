//import Container from "@/app/components/Container/page";
import Link from "next/link";

export default function page() {
  return (
    <div
      className="flex h-full flex-col items-center gap-6
       pb-8 pt-6 lg:py-10"
    >
      <h2
        className="scroll-m-20 text-4xl font-extrabold
        tracking-tight lg:text-5xl max-lg:text-center"
      >
        Essayez gratuitement. Maintenant!
      </h2>
      <Link
        href="/Translation"
        className="inline-flex items-center justify-center
        focus-visible:outline-none focus-visible:ring-2
        focus-visible:ring-offset-2 disabled:opacity-50 
        disabled:pointer-events-none h-11 rounded-md px-8 py-6
        text-xl font-bold bg-bg_button hover:bg-hover_bg_button 
        transition duration-300 ease-in-out transform text-white"
      >
        Explorer Maintenant
      </Link>
    </div>
  );
}
