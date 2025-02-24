"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

import DPForm from "@/components/DPForm";
import { plannerDetails } from "@/data/planner";
import TicketSelector from "@/components/TicketSelector";

interface PlanYourDayPageProps {
  params: Promise<{ section: string }>;
}

const PlanYourDayPage: React.FC = () => {
  const sectionsRef: {
    [key: string]: React.MutableRefObject<HTMLDivElement | null>;
  } = {
    start: useRef(null),
    ticketSelect: useRef(null),
    explore: useRef(null),
    dinning: useRef(null),
  };
  const searchParams = useSearchParams();
  const section = searchParams.get("section");
  useEffect(() => {
    if (section && sectionsRef[section]) {
      sectionsRef[section].current?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <section
        ref={sectionsRef["start"]}
        id="plannerStartSection"
        className="px-4 pt-32 pb-24 relative"
      >
        <div className="absolute left-0 right-0 top-0 backdrop-blur-[4px] h-40 bg-gradient-to-t from-transparent via-[rgba(233,238,255,0.5)] to-[rgba(202,208,230,0.5)]"></div>
        <div className="absolute left-0 top-0 bottom-0 -z-10 w-full blur-[4px]">
          <Image
            src={plannerDetails.backgroundImageSrc}
            layout="fill"
            objectFit="cover"
            objectPosition="top"
            quality={100}
            alt="background"
          />
          <div className="absolute inset-0 h-full w-full bg-white [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(255,255,255,0.75),transparent)]"></div>
        </div>

        <div className="text-center">
          <h1
            className="text-5xl py-5 md:text-8xl md:leading-tight font-black text-foreground max-w-xl md:max-w-2xl mx-auto text-red-700"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            {plannerDetails.heading}
          </h1>
          <h2 className="mt-4 py-5 md:text-xl font-bold text-foreground max-w-xl mx-auto">
            {plannerDetails.subheading}
          </h2>

          <DPForm onSubmit={() => {sectionsRef["ticketSelect"].current?.scrollIntoView({behavior: "smooth"})}} />
        </div>
      </section>
      <section
        id="plannerTicketSelectionSection"
        className="px-4 py-40"
        ref={sectionsRef["ticketSelect"]}
      >
        <h1 className="text-3xl font-bold text-center mb-8">Select your ticket:</h1>
        <TicketSelector />
      </section>
      
    </>
  );
};

export default PlanYourDayPage;
