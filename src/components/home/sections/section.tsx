import React, { ReactNode } from "react";

export interface sectionProps {
  children: ReactNode;
  title: string;
  number?: string;

  paragraph?: string;
}
export const Section = ({
  children,
  title,
  number,
  paragraph,
}: sectionProps) => {
  return (
    <div id={title} className={` border-t border-dashed border-destructive  `}>
      <h2 className="font-sans text-lg text-destructive uppercase text-right px-8">
        {title}
        <span className="float-left">\\{number}</span>
      </h2>

      {paragraph && (
        <p className="max-w-[300px] lg:max-w-[500px] mx-auto font-sans text-center text-destructive text-xl">
          {paragraph}
        </p>
      )}

      <div className="my-10 px-8">{children}</div>
    </div>
  );
};
