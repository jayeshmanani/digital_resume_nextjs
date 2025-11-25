'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';

const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4"
        >
            <nav className="glass rounded-full px-6 py-3 flex items-center justify-between w-full max-w-5xl">
                <Link href="/" className="text-2xl font-bold font-mono text-primary tracking-tighter">
                    JM<span className="text-white">.</span>
                </Link>

                {/* Desktop Nav */}
                <ul className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <Link
                                href={item.href}
                                className="text-sm font-medium text-muted hover:text-primary transition-colors hover:text-glow"
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="hidden md:flex items-center gap-4">
                    <a href="https://github.com/jayeshmanani/" target="_blank" className="text-muted hover:text-white transition-colors">
                        <FaGithub size={20} />
                    </a>
                    <a href="https://linkedin.com/in/mananijayesh" target="_blank" className="text-muted hover:text-white transition-colors">
                        <FaLinkedin size={20} />
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </nav>

            {/* Mobile Nav Overlay */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute top-24 left-4 right-4 glass rounded-2xl p-6 md:hidden flex flex-col gap-4"
                >
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-lg font-medium text-center py-2 hover:text-primary"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                </motion.div>
            )}
        </motion.header>
    );
}
