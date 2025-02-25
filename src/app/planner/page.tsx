"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/legacy/image";
import { useSearchParams } from "next/navigation";

import DPForm from "@/components/DPForm";
import { plannerDetails } from "@/data/planner";
import TicketSelector from "@/components/TicketSelector";
import CheckoutShortcut from "@/components/CheckoutShortcut";
import Section from "@/components/Section";
import { usePlanYourDayFlow } from "@/hooks/usePlanYourDayFlow";

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
  const { isStepReady } = usePlanYourDayFlow();
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
            fill
            className="object-cover object-top"
            quality={100}
            alt="background"
          />
          <div className="absolute inset-0 h-full w-full bg-white [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(255,255,255,0.9),transparent)]"></div>
        </div>

        <div className="text-center">
          <h1
            className="text-5xl py-5 md:text-8xl md:leading-tight font-black text-foreground max-w-xl md:max-w-2xl mx-auto text-red-700 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]"
          >
            {plannerDetails.heading}
          </h1>
          <h2 className="mt-4 py-5 md:text-xl font-bold text-foreground max-w-xl mx-auto">
            {plannerDetails.subheading}
          </h2>

          <DPForm
            onSubmit={() => {
              sectionsRef["ticketSelect"].current?.scrollIntoView({
                behavior: "smooth",
              });
            }}
          />
        </div>
      </section>
      <Section
        id="plannerTicketSelectionSection"
        title="Select your ticket:"
        description=""
        enabled={isStepReady("ticketSelect")}
        ref={sectionsRef["ticketSelect"]}
      >
        <TicketSelector
          onChange={() => {
            sectionsRef["explore"].current?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        />
      </Section>
      <Section
        id="plannerExploreSection"
        title="Explore the park:"
        description=""
        enabled={isStepReady("explore")}
        ref={sectionsRef["explore"]}
      />
      <Section
        id="plannerDinningSection"
        title="Dinning options:"
        description=""
        enabled={isStepReady("dinning")}
        ref={sectionsRef["dinning"]}
      />
      <CheckoutShortcut />
    </>
  );
};

export default PlanYourDayPage;
