import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
    return (
        <section id="contact" className="py-20 px-6 max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8">Get In <span className="text-primary">Touch</span></h2>
            <p className="text-muted text-lg mb-12 max-w-2xl mx-auto">
                I'm currently looking for new opportunities in Cyber Security and Cloud Engineering.
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="flex flex-wrap justify-center gap-6">
                <a
                    href="mailto:mananijh@gmail.com"
                    className="flex items-center gap-3 px-8 py-4 glass rounded-full text-white hover:bg-primary hover:text-bg transition-all hover:scale-105"
                >
                    <FaEnvelope /> mananijh@gmail.com
                </a>
                <a
                    href="https://linkedin.com/in/mananijayesh"
                    target="_blank"
                    className="flex items-center gap-3 px-8 py-4 glass rounded-full text-white hover:bg-[#0077b5] transition-all hover:scale-105"
                >
                    <FaLinkedin /> LinkedIn
                </a>
                <a
                    href="https://github.com/jayeshmanani/"
                    target="_blank"
                    className="flex items-center gap-3 px-8 py-4 glass rounded-full text-white hover:bg-[#333] transition-all hover:scale-105"
                >
                    <FaGithub /> GitHub
                </a>
            </div>

            <div className="mt-12 text-muted flex items-center justify-center gap-2">
                <FaMapMarkerAlt className="text-primary" /> Ludwigsburg, Germany
            </div>
        </section>
    );
}
