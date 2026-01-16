import React, { Suspense } from 'react';
import Spline from '@splinetool/react-spline';
import { Link } from 'react-router-dom';


const Hero = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden flex items-center justify-start p-5">
            {/* 3D Scene Background */}
            <div className="absolute inset-0 z-0 bg-black">
                <Suspense fallback={<div className="text-white">Loading 3D Scene...</div>}>
                    <Spline
                        scene="https://prod.spline.design/mUMJuOOnWsIR9i8g/scene.splinecode"
                    />
                </Suspense>
            </div>

            {/* Overlay Content */}
            <div className="relative z-10 container px-6 pointer-events-none">
                <div className="max-w-4xl">
                    <h1 className="text-5xl md:text-8xl font-bold font-outfit text-white mb-4 tracking-tighter mix-blend-difference">
                        CREATIVE <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">DEVELOPER</span>
                    </h1>
                    <p className="text-white/60 text-xl max-w-lg mb-8 backdrop-blur-sm bg-black/10 p-4 rounded-lg border border-white/5">
                        Crafting digital experiences with code and creativity.
                        Building the web of tomorrow.
                    </p>
                    <div className="pointer-events-auto flex gap-4">
                        <Link to="/projects" className="px-8 py-3 bg-white text-black font-bold rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-600 hover:text-white hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105">
                            View Work
                        </Link>
                        <Link to="/contact" className="px-8 py-3 glass-panel text-white font-bold rounded-full hover:bg-white/10 transition-colors">
                            Contact Me
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;