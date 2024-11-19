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
    <div className="p-12  text-center  flex flex-col items-center  justify-center gap-4">
      <CircularImage />
      <button className="border-2 border-destructive-foreground px-4 rounded-full bg-destructive font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-destructive-foreground hover:text-destructive transition-colors duration-200">
        Send Message
      </button>
    </div>
  );
};
