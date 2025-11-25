'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaHome, FaUser, FaCode, FaBriefcase, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function CommandPalette() {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');

    const commands = [
        { name: 'Go to Home', icon: <FaHome />, action: () => window.location.href = '#home' },
        { name: 'Go to About', icon: <FaUser />, action: () => window.location.href = '#about' },
        { name: 'Go to Skills', icon: <FaCode />, action: () => window.location.href = '#skills' },
        { name: 'Go to Experience', icon: <FaBriefcase />, action: () => window.location.href = '#experience' },
        { name: 'Contact Me', icon: <FaEnvelope />, action: () => window.location.href = '#contact' },
        { name: 'View GitHub', icon: <FaGithub />, action: () => window.open('https://github.com/jayeshmanani/', '_blank') },
        { name: 'View LinkedIn', icon: <FaLinkedin />, action: () => window.open('https://linkedin.com/in/mananijayesh', '_blank') },
    ];

    const filtered = commands.filter(cmd =>
        cmd.name.toLowerCase().includes(query.toLowerCase())
    );

    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                setIsOpen(true);
            }
            if (e.key === 'Escape') setIsOpen(false);
        };
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-start justify-center pt-[20vh]"
                    onClick={() => setIsOpen(false)}
                >
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        className="w-full max-w-lg glass rounded-xl overflow-hidden shadow-2xl border border-white/20"
                        onClick={e => e.stopPropagation()}
                    >
                        <div className="flex items-center px-4 py-3 border-b border-white/10">
                            <FaSearch className="text-muted mr-3" />
                            <input
                                autoFocus
                                type="text"
                                placeholder="Type a command..."
                                className="bg-transparent border-none outline-none text-white w-full placeholder:text-muted/50"
                                value={query}
                                onChange={e => setQuery(e.target.value)}
                            />
                            <span className="text-xs text-muted border border-white/10 px-1.5 py-0.5 rounded">ESC</span>
                        </div>
                        <div className="max-h-[300px] overflow-y-auto p-2">
                            {filtered.map((cmd, i) => (
                                <button
                                    key={i}
                                    className="w-full flex items-center gap-3 px-3 py-2 text-sm text-muted hover:text-white hover:bg-white/10 rounded-lg transition-colors text-left"
                                    onClick={() => {
                                        cmd.action();
                                        setIsOpen(false);
                                    }}
                                >
                                    {cmd.icon}
                                    {cmd.name}
                                </button>
                            ))}
                            {filtered.length === 0 && (
                                <div className="p-4 text-center text-muted text-sm">No results found.</div>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
