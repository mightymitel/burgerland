import React, { forwardRef } from "react";
import SectionTitle from "./SectionTitle";

interface Props {
  id: string;
  title: string;
  description: string;
  enabled: boolean;
}

const Section = forwardRef<HTMLDivElement, React.PropsWithChildren<Props>>(
  ({ id, title, description, children, enabled }, ref) => {
    return (
      <section
        id={id}
        className={`px-4 py-40 ${enabled ? "relative" : ""}`}
        ref={ref}
      >
        {enabled && (
          <>
            <div className="absolute left-0 right-0 top-0 backdrop-blur-[4px] h-40 bg-gradient-to-t from-transparent via-[rgba(233,238,255,0.5)] to-[rgba(202,208,230,0.5)]"></div>
            <div className="absolute left-0 top-0 bottom-0 -z-10 w-full blur-[4px]">
              <div className="absolute inset-0 h-full w-full bg-white [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(255,255,255,0.9),transparent)]"></div>
            </div>
            <SectionTitle>
              <h2 className="text-center mb-4">{title}</h2>
            </SectionTitle>
            <p className="mb-12 text-center">{description}</p>
            {children}
          </>
        )}
      </section>
    );
  }
);

Section.displayName = "Section";

export default Section;
