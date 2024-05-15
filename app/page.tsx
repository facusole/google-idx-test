"use client"
import { MutableRefObject, useEffect, useRef } from "react";
import Section from "./components/Section";
import { useScroll, useTransform, motion, easeIn } from "framer-motion";
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

// Reveal animations

  return (
    <main ref={container} className="relative min-h-[200dvh] bg-black">
      <Section scale={scale} rotate={rotate} classes="sticky top-0 h-screen flex flex-col items-center justify-center gap-16 bg-[#f2f1fe] text-black">
        <motion.h1
         initial={{opacity: 0}}
         animate={{opacity: 1}}
         transition={{duration: 1, ease: easeIn}}
         className="text-[15vw] text-center px-2">
          <a href="https://www.facundosole.com.ar/" target="_blank" rel="noopener noreferrer" className=" hover:text-[#5238F4] transition-colors duration-500">Facundo Solé</a>
        </motion.h1>
        <motion.h2 
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 1, ease: easeIn, delay: 1}}
          className="text-[8vw] text-center">Front End <span className="relative">
          <svg
          className="absolute w-full h-auto -top-6 lg:-top-28 left-0"
          viewBox="0 0 80 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="m 2 40 q 40 -11 75 -3"
              stroke="#5238F4"
              stroke-width="1"
              stroke-linecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: 1,
                opacity: 1,
                transition: {
                  duration: 1,
                  delay: 2,
                  ease: "easeInOut",
                  },
                }}
              >
            </motion.path>
          </svg>
          Developer</span>
      </motion.h2>
      <div className="grid place-items-center gap-2">
        <motion.img
          className="animate-bounce"
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 1, ease: easeIn, delay: 2.5}}
          src="/assets/bottomArrow.svg" />
          <motion.small
            className="text-gray-400 text-center"   
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: 1, ease: easeIn, delay: 2.5}}>
              Scroll down
            </motion.small>
      </div>
      </Section>
      <Section scale={scale2} rotate={rotate2} classes="sticky top-0 grid lg:gap-12 place-items-center h-screen p-8 lg:p-24 text-black bg-texture bg-repeat">
        <a href="https://www.humankind.art/wrestle" target="_blank" rel="noopener noreferrer" className="flex justify-center"><img src="/assets/wrestle-icon.svg" /></a>
        <article className="grid grid-cols-1 lg:grid-cols-[minmax(300px,600px),1fr] gap-10 lg:place-items-center">
          <img src="/assets/wrestle-avatars.gif" alt="Avatars of the NFTs called Humankind" className="max-w-[200px] mx-auto lg:max-w-[500px] rounded-xl"/>
          <p className="max-w-[50ch] text-sm lg:text-2xl mx-4 p-4 lg:p-12 bg-white border-2 border-black rounded-xl">Step into the arena with Wrestle, the latest game feature in Herokind. Pit your Humankind characters against a diverse array of monsters, from the ferocious Alligatornado to the cunning Nerdy Dragon. Strategize your moves and watch your characters grow in this turn-based adventure.</p>
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
