"use client";
import gsap from "gsap";
import React, { useEffect } from "react";

export default function Footer() {
  useEffect(() => {
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#dev-01",
        start: "0% 75%",
        end: "20% 70%",
        markers: true,
        //   pin: true,
        scrub: 2,
      },
    });

    t1.from(".dev-01-revel", {
      y: 140,
      opacity: 0,
      duration: 2,
      stagger: 0.2,
    });
  }, []);
  return (
    <footer className="min-h-screen bg-[#ebe3c0] py-2">
      <div className="w-full min-h-screen flex flex-col justify-between ">
        <div>5</div>
        <div id="dev-01">
          <h2 className="text-center text-[14vw] text-[#373737] font-thin lowercase overflow-hidden">
            {`Dev 010101`.split("").map((item) => (
              <span className="inline-block dev-01-revel">{item}</span>
            ))}
          </h2>
        </div>
      </div>
    </footer>
  );
}
