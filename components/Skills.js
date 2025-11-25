'use client';
import { BentoGrid, BentoGridItem } from "./BentoGrid";
import { FaShieldAlt, FaCode, FaServer, FaCloud, FaDatabase, FaFileContract } from "react-icons/fa";

export default function Skills() {
    return (
        <section id="skills" className="py-20 px-6">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">
                Skills & <span className="text-primary">Technologies</span>
            </h2>
            <BentoGrid className="max-w-4xl mx-auto">
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        icon={item.icon}
                        className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                    />
                ))}
            </BentoGrid>
        </section>
    );
}

const MiniTerminal = () => (
    <div className="w-full h-full bg-[#1e1e1e] rounded-lg p-2 font-mono text-[10px] leading-tight text-green-400 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-4 bg-[#2d2d2d] flex items-center gap-1 px-2">
            <div className="w-2 h-2 rounded-full bg-red-500"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
        </div>
        <div className="mt-4 space-y-1">
            <p><span className="text-blue-400">def</span> <span className="text-yellow-400">secure_pipeline</span>():</p>
            <p className="pl-2">data = load_data()</p>
            <p className="pl-2">encrypted = <span className="text-purple-400">encrypt</span>(data)</p>
            <p className="pl-2"><span className="text-blue-400">return</span> encrypted</p>
            <p className="animate-pulse">_</p>
        </div>
    </div>
);

const AnimatedShield = () => (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-900/20 to-slate-900/20 rounded-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <FaShieldAlt className="text-6xl text-primary/20 absolute animate-pulse-slow" />
        <FaShieldAlt className="text-4xl text-primary z-10" />
        <div className="absolute w-full h-full border border-primary/30 rounded-full scale-0 animate-[ping_3s_linear_infinite]"></div>
    </div>
);

const CloudNetwork = () => (
    <div className="w-full h-full bg-[#0f172a] rounded-xl relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-1 opacity-20">
            {[...Array(36)].map((_, i) => (
                <div key={i} className="bg-blue-500/30 rounded-sm"></div>
            ))}
        </div>
        <div className="relative z-10 flex gap-4">
            <FaCloud className="text-3xl text-white animate-bounce" />
            <FaServer className="text-3xl text-blue-400 animate-bounce delay-100" />
            <FaDatabase className="text-3xl text-green-400 animate-bounce delay-200" />
        </div>
    </div>
);

const PipelineFlow = () => (
    <div className="w-full h-full bg-[#0d1117] rounded-xl p-4 flex items-center justify-between relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent animate-[shimmer_2s_infinite] -skew-x-12"></div>
        <div className="w-8 h-8 rounded bg-blue-900/50 border border-blue-500/30 flex items-center justify-center text-xs text-blue-300">Code</div>
        <div className="h-0.5 flex-1 bg-blue-500/30 mx-1 relative">
            <div className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-blue-400 rounded-full animate-[moveRight_2s_linear_infinite]"></div>
        </div>
        <div className="w-8 h-8 rounded bg-purple-900/50 border border-purple-500/30 flex items-center justify-center text-xs text-purple-300">Test</div>
        <div className="h-0.5 flex-1 bg-purple-500/30 mx-1 relative">
            <div className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-purple-400 rounded-full animate-[moveRight_2s_linear_infinite_0.5s]"></div>
        </div>
        <div className="w-8 h-8 rounded bg-green-900/50 border border-green-500/30 flex items-center justify-center text-xs text-green-300">Deploy</div>
    </div>
);

const DataStream = () => (
    <div className="w-full h-full bg-black rounded-xl p-2 font-mono text-[10px] text-green-500/80 overflow-hidden flex flex-col">
        {[...Array(6)].map((_, i) => (
            <div key={i} className="truncate animate-[slideUp_5s_linear_infinite]" style={{ animationDelay: `${i * 0.5}s` }}>
                {`0x${Math.random().toString(16).slice(2, 10)}...${Math.random().toString(16).slice(2, 6)}`}
            </div>
        ))}
    </div>
);

const ComplianceDoc = () => (
    <div className="w-full h-full bg-slate-800 rounded-xl p-3 relative flex flex-col gap-2 border border-slate-700">
        <div className="w-1/2 h-2 bg-slate-600 rounded"></div>
        <div className="w-full h-1 bg-slate-600/50 rounded"></div>
        <div className="w-full h-1 bg-slate-600/50 rounded"></div>
        <div className="w-3/4 h-1 bg-slate-600/50 rounded"></div>
        <div className="absolute bottom-2 right-2 text-green-400 text-2xl">
            <FaFileContract />
        </div>
        <div className="absolute top-2 right-2 w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
        </div>
    </div>
);

const items = [
    {
        title: "Security Data Platforms",
        description: "SIEM (Splunk), Security Event Monitoring.",
        header: <AnimatedShield />,
        icon: <FaShieldAlt className="h-4 w-4 text-primary" />,
    },
    {
        title: "Programming",
        description: "Python, Bash, SQL, Linux, C, JavaScript.",
        header: <MiniTerminal />,
        icon: <FaCode className="h-4 w-4 text-green-400" />,
    },
    {
        title: "DevOps & Automation",
        description: "CI/CD, Terraform, Docker, Kubernetes.",
        header: <PipelineFlow />,
        icon: <FaServer className="h-4 w-4 text-purple-400" />,
    },
    {
        title: "Cloud & Infrastructure",
        description: "MS Azure, AWS, GCP, Git.",
        header: <CloudNetwork />,
        icon: <FaCloud className="h-4 w-4 text-orange-400" />,
    },
    {
        title: "Data Processing",
        description: "ETL Pipelines, Data Streaming.",
        header: <DataStream />,
        icon: <FaDatabase className="h-4 w-4 text-cyan-400" />,
    },
    {
        title: "Compliance",
        description: "NIST, SOC, GDPR, PCI DSS.",
        header: <ComplianceDoc />,
        icon: <FaFileContract className="h-4 w-4 text-red-400" />,
    },
];
