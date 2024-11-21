import React from "react";
import { Section } from "./section";
import Image from "next/image";

export function Contact() {
  return (
    <Section title="contact" number="03">
      <div className="flex min-h-screen items-center justify-center overflow-hidden relative">
        <Image
          src="/images/bgContact.webp"
          alt="lauren contanct photo"
          width={800}
          height={800}
          className="absolute h-full w-full object-cover "
        />
        <div className="min-w-64 max-w-[600px] mx-auto bg-destructive p-6 font-sans text-center text-destructive-foreground uppercase text-lg z-10">
          <div className="relative w-24 h-24 mx-auto mb-8">
            <div className="aspect-square overflow-hidden rounded-full">
              <Image
                src="/images/lauren.jpg"
                alt="Circular image"
                width={150}
                height={150}
                className="object-cover w-full h-full border-2 border-gray-300"
                priority
              />
            </div>
          </div>
          <p>
            Hello! Send me a message and let’s connect. Please provide your
            name, email address, subject and your message.
          </p>
          <p> Thank you</p>
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
      </div>
    </Section>
  );
}
