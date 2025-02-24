"use client";

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { heroDetails } from '@/data/hero';
import DPForm from './DPForm';

const Hero: React.FC = () => {
    const router = useRouter();
    return (
        <section
            id="planYourDay"
            className="relative flex flex-col items-center justify-center pb-10 pt-32 md:pt-40 px-5"
        >
            <div className="absolute left-0 top-0 bottom-0 -z-10 w-full blur-[4px]">
                <Image src={heroDetails.backgroundImageSrc} layout="fill" objectFit="cover" quality={100} alt="background" />
                <div className="absolute inset-0 h-full w-full bg-white [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(255,255,255,0.75),transparent)]">
                </div>
            </div>

            
            <div className="text-center">
                <h1 className="text-5xl md:text-8xl md:leading-tight font-black text-foreground max-w-xl md:max-w-2xl mx-auto text-red-700" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                    {heroDetails.heading}
                </h1>
                <h2 className="mt-4 md:text-xl font-bold text-foreground max-w-xl mx-auto">{heroDetails.subheading}</h2>
        
            </div>

            <DPForm onSubmit={()=>router.push("./planner?section=ticketSelect")}/>
        </section>
    );
};

export default Hero;
