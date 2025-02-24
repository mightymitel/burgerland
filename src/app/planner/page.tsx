import React from 'react';
import Image from 'next/image';

import DPForm from '@/components/DPForm';
import Section from '@/components/Section';
import { heroDetails } from '@/data/hero';


const PlanYourDayPage: React.FC = () => {
    return (
        <>
        <section
            id="planYourDayPageHead"
            className='px-4 py-40 relative'
        >
            <div className="absolute left-0 top-0 bottom-0 -z-10 w-full blur-[4px]">
                <Image src={heroDetails.backgroundImageSrc} layout="fill" objectFit="cover" objectPosition="top" quality={100} alt="background" />
                <div className="absolute inset-0 h-full w-full bg-white [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(255,255,255,0.75),transparent)]">
                </div>
            </div>

            {/* <div className="absolute left-0 right-0 bottom-0 backdrop-blur-[2px] h-40 bg-gradient-to-b from-transparent via-[rgba(233,238,255,0.5)] to-[rgba(202,208,230,0.5)]">
            </div> */}

            <div className="text-center">
                <h1 className="text-5xl md:text-8xl md:leading-tight font-black text-foreground max-w-xl md:max-w-2xl mx-auto text-red-700" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                    {heroDetails.heading}
                </h1>
                <h2 className="mt-4 md:text-xl font-bold text-foreground max-w-xl mx-auto">{heroDetails.subheading}</h2>
               
                <DPForm />
            </div>
        </section>
        
        </>
    );
};

export default PlanYourDayPage;
