"use client";
import gsap from "gsap";
import { useEffect, useState } from "react";
import Link from "next/link";

const projectDetails = [
  {
    title: "Snippethub Website",
    img: "https://images.unsplash.com/photo-1519043916581-33ecfdba3b1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGluZnJhc3RydWN0dXJlfGVufDB8fDB8fHww",
    src: "https://snippethub-gfub.vercel.app/",
    category: "Developer Tools",
    date: "2024",
  },
  {
    title: "Infrastructure Website",
    img: "https://images.unsplash.com/photo-1519043916581-33ecfdba3b1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGluZnJhc3RydWN0dXJlfGVufDB8fDB8fHww",
    src: "https://dkumargroup.com/",
    category: "Infrastructure Development",
    date: "2024",
  },
  {
    title: "DreamSpace Renovations",
    img: "https://images.unsplash.com/photo-1597476817120-9b82cef5ce82?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVub3ZhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    src: "https://bijliwalacontracting.ca/",
    category: "Renovations & Electrical Solutions",
    date: "2024",
  },
  {
    title: "Wabi-Sabi Resort",
    img: "https://plus.unsplash.com/premium_photo-1682913629540-3857602b540c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVzb3J0fGVufDB8fDB8fHww",
    category: "Eco-Resort",
    src: "https://wabisabiresorts.com/",
    date: "2024",
  },
  {
    title: "Jia Organic Eco Resort",
    img: "https://images.unsplash.com/photo-1722428667763-3d1cae40635d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHJlc29ydHxlbnwwfHwwfHx8MA%3D%3D",
    src: "https://dkumargroup.com/",
    category: "Eco-Friendly Retreat",
    date: "2024",
  },
  // {
  //   title: "infrastrucure website",
  //   img: "https://plus.unsplash.com/premium_photo-1661630690483-f643a97e14b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY1fHxwcm9qZWN0c3xlbnwwfHwwfHx8MA%3D%3D",
  //   src: "https://dkumargroup.com/",
  //   category: "infrastrucure",
  //   date: "2024",
  // },
];

export default function Projects() {
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    const timlineProject = gsap.timeline({
      scrollTrigger: {
        trigger: "#project-heading",
        start: "0% 80%",
        end: "60% 60%",
        // markers: true,
        // pin: true,
        scrub: 2,
      },
    });

    timlineProject.from(".project-span", {
      y: 200,
      stagger: 0.2,
      opacity: 1,
      // ease: "expo.inOut",
      duration: 2.6,
    });
  }, []);

  return (
    <section id="project-container" className="py-12 bg-[#1a1a1a]">
      <div className="max-w-14xl mx-auto px-3">
        <h2
          id="project-heading"
          className="text-white text-center md:text-[8vw] text-[14vw] uppercase font-normal overflow-hidden"
        >
          {`Projects`.split("").map((item) => (
            <span className="inline-block project-span">{item}</span>
          ))}
        </h2>

        <div
          className="mt-6 flex flex-col gap-16 relative"
          onMouseMove={(e) => {
            gsap.to("#preview", {
              left: e.clientX - 100,
              top: e.clientY - 200,
            });
          }}
          onMouseEnter={() => {
            gsap.to("#preview", {
              scale: 1,
              duration: 1,
              ease: "expo.inOut",
            });
          }}
          onMouseLeave={() => {
            gsap.to("#preview", {
              scale: 0,
            });
          }}
        >
          <div className="grid grid-cols-3 border-b border-b-white/30 pb-4 text-white capitalize md:text-2xl font-bold">
            <div className="text-center">Name</div>
            <div className="text-center">category</div>
            <div className="text-center">Year</div>
          </div>

          {projectDetails.map((item, index) => (
            <div
              className="grid grid-cols-3 border-b border-b-white/40 pb-4 text-white md:text-sm text-xs"
              onMouseEnter={() => {
                setIndex(index);
              }}
            >
              <div className="text-center">
                <Link href={item.src} target="_blank">
                  {item.title}
                </Link>
              </div>
              <div className="text-center">{item.category}</div>
              <div className="text-center">{item.date}</div>
            </div>
          ))}

          <div
            id="preview"
            className="absolute md:w-80 w-40  md:h-80 h-40 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 overflow-hidden pointer-events-none scale-0"
          >
            {projectDetails.map((item) => (
              <div
                className="w-full h-full transition-all duration-700"
                style={{
                  transform: `translateY(-${index * 100}%)`,
                }}
              >
                <img
                  src={item.img}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
