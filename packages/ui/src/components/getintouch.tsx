"use client";
import gsap from "gsap";
import { useEffect } from "react";

export default function Getintouch() {
  useEffect(() => {
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#curve-container",
        start: "0% 85%",
        end: "400% 70%",
        // markers: true,
        // pin: true,
        scrub: 2,
      },
    });

    const t2 = gsap.timeline({
      scrollTrigger: {
        trigger: "#get-in-touch",
        start: "0% 65%",
        end: "60% 70%",
        // markers: true,
        // pin: true,
        scrub: 2,
      },
    });

    const t3 = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact-container",
        start: "0% 20%",
        end: "110% 70%",
        // markers: true,
        pin: true,
        scrub: 2,
      },
    });

    t1.to("#curve-container", {
      height: 0,
      top: 0,
    });

    t2.from(".revel-together", {
      y: 90,
      //   duration: 0.6,
      stagger: 0.15,
      opacity: 0,
    });

    t3.to(
      "#contact-text",
      {
        minHeight: "75vh",
        // background: "#63c3db",
      },
      "same"
    )
      .to(
        "#contact-text-div",
        {
          minHeight: "75vh",
        },
        "same"
      )
      .to(
        "#contact",
        {
          left: "0%",
          color: "#fff",
        },
        "same"
      )
      .to(
        "#us",
        {
          right: "0%",
          color: "#fff",
        },
        "same"
      )
      .to(
        "#contact-us",
        {
          background: "#1A1A1A",
        },
        "same"
      );
  });
  return (
    <div id="contact-us" className="bg-white py-4">
      <div
        className="w-full h-20 relative md:-top-24 overflow-hidden md:block hidden"
        id="curve-container"
      >
        <div className="absolute top-0 left-1/2  w-[150%] h-[750%] rounded-[50%] bg-white -translate-x-1/2" />
      </div>

      <div className="max-w-14xl mx-auto px-6 md:mt-20">
        <h2
          className="md:text-[12vw] text-[18vw] tracking-tighter md:leading-[22vh] leading-[10vh] font-light overflow-hidden"
          id="get-in-touch"
        >
          {`Let's create something awesome together`.split(" ").map((item) => (
            <>
              <span className="inline-block revel-together ">{item} </span>
              <span>&nbsp;</span>
            </>
          ))}
        </h2>

        <div className="md:mt-40 mt-16" id="contact-container">
          <div className="w-full min-h-screen">
            <div id="contact-text" className="w-full mx-auto h-[0%] absolute">
              <h2
                id="contact"
                className="absolute top-0 left-[25%] md:text-[10vw] text-[12vw] -translate-y-1/2 translate-x-0 z-20 uppercase font-light"
              >
                Ping
              </h2>
              <h2
                id="us"
                className="absolute bottom-0 right-[25%] md:text-[10vw] text-[12vw] -translate-x-[0%] translate-y-[50%] z-20 uppercase  font-light"
              >
                me
              </h2>
            </div>

            <div
              id="contact-text-div"
              className="h-[0%] w-full mx-auto bg-[#1A1A1A] absolute overflow-hidden flex justify-center items-center rounded-md"
            >
              <form
                action="https://formbold.com/s/3G5LP"
                method="POST"
                className="flex flex-col gap-5 md:w-[50%] w-full border border-white/10 shadow-md shadow-white/10 p-6 rounded-md mx-auto"
              >
                <h2 className="capitalize md:text-[2vw] text-[8vw] font-semibold text-white">
                  Contact form
                </h2>
                <input
                  type="text"
                  placeholder="Name"
                  name="Name"
                  className="px-2 py-3 rounded-sm outline-none bg-[#dadada] text-slate-700 placeholder:text-black/70"
                />
                <input
                  type="text"
                  placeholder="Eamil"
                  name="Email"
                  className="px-2 py-3 rounded-sm outline-none bg-[#dadada] text-slate-700 placeholder:text-black/70"
                />
                <input
                  type="text"
                  placeholder="Contact"
                  name="Contact"
                  className="px-2 py-3 rounded-sm outline-none bg-[#dadada] text-slate-700 placeholder:text-black/70"
                />

                <input
                  type="submit"
                  value={"submit"}
                  className="px-2 py-3 bg-white text-red-500 font-bold capitalize w-1/3 cursor-pointer"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
