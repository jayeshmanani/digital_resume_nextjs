'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Terminal() {
    const [lines, setLines] = useState([
        { type: 'command', text: 'whoami' },
        { type: 'output', text: 'Microsoft Certified: SecOps Analyst (SC-200)' },
        { type: 'output', text: 'Master of Science in Computer Science' },
        { type: 'output', text: 'Passionate about AI, ML, & Cloud Security' },
        { type: 'command', text: 'cat skills.json' },
        { type: 'output', text: '["Python", "Linux", "Azure", "Splunk", "Terraform"]' },
    ]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-full max-w-lg mx-auto glass rounded-xl overflow-hidden border border-white/10 bg-[#0d1117]/90 shadow-2xl"
        >
            {/* Terminal Header */}
            <div className="bg-[#161b22] px-4 py-2 flex items-center gap-2 border-b border-white/5">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                </div>
                <div className="flex-1 text-center text-xs font-mono text-muted/60">
                    jayesh@security-ops:~
                </div>
            </div>

            {/* Terminal Content */}
            <div className="p-6 font-mono text-sm h-[300px] overflow-y-auto custom-scrollbar">
                {lines.map((line, index) => (
                    <div key={index} className="mb-2">
                        {line.type === 'command' ? (
                            <div className="flex gap-2 text-white">
                                <span className="text-primary">➜</span>
                                <span className="text-yellow-400">~</span>
                                <span>{line.text}</span>
                            </div>
                        ) : (
                            <div className="text-muted pl-6">{line.text}</div>
                        )}
                    </div>
                ))}
                <div className="flex gap-2 text-white animate-pulse">
                    <span className="text-primary">➜</span>
                    <span className="text-yellow-400">~</span>
                    <span className="w-2 h-5 bg-primary block"></span>
                </div>
            </div>
        </motion.div>
    );
}
