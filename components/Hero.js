'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Terminal from './Terminal';

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 pt-24 pb-12 gap-12 max-w-7xl mx-auto">

            {/* Text Content */}
            <div className="flex-1 space-y-6 text-center md:text-left z-10">
                <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-primary font-mono text-lg"
                >
                    Hello, I'm
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-5xl md:text-7xl font-bold text-white tracking-tight"
                >
                    Jayesh <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-glitch">Manani</span>
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-2xl md:text-3xl text-muted font-light"
                >
                    Cyber Security Analyst & <br className="hidden md:block" /> Cloud Security Engineer
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4"
                >
                    <Link href="#contact" className="px-8 py-3 bg-primary text-bg font-bold rounded-full hover:bg-white transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(0,242,255,0.5)]">
                        Get in Touch
                    </Link>
                    <Link href="#experience" className="px-8 py-3 border border-white/20 text-white rounded-full hover:bg-white/5 transition-all hover:scale-105">
                        View Work
                    </Link>
                </motion.div>
            </div>

            {/* Visual Content */}
            <div className="flex-1 w-full max-w-lg z-10">
                <Terminal />
            </div>

        </section>
    );
}
