"use client";
import gsap from "gsap";
import Link from "next/link";
import React, { useEffect } from "react";

export default function Footer() {
  useEffect(() => {
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#dev-01",
        start: "0% 90%",
        end: "10% 90%",
        // markers: true,
        //   pin: true,
        scrub: 2,
      },
    });

    t1.from(
      ".dev-01-revel",
      {
        y: 140,
        opacity: 0,
        duration: 2,
        stagger: 0.2,
      },
      "same"
    );
  }, []);
  return (
    <footer className="md:min-h-screen bg-[#ebe3c0] py-2">
      <div className="w-full md:min-h-screen h-fit flex flex-col gap-8 md:justify-between">
        <div className="">
          <h2 className="md:text-[12vw] text-[20vw] md:leading-[40vh] leading-[12vh] text-center text-transparent stroke font-normal">
            LET'S CONNECT
          </h2>

          <div className="flex justify-center md:gap-8 gap-4 mt-8">
            <Link
              href={"https://www.linkedin.com/in/hem-bhadur-b2182b26a/"}
              target="_blank"
              className="uppercase hover:bg-black/80 hover:text-white md:text-lg text-xs duration-300 border border-black px-6 py-2 rounded-sm"
            >
              Linkedin
            </Link>

            <Link
              href={"https://github.com/SushilKc00"}
              target="_blank"
              className=" uppercase hover:bg-black/80 hover:text-white md:text-lg text-xs duration-300 border border-black px-6 py-2 rounded-sm"
            >
              github
            </Link>

            <Link
              href={"mailto:sushilkc2611@gmail.com"}
              target="_blank"
              className=" uppercase hover:bg-black/80 hover:text-white md:text-lg text-xs duration-300 border border-black px-6 py-2 rounded-sm"
            >
              MAIL
            </Link>
          </div>
        </div>
        <div id="dev-01">
          <h2 className="text-center md:text-[14vw] text-[20vw] text-[#373737] font-thin lowercase overflow-hidden">
            {`Dev 010101`.split("").map((item) => (
              <span className="inline-block dev-01-revel">{item}</span>
            ))}
          </h2>
        </div>
      </div>
    </footer>
  );
}
