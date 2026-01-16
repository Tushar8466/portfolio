import React from 'react';

const TechStack = () => {
    const technologies = [
        { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
        { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
        { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
        { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg" },
        { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        { name: "Mongoose", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongoose/mongoose-original.svg" },
        { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    ];

    return (
        <div className="w-full bg-gradient-to-b from-black via-purple-950/10 to-black py-16 overflow-hidden">
            <div className="container mx-auto px-6 mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
                    Tech  <span className="text-purple-500">Stacks</span>
                </h2>
            </div>

            {/* Infinite Scroll Container */}
            <div className="relative">
                {/* Gradient Overlays */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>

                {/* Continuous Strip */}
                <div className="bg-white/5 backdrop-blur-sm border-y border-white/10 py-6">
                    <div className="flex gap-12 animate-scroll">
                        {/* First set of items */}
                        {technologies.map((tech, index) => (
                            <div
                                key={`tech-1-${index}`}
                                className="flex-shrink-0 flex flex-col items-center gap-2 px-4 py-3 rounded-xl group transition-all duration-300 hover:bg-white/10 hover:backdrop-blur-sm hover:border hover:border-purple-500/50 hover:scale-105"
                            >
                                <div className="w-12 h-12 flex items-center justify-center">
                                    <img
                                        src={tech.icon}
                                        alt={tech.name}
                                        className="w-full h-full object-contain filter brightness-90 group-hover:brightness-110 transition-all"
                                    />
                                </div>
                                <span className="text-white/70 font-medium text-sm whitespace-nowrap group-hover:text-purple-400 transition-colors">
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                        {/* Duplicate set for seamless loop */}
                        {technologies.map((tech, index) => (
                            <div
                                key={`tech-2-${index}`}
                                className="flex-shrink-0 flex flex-col items-center gap-2 px-4 py-3 rounded-xl group transition-all duration-300 hover:bg-white/10 hover:backdrop-blur-sm hover:border hover:border-purple-500/50 hover:scale-105"
                            >
                                <div className="w-12 h-12 flex items-center justify-center">
                                    <img
                                        src={tech.icon}
                                        alt={tech.name}
                                        className="w-full h-full object-contain filter brightness-90 group-hover:brightness-110 transition-all"
                                    />
                                </div>
                                <span className="text-white/70 font-medium text-sm whitespace-nowrap group-hover:text-purple-400 transition-colors">
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }

                .animate-scroll {
                    animation: scroll 15s linear infinite forwards;
                }

                .animate-scroll:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    );
};

export default TechStack;
