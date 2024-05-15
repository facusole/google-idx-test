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
let scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
let rotate = useTransform(scrollYProgress, [0, 0.2], [0, -5]);
let scale2 = useTransform(scrollYProgress, [0.2, 0.3], [0.8, 1]);
let rotate2 = useTransform(scrollYProgress, [0.2, 0.3], [5, 0]);
let scale3 = useTransform(scrollYProgress, [0.5, 0.7], [0.8, 1]);
let rotate3 = useTransform(scrollYProgress, [0.5, 0.7], [-5, 0]);
let scale4 = useTransform(scrollYProgress, [0.8, 1], [0.8, 1]);
let rotate4 = useTransform(scrollYProgress, [0.8, 1], [5, 0]);

  return (
    <main ref={container} className="relative grid min-h-[200dvh] bg-black">
      <Section scale={scale} rotate={rotate} classes="sticky top-0 h-screen bg-[#C72626] text-[3.5vw] flex flex-col items-center justify-center text-white pb-[10vh]">
        <h1>Home</h1>
        <p>This is the home page</p>
      </Section>
      <Section scale={scale2} rotate={rotate2} classes="sticky top-0 h-[150dvh] lg:h-screen p-24 text-black bg-texture bg-repeat">
        <a href="https://www.humankind.art/wrestle" target="_blank" rel="noopener noreferrer" className="flex justify-center"><img src="/assets/wrestle-icon.svg" /></a>
        <article className="grid grid-cols-1 lg:grid-cols-[minmax(300px,600px),1fr] gap-10 place-items-center pt-12">
          <img src="/assets/wrestle-avatars.gif" alt="Avatars of the NFTs called Humankind" className="max-w-[200px] mx-auto lg:max-w-[500px] rounded-xl"/>
          <p className="max-w-[50ch] text-sm lg:text-2xl p-4 lg:p-12 bg-white border-2 border-black rounded-xl">Step into the arena with Wrestle, the latest game feature in Herokind. Pit your Humankind characters against a diverse array of monsters, from the ferocious Alligatornado to the cunning Nerdy Dragon. Strategize your moves and watch your characters grow in this turn-based adventure.</p>
        </article>
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
