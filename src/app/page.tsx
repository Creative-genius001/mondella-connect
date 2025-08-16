'use client'

import Contact from "./components/Contact";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useEffect } from "react";
import Footer from "./components/Footer";


export default function Home() {

useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    const smoother = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 1,
      effects: true,
      smoothTouch: 0.2,
    });

    gsap.registerEffect({
      name: "fade",
      effect: (targets: gsap.TweenTarget) => {
        return gsap.fromTo(targets, { opacity: 0, x: 100 }, {opacity: 1, x: 0 , duration: 1.3});
      },
      extendTimeline: true,
    });

    gsap.registerEffect({
      name: "fade2",
      effect: (targets: gsap.TweenTarget) => {
        return gsap.fromTo(targets, { opacity: 0, x: -100 }, {opacity: 1, x: 0, duration: 1.6});
      },
      extendTimeline: true,
    });

     gsap.registerEffect({
      name: "scalebtn",
      effect: (targets: gsap.TweenTarget) => {
        return gsap.fromTo(targets, { opacity: 0, scale: 0.3 }, {opacity: 1, scale: 1, duration: 1});
      },
      extendTimeline: true,
    });

    gsap.set(".hero-header", { opacity: 0, x: 100 });
    gsap.set(".hero-paragraph", { opacity: 0, x: -100 });

    gsap.effects.fade(".hero-header");
    gsap.effects.fade2(".hero-paragraph");
    gsap.effects.scalebtn(".hero-btn");

    return () => {
  
      if (smoother) {
        smoother.kill();
      }
    };
  }, []);
  
  return (
    <main id="smooth-wrapper">
      <div id="smooth-content">  
        <Hero />
        <Features />
        <Pricing />
        <Contact />
        <Footer /> 
      </div>
    </main>
  );
}
