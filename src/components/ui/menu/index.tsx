import { MenuClientWrapper } from "./menuClientWrapper";
import { CircularImage } from "./footer";
// const corinthia = localFont({
//   src: "../../../app/fonts/Corinthia-Bold.ttf",
//   display: "swap",
//   variable: "--font-corinthia", // This allows you to use it with Tailwind
// });
//
//

import { Birthstone } from "next/font/google";
import Navigation from "./navigation";

const corinthiaInit = Birthstone({
  weight: "400",
  variable: "--font-brightstone",
  subsets: ["latin"],
});

export const DesktopMenu = () => {
  return (
    <>
      <MenuClientWrapper>
        <h1
          className={`${corinthiaInit.className}  first-letter:text-[1.2em] px-12 pt-32 text-center  `}
        >
          Lauren{" "}
          <span className="block border-0 first-letter:text-[1.2em]">
            Hepburn
          </span>
        </h1>
        {/* <ul className=" first-letter:text-[1.2em]"> */}
        {/*   <li>about</li> */}
        {/*   <li>about</li> */}
        {/*   <li>about</li> */}
        {/*   <li>about</li> */}
        {/* </ul> */}
        <Navigation />
        <Info />
      </MenuClientWrapper>
    </>
  );
};

const Info = () => {
  return (
    <div className="p-12  text-center  flex flex-col items-center  justify-center gap-4 font-sans">
      <CircularImage />
      <div>
        <a
          href="mailto:hepburncottage@gmail.com"
          className="uppercase px-4 py-2 bg-destructive text-xl text-white rounded-md hover:bg-destructive/90 transition-colors inline-flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          hepburncottage@gmail.com
        </a>
      </div>
    </div>
  );
};
