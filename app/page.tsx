"use client"
import { MutableRefObject, useEffect, useRef } from "react";
import Section from "./components/Section";
import { useScroll, useTransform } from "framer-motion";
import Lenis from 'lenis';


export default function Home() {

  const container: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  }) 

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
    lenis.raf(time)
    requestAnimationFrame(raf)
    }

requestAnimationFrame(raf)
}, [])

// Sections transform values
let scale = useTransform(scrollYProgress, [0, 0.25], [1, 0.8]);
let rotate = useTransform(scrollYProgress, [0, 0.25], [0, -5]);
let scale2 = useTransform(scrollYProgress, [0.2, 0.35], [0.8, 1]);
let rotate2 = useTransform(scrollYProgress, [0.2, 0.35], [5, 0]);
let scale3 = useTransform(scrollYProgress, [0.5, 0.65], [0.8, 1]);
let rotate3 = useTransform(scrollYProgress, [0.5, 0.65], [-5, 0]);
let scale4 = useTransform(scrollYProgress, [0.8, 1], [0.8, 1]);
let rotate4 = useTransform(scrollYProgress, [0.8, 1], [5, 0]);

  return (
    <main ref={container} className="relative grid min-h-[200dvh] bg-black">
      <Section scale={scale} rotate={rotate} classes="sticky top-0 h-screen bg-[#C72626] text-[3.5vw] flex flex-col items-center justify-center text-white pb-[10vh]">
        <h1>Home</h1>
        <p>This is the home page</p>
      </Section>
      <Section scale={scale2} rotate={rotate2} classes="sticky top-0 h-screen bg-blue-400 text-[3.5vw] flex flex-col items-center justify-center text-white pb-[10vh]">
        <h1>About me</h1>
        <p>This is the about me section</p>
      </Section>
      <Section scale={scale3} rotate={rotate3} classes="sticky top-0 h-screen bg-yellow-400 text-[3.5vw] flex flex-col items-center justify-center text-white pb-[10vh]">
        <h1>About me</h1>
        <p>This is the about me section</p>
      </Section>
      <Section scale={scale4} rotate={rotate4} classes="relative h-screen bg-green-400 text-[3.5vw] flex flex-col items-center justify-center text-white pb-[10vh]">
        <h1>About me</h1>
        <p>This is the about me section</p>
      </Section>
    </main>
  );
}
