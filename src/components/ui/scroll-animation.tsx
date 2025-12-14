'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactNode, useRef } from 'react';

interface ScrollAnimationProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right';
}

export default function ScrollAnimation({
    children,
    className = '',
    delay = 0,
    direction = 'up'
}: ScrollAnimationProps) {
    const ref = useRef(null);

    const getInitialPosition = () => {
        switch (direction) {
            case 'up': return { y: 100, x: 0 };
            case 'down': return { y: -100, x: 0 };
            case 'left': return { y: 0, x: 100 };
            case 'right': return { y: 0, x: -100 };
            default: return { y: 100, x: 0 };
        }
    };

    const initial = getInitialPosition();

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{
                opacity: 0,
                y: initial.y,
                x: initial.x
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                x: 0
            }}
            viewport={{
                once: true,
                margin: '-50px',
                amount: 0.3
            }}
            transition={{
                duration: 0.8,
                delay,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
        >
            {children}
        </motion.div>
    );
}

interface ParallaxScrollProps {
    children: ReactNode;
    className?: string;
    offset?: number;
}

export function ParallaxScroll({ children, className = '', offset = 50 }: ParallaxScrollProps) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

    return (
        <motion.div
            ref={ref}
            className={className}
            style={{ y }}
        >
            {children}
        </motion.div>
    );
}

interface FadeInScrollProps {
    children: ReactNode;
    className?: string;
    delay?: number;
}

export function FadeInScroll({ children, className = '', delay = 0 }: FadeInScrollProps) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{
                duration: 0.6,
                delay,
                ease: 'easeOut',
            }}
        >
            {children}
        </motion.div>
    );
}

interface StaggerContainerProps {
    children: ReactNode;
    className?: string;
    staggerDelay?: number;
}

export function StaggerContainer({ children, className = '', staggerDelay = 0.1 }: StaggerContainerProps) {
    return (
        <motion.div
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={{
                visible: {
                    transition: {
                        staggerChildren: staggerDelay,
                    },
                },
            }}
        >
            {children}
        </motion.div>
    );
}

export function StaggerItem({ children, className = '' }: { children: ReactNode; className?: string }) {
    return (
        <motion.div
            className={className}
            variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.6,
                        ease: [0.25, 0.46, 0.45, 0.94],
                    }
                },
            }}
        >
            {children}
        </motion.div>
    );
}
