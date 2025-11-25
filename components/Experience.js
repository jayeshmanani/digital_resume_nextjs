'use client';
import { motion } from 'framer-motion';

const experiences = [
    {
        title: "Master Thesis",
        company: "Mercedes-Benz AG",
        period: "Aug 2024 – April 2025",
        desc: "Designed a secure AI-powered chatbot architecture on Azure. Implemented secure data pipelines with Python, Azure Storage, Databricks.",
    },
    {
        title: "AI & Cloud Engineer",
        company: "Mercedes-Benz AG",
        period: "Apr 2023 – Aug 2024",
        desc: "Developed secure big data processing libraries on Azure. Implemented CI/CD pipelines with GitLab and Jenkins.",
    },
    {
        title: "Software and Power BI Engineer",
        company: "Blickshift GmbH",
        period: "Jul 2022 – Mar 2023",
        desc: "Built secure data processing workflows using Python, Flask, and Power BI. Evaluated cloud applications for security gaps.",
    },
    {
        title: "Software Developer",
        company: "Sameeksha Capital",
        period: "Oct 2020 – Mar 2022",
        desc: "Engineered a secure fund management system on AWS and GCP. Managed cloud security configurations (NIST, SOC).",
    },
];

export default function Experience() {
    return (
        <section id="experience" className="py-20 px-6 max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-white">
                Work <span className="text-primary">Experience</span>
            </h2>

            <div className="relative border-l border-white/20 ml-4 md:ml-10 space-y-12">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="relative pl-8 md:pl-12"
                    >
                        {/* Dot */}
                        <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_rgba(0,242,255,0.8)]"></div>

                        <div className="glass p-6 rounded-xl hover:bg-white/5 transition-colors">
                            <span className="text-sm font-mono text-primary mb-2 block">{exp.period}</span>
                            <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                            <h4 className="text-muted mb-4">{exp.company}</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {exp.desc}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
