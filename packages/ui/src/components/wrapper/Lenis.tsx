"use client";
import React, { useEffect } from "react";
import Lenis from "lenis";

export default function LenisReact({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis({
      // duration: 1,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return <div>{children}</div>;
}
