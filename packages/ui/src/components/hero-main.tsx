"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

function HeroMain() {
  useEffect(() => {
    const timlineHero = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero-container",
        start: "50% 50%",
        end: "80% 50%",
        // markers: true,
        // pin: true,
        scrub: 2,
      },
    });

    const timeLinePara = gsap.timeline();
    const timeLineHeading = gsap.timeline();

    timlineHero
      .to(
        "#hero",
        {
          rotate: "-22deg",
          scale: 1.6,
          opacity: 0.05,
          ease: "power3.out",
        },
        "same"
      )
      .to(
        "#welcome",
        {
          transform: "translateX(60%)",
          ease: "expo.out",
          opacity: 0.2,
          scale: 0.75,
        },
        "same"
      )
      .to(
        "#digital",
        {
          transform: "translateX(-80%)",
          ease: "expo.out",
          opacity: 0.2,
          scale: 1.15,
        },
        "same"
      )
      .to(
        "#spinner",
        {
          top: "100%",
          opacity: 0,
          rotateY: 160,
        },
        "same"
      );

    timeLinePara.from(".split-para", {
      y: 80,
      opacity: 0,
      duration: 0.4,
      delay: 1,
      ease: "expo.out",
      stagger: 0.06,
    });

    timeLineHeading
      .from(
        ".split-heading",
        {
          y: 70,
          opacity: 0,
          duration: 0.8,
          delay: 0.5,
          stagger: 0.15,
        },
        "same"
      )
      .from(
        ".split-heading-two",
        {
          y: 70,
          opacity: 0,
          duration: 0.8,
          stagger: -0.15,
        },
        "same"
      );

    gsap.to("#spinner", {
      rotate: 360,
      repeat: -1,
      duration: 15,
      ease: "none",
    });
  }, []);
  // useGSAP(() => {});

  return (
    <section
      id="hero-container"
      className="overflow-hidden relative md:h-auto h-screen"
    >
      <div
        id="hero"
        className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 grid-rows-[450px_450px] gap-2 bg-black/60"
      >
        <img
          src="https://images.unsplash.com/photo-1602463843491-1becaf199ad8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGJpbmFyeSUyMGNvZGV8ZW58MHx8MHx8fDA%3D"
          alt=""
          className="w-full h-full object-cover"
        />

        <img
          id="test"
          src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-full h-full object-cover"
        />
        <img
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-full h-full object-cover"
        />
        <img
          src="https://images.unsplash.com/photo-1587837073080-448bc6a2329b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-full h-full object-cover"
        />

        <img
          src="https://plus.unsplash.com/premium_photo-1694743671394-60034a1b2f65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW90aXZhdGlvbmFsJTIwcXVvdGVzfGVufDB8fDB8fHww"
          alt=""
          className="w-full h-full object-cover"
        />

        <img
          src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-full h-full object-cover"
        />

        <img
          src="https://images.unsplash.com/photo-1569605803663-e9337d901ff9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGJpbmFyeSUyMGNvZGV8ZW58MHx8MHx8fDA%3D"
          alt=""
          className="w-full h-full object-cover"
        />
        <img
          src="https://images.unsplash.com/photo-1531956656798-56686eeef3d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM4fHxiaW5hcnklMjBjb2RlfGVufDB8fDB8fHww"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute md:top-0 top-28 left-0  w-full h-full bg-[#1c1753]/20  flex justify-center items-center">
        <div
          id="text-wrapper"
          className=" md:text-[7vw] text-[16vw] uppercase md:leading-[16vh] leading-[10vh] w-full md:px-16 px-3"
          onMouseEnter={() => {
            gsap.to("#custom-cursor", {
              scale: 12,
              opacity: 0.65,
            });
          }}
          onMouseLeave={() => {
            gsap.to("#custom-cursor", {
              scale: 1,
              opacity: 1,
            });
          }}
        >
          <h1
            id="welcome"
            className="md:text-start text-center font-extrabold  text-white overflow-hidden"
          >
            {` Welcome to My`.split("").map((item) => (
              <>
                <span className="inline-block split-heading">{item}</span>
                {item == " " && " "}
              </>
            ))}
          </h1>
          <h2
            id="digital"
            className="md:text-end text-center font-extrabold text-white"
          >
            {`Digital Playground`.split("").map((item) => (
              <>
                <span className="inline-block split-heading-two">{item}</span>
                {item == " " && " "}
              </>
            ))}
          </h2>
        </div>
      </div>

      <div className="absolute z-10 border rounded-sm border-white/10 p-4 md:top-28 top-32  md:right-6 md:w-1/5 w-full font-semibold space-y-2 text-[1rem] leading-[1.6rem] md:text-justify text-center text-white">
        <p className="overflow-hidden  ">
          {`Delivering seamless and engaging web solutions tailored to your needs. Exploring creativity and technology to craft unique web experiences. Passionate about building clean, efficient, and user-friendly web experiences`
            .split(" ")
            .map((item) => (
              <span className="split-para inline-block">
                {item}
                &nbsp;
              </span>
            ))}
        </p>
      </div>

      <div id="spinner" className="absolute top-20 left-1/2 -translate-x-1/2">
        <div className="relative w-16 h-16 bg-[#f2dad2] rounded-full">
          <div className="absolute top-1/2 left-1/2 w-full h-[6px] bg-zinc-800 -translate-x-1/2 -translate-y-1" />
          <div className="absolute top-1/2 left-1/2 w-full h-[6px] bg-zinc-800 -translate-x-1/2 -translate-y-1 -rotate-90" />
          <div className="absolute top-1/2 left-1/2 w-full h-[6px] bg-zinc-800 -translate-x-1/2 -translate-y-1 rotate-45" />
          <div className="absolute top-1/2 left-1/2 w-full h-[6px] bg-zinc-800 -translate-x-1/2 -translate-y-1 -rotate-45" />
        </div>
      </div>
    </section>
  );
}

export default HeroMain;
