import type { Metadata } from "next";
import localFont from "next/font/local";
import { Work_Sans } from "next/font/google";
import "./globals.css";
// import WelcomeLoader from "@/components/WelcomeLoader";
import { DesktopMenu } from "@/components/ui/menu/index";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
  // Variable font includes all weights from 100-900
  // This automatically handles the variable font weight range
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lauren-hepburncottagestudio.com"),
  title: {
    default: "Lauren Kent Studio | Vancouver Island Artist & Educator",
    template: "%s | Lauren Kent Studio",
  },
  description:
    "Professional artist and educator Lauren Kent creates art inspired by Vancouver Island's natural beauty from her studio in Cedar, BC.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${workSans.variable} ${geistSans.variable} ${geistMono.variable} flex`}
      >
        {/* <WelcomeLoader /> */}
        <DesktopMenu />
        {children}
      </body>
    </html>
  );
}
