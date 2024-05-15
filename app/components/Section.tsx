"use client"

import { useTransform, motion, MotionValue } from "framer-motion";

type SectionProps = {
    children: React.ReactNode;
    classes: string;
    scale: MotionValue<number>;
    rotate: MotionValue<number>;
}

export default function Section ({ children, classes, scale, rotate }: SectionProps) {


    return (
        <motion.section style={{scale, rotate}} className={classes}>
            {children}
        </motion.section>
    )
}