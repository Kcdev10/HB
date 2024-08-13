"use client";
import React, { MouseEvent, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

const Links_List = [
  {
    label: "home",
    href: "/",
  },
  {
    label: "about",
    href: "#about-container",
  },
  {
    label: "work",
    href: "#project-container",
  },
  {
    label: "in touch",
    href: "/contact",
  },
];

export default function Header() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isNavBarOpen, setIsNavBarOpen] = useState<boolean>(false);
  const [linkIndex, setLinkIndex] = useState(0);

  const handleNavOpenOrNot = () => {
    setIsNavBarOpen(!isNavBarOpen);

    if (!isNavBarOpen) {
      gsap.to("#mobile-nav-div", {
        scaleY: 1,
        duration: 0.5,
      });

      gsap.to(".slide-anim", {
        width: 0,
        duration: 0.8,
        stagger: 0.1,
      });

      gsap.to(".link-li", {
        display: "flex",
        duration: 1,
        delay: 0.6,
        x: 0,
        opacity: 1,
        stagger: 0.16,
      });
    } else {
      gsap.to("#mobile-nav-div", {
        scaleY: 0,
        duration: 0.5,
        delay: 1.4,
      });
      gsap.to(".slide-anim", {
        width: "100%",
        duration: 0.5,
        stagger: 0.1,
        delay: 0.8,
      });
      gsap.to(".link-li", {
        display: "flex",
        duration: 0.2,
        x: 120,
        opacity: 0,
        stagger: 0.16,
      });
    }
  };

  const mouseEnterInLogoAndHam = (event: React.MouseEvent, type = "logo") => {
    if (type === "ham") {
      gsap.to("#ham-top", {
        width: "30px",
        duration: 0.8,
        ease: "power2",
      });

      gsap.to("#ham-center", {
        width: "40px",
        duration: 0.8,
        ease: "power2",
      });

      gsap.to("#ham-bottom", {
        width: "30px",
        duration: 0.8,
        ease: "power2",
      });
    }

    gsap.to(cursorRef.current, {
      width: "80px",
      height: "80px",
      scale: 2,
      duration: 0.3,
    });
  };

  const mouseExistFromLogoAndHam = (event: React.MouseEvent, type = "logo") => {
    if (type === "ham") {
      gsap.to("#ham-top", {
        width: "40px",
        duration: 0.8,
        ease: "power2",
      });

      gsap.to("#ham-center", {
        width: "20px",
        duration: 0.8,
        ease: "power2",
      });

      gsap.to("#ham-bottom", {
        width: "40px",
        duration: 0.8,
        ease: "power2",
      });
    }

    gsap.to(cursorRef.current, {
      width: "18px",
      height: "18px",
      scale: 1,
      duration: 0.3,
    });
  };

  useGSAP(() => {
    const timeLine = gsap.timeline();

    // timeLine
    //   .to(
    //     "#ham-top",
    //     {
    //       width: "40px",
    //       duration: 0.8,
    //       ease: "power2",
    //     },
    //     "ham-same"
    //   )
    //   .to(
    //     "#ham-bottom",
    //     {
    //       width: "40px",
    //       duration: 0.4,
    //       ease: "power2",
    //     },
    //     "ham-same"
    //   )
    //   .to(
    //     "#ham-center",
    //     {
    //       width: "20px",
    //       duration: 0.8,
    //       ease: "power2",
    //     },
    //     "ham-same"
    //   );
  });

  useEffect(() => {
    window.addEventListener("mousemove", (event) => {});

    const handleMouseMove = (event: globalThis.MouseEvent) => {
      gsap.to(cursorRef.current, {
        left: event.x,
        top: event.y,
        ease: "expo.out",
        duration: 1.25,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <header className="fixed top-0 w-full z-50">
      <nav className="max-w-14xl mx-auto px-4 md:py-3 py-8 flex justify-between items-center">
        {/* logo of website */}
        <div>
          <div
            className="flex flex-col md:gap-0 gap-2 items-center cursor-pointer"
            onMouseEnter={(e) => {
              mouseEnterInLogoAndHam(e);
            }}
            onMouseLeave={(e) => {
              mouseExistFromLogoAndHam(e);
            }}
          >
            <div className="font-bold text-white md:text-[4vw] text-[8vw] leading-[4vw]">
              HB
            </div>
            <span className="text-white font-semibold text-lg">
              DEV <span className="text-white font-bold">010101</span>
            </span>
          </div>
        </div>

        {/* hamburger menu  */}
        <div
          className="cursor-pointer p-2"
          onClick={() => handleNavOpenOrNot()}
          onMouseEnter={(e) => mouseEnterInLogoAndHam(e, "ham")}
          onMouseLeave={(e) => mouseExistFromLogoAndHam(e, "ham")}
        >
          {isNavBarOpen ? (
            <div className="text-white font-bold md:text-[3vw] text-[8vw] leading-[3vw] rotate-180 duration-700 z-50">
              X
            </div>
          ) : (
            <div className="flex flex-col gap-1 -rotate-180 duration-700">
              <span id="ham-top" className="w-10 h-[5px] bg-white/80" />
              <span
                id="ham-center"
                className="w-5 h-[5px] bg-white/80 origin-left"
              />
              <span id="ham-bottom" className="w-10 h-[5px] bg-white/80" />
            </div>
          )}
        </div>
      </nav>

      {/* cursor move  */}
      <div
        ref={cursorRef}
        id="custom-cursor"
        className="hidden md:block fixed w-4 h-4 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ebe3c0] mix-blend-difference pointer-events-none"
      />

      {/* movile view  */}

      <div
        id="mobile-nav-div"
        className="w-full h-screen fixed top-0 left-0 -z-20 bg-[#131313] origin-top "
        style={{
          transform: "scaleY(0)",
        }}
      >
        <div className="link-div text-white flex justify-center items-center h-full md:text-[6vw] text-[20vw] leading-[7vh] lowercase">
          <ul className="flex flex-col gap-12 text-center overflow-hidden z-40">
            {Links_List.map((item, index) => (
              <li
                onClick={() => handleNavOpenOrNot()}
                onMouseEnter={() => {
                  setLinkIndex(index);
                }}
                className={`link-li opacity-0 translate-x-32 duration-100 flex flex-col p-2 ${linkIndex != index && "blur-sm"}`}
              >
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col justify-between absolute top-0 left-0 w-full">
          <div className="slide-anim w-full h-[25vh] bg-[#e6e2b3]"></div>
          <div className="slide-anim w-full h-[25vh] bg-[#e6e2b3]"></div>
          <div className="slide-anim w-full h-[25vh] bg-[#e6e2b3]"></div>
          <div className="slide-anim w-full h-[25vh] bg-[#e6e2b3]"></div>
        </div>
      </div>
    </header>
  );
}
