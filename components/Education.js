export default function Education() {
    return (
        <section id="education" className="py-20 px-6 max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-white">
                Education & <span className="text-primary">Certifications</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
                {/* Education Column */}
                <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                        <span className="text-primary">/</span> Education
                    </h3>
                    <div className="glass p-6 rounded-xl hover:border-primary/50 transition-colors">
                        <h4 className="text-xl font-bold text-white">Master of Science (M.Sc. Cybersecurity)</h4>
                        <p className="text-primary font-mono text-sm">BTU Cottbus | Oct 2025</p>
                    </div>
                    <div className="glass p-6 rounded-xl hover:border-primary/50 transition-colors">
                        <h4 className="text-xl font-bold text-white">Master of Science (M.Sc. Computer Science)</h4>
                        <p className="text-primary font-mono text-sm">University of Stuttgart | Apr 2022 – Apr 2025</p>
                        <p className="text-muted text-sm mt-2">Thesis: GenAI-powered chatbot development using cloud-based infrastructure.</p>
                    </div>
                    <div className="glass p-6 rounded-xl hover:border-primary/50 transition-colors">
                        <h4 className="text-xl font-bold text-white">Bachelor of Engineering</h4>
                        <p className="text-primary font-mono text-sm">L.D. College of Engineering | Aug 2014 – Jan 2019</p>
                    </div>
                </div>

                {/* Certifications Column */}
                <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                        <span className="text-primary">/</span> Certifications
                    </h3>
                    <div className="glass p-6 rounded-xl">
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1">▹</span>
                                <span className="text-muted">Microsoft Certified: Security Operations Analyst (SC-200)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1">▹</span>
                                <span className="text-muted">Google Cybersecurity Professional Certification (Ongoing)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1">▹</span>
                                <span className="text-muted">Generative AI with Large Language Models | DeepLearning.AI</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1">▹</span>
                                <span className="text-muted">IBM Data Science Specialization | Coursera</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
