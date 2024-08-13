"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import path from "path";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function About() {
  useEffect(() => {
    const timlineAbout = gsap.timeline({
      scrollTrigger: {
        trigger: "#who-am-i",
        start: "0% 50%",
        end: "60% 30%",
        // markers: true,
        // pin: true,
        scrub: 1,
      },
    });

    const timelineTwo = gsap.timeline({
      scrollTrigger: {
        trigger: "#about-container",
        start: "0% 50%",
        end: "60% 40%",
        // markers: true,
        // pin: true,
        scrub: 2,
      },
    });

    timlineAbout.to(
      "#revel",
      {
        width: "100%",
        opacity: 1,
      },
      "same"
    );

    timelineTwo.to("#newspaper", {
      top: "40%",
      left: "50%",
      opacity: 1,
      rotate: 0,
    });
  }, []);

  useEffect(() => {
    const handleScroll = (dets: globalThis.WheelEvent) => {
      if (dets.deltaY > 0) {
        gsap.to(".marque", {
          transform: "translateX(-300%)",
          repeat: -1,
          ease: "none",
          duration: 3,
        });
        gsap.to(".arrow", {
          rotate: "180deg",
        });
      } else {
        gsap.to(".marque", {
          transform: "translateX(0%)",
          repeat: -1,
          ease: "none",
          duration: 3,
        });
        gsap.to(".arrow", {
          rotate: 0,
        });
      }
    };
    window.addEventListener("wheel", handleScroll);
  }, []);

  return (
    <section
      className="bg-white pb-24 overflow-hidden md:min-h-screen relative"
      id="about-container"
    >
      {/* line svg  */}
      <div className="absolute top-0 left-0 w-full h-full z-10">
        <svg
          width="100%"
          height="111%"
          viewBox="0 0 23242 19378"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="line"
            d="M6 246.89C2143.05 -273.51 6004.56 -209.771 4354.18 4208.38C2703.8 8626.54 7030.65 9326.31 9400.38 9123.92C10691 8921.53 13005.7 9199.15 11939.4 11928.7C10873.1 14658.2 14097.6 14241.9 15843.1 13692.6C17387.8 12709.4 20635.7 11529.7 21270.3 14675.6C22063.7 18608.1 15970.1 20689.9 14954.5 18405.6C14142 16578.3 20138.3 17085.3 23238 17567.2"
            stroke="black"
            stroke-width="50"
          />
        </svg>
      </div>
      {/* infinite marque  */}
      <div className="w-full h-24 relative z-20">
        <div className="w-full h-full p-4 flex gap-12 items-center bg-[#cff36e]">
          <div className="marque flex items-center gap-2 flex-shrink-0 -translate-x-[100%]">
            <h2 className="md:text-[4vw] text-[8vw] font-medium">
              Full Stack Developer
            </h2>
            <img
              src="/images/arrow.png"
              alt=""
              className="arrow h-14 rotate-180"
            />
          </div>

          <div className="marque flex items-center gap-2 flex-shrink-0 -translate-x-[100%]">
            <h2 className="md:text-[4vw] text-[8vw] font-medium">
              Full Stack Developer
            </h2>
            <img
              src="/images/arrow.png"
              alt=""
              className="arrow h-14 rotate-180"
            />
          </div>

          <div className="marque flex items-center gap-2 flex-shrink-0 -translate-x-[100%]">
            <h2 className="md:text-[4vw] text-[8vw] font-medium">
              Full Stack Developer
            </h2>
            <img
              src="/images/arrow.png"
              alt=""
              className="arrow h-14 rotate-180"
            />
          </div>

          <div className="marque flex items-center gap-2 flex-shrink-0 -translate-x-[100%]">
            <h2 className="md:text-[4vw] text-[8vw] font-medium">
              Full Stack Developer
            </h2>
            <img
              src="/images/arrow.png"
              alt=""
              className="arrow h-14 rotate-180"
            />
          </div>

          <div className="marque flex items-center gap-2 flex-shrink-0 -translate-x-[100%]">
            <h2 className="md:text-[4vw] text-[8vw] font-medium">
              Full Stack Developer
            </h2>
            <img src="/images/arrow.png" alt="" className="h-14 rotate-180" />
          </div>

          <div className="marque flex items-center gap-2 flex-shrink-0 -translate-x-[100%]">
            <h2 className="md:text-[4vw] text-[8vw] font-medium">
              Full Stack Developer
            </h2>
            <img src="/images/arrow.png" alt="" className="h-14 rotate-180" />
          </div>
        </div>
      </div>

      {/* about me text  */}
      <div className="">
        <div
          id="who-am-i"
          className="relative w-fit mx-auto md:text-[12vw] text-[16vw] font-bold"
        >
          <span className="opacity-30">Who Am I</span>
          <div
            id="revel"
            className="whitespace-nowrap absolute top-0 left-0 w-0 h-full text-[#a2c572] overflow-hidden opacity-100 z-10"
          >
            Who Am I
          </div>
        </div>

        <div className="max-w-14xl mx-auto">
          <div className="relative top-10 z-20 md:w-1/3 mx-auto bg-[#ebeaea] -rotate-6">
            <p className="md:text-[1rem] text-[0.7rem] font-bold text-[#1b1b1b] px-12 md:leading-[4vh] leading-[3vh] text-justify">
              I’m Hem Bhadur, an enthusiastic and diligent software developer
              specializing in frontend development. With a strong foundation in
              React.js and Node.js, I’ve worked across both front-end and
              back-end technologies, gaining full-stack experience. My expertise
              includes backend work with Node.js, Express, and MongoDB. I’m
              always eager to learn and grow, and I love connecting with fellow
              developers and tech enthusiasts. Let’s build something awesome
              together!
            </p>
          </div>
        </div>
      </div>

      {/* newspaer frame  */}
      <div
        id="newspaper"
        className="md:w-[600px] w-[360px] absolute -top-[200%] opacity-0 left-0 -translate-x-1/2 rotate-180 z-20"
      >
        <img src="/images/newspaper.png" alt="" className="w-full h-full" />
      </div>
    </section>
  );
}
