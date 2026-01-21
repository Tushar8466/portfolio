import React from 'react';
import { Link } from 'react-router-dom';

function Projects() {
    const projects = [
        {
            id: 1,
            title: "StyleRush",
            description: "A stunning web application built with HTML , CSS and JavaScript",
            tags: ["HTML", "CSS", "JavaScript"],
            link: "https://stylerush.vercel.app/",
            github: "https://github.com/Tushar8466/stylerush",
            image: "/stylerush.png"
        },
        {
            id: 2,
            title: "Architect Portfolio",
            description: "Website for visualizing architectural wonders from popular architects",
            tags: ["HTML", "CSS", "JavaScript"],
            link: "https://architecture-portfolio-solo-16t6.vercel.app/",
            github: "https://github.com/Tushar8466/Architecture-Info",
            image: "/architect-portfolio1.png"
        },
        {
            id: 3,
            title: "Movie Finder",
            description: "A web application that allows users to search for movies and get information about them.",
            tags: ["HTML", "CSS", "JavaScript"],
            github: "https://github.com/Tushar8466/Movie-Finder",
            link: "https://movie-finder-delta-ten.vercel.app/",
            image: "/moviefinder.png"
        },
        {
            id: 4,
            title: "Nasa space app challenge",
            description: "AI-powered content generation tool.",
            tags: ["HTML", "CSS", "JavaScript"],
            github: "https://github.com/Tushar8466/Nasa",
            link: "https://nasa-ivory-ten.vercel.app/",
            image: "/nasa.png"
        },
        {
            id: 5,
            title: "Project Five",
            description: "Social media aggregator and analytics platform.",
            tags: ["Vue.js", "Firebase", "Sass"],
            link: "#",
            image: "/social-analytics.png"
        },
        {
            id: 6,
            title: "Project Six",
            description: "Mobile-first fitness tracking application.",
            tags: ["React Native", "Redux", "GraphQL"],
            link: "#",
            image: "/fitness-tracker.png"
        }
    ];

    return (
        <div className='pt-24 min-h-screen bg-black text-white px-6 pb-20'>
            <div className="container mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
                    My <span className="text-purple-500">Projects</span>
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="relative z-10 flex-grow">
                                <div className="h-48 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 mb-6 flex items-center justify-center text-gray-700 overflow-hidden relative">
                                    {project.image ? (
                                        <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                    ) : (
                                        <span className="text-4xl">🖼️</span>
                                    )}
                                </div>

                                <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors">{project.title}</h3>
                                <p className="text-gray-400 mb-6 line-clamp-2">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="px-3 py-1 text-xs font-medium rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="relative z-10 flex gap-4 mt-auto">
                                <Link to={project.link} className="flex-1 px-4 py-2 bg-white text-black text-center font-bold rounded-lg transition-all duration-300 hover:bg-purple-500 hover:text-white hover:scale-105 flex items-center justify-center gap-2">
                                    <span>Demo</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </Link>
                                <Link to={project.github} className="flex-1 px-4 py-2 bg-white/10 text-white text-center font-bold rounded-lg transition-all duration-300 hover:bg-white/20 hover:scale-105 flex items-center justify-center gap-2 border border-white/10">
                                    <span>Code</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects
