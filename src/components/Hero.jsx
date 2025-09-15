import React from 'react';
import ParticlesBg from './ParticlesBg';


export default function Hero(){
return (
<header id="home" className="hero-height relative flex items-center justify-center text-center px-6">
<ParticlesBg />
<div className="max-w-4xl mx-auto relative z-10">
<h1 className="text-6xl md:text-7xl font-extrabold neon-title mb-4">Nanam Shruthi</h1>
<p className="text-xl md:text-2xl text-gray-300 mb-6">Aspiring Software Developer | Data Science Enthusiast</p>
<p className="text-gray-400 italic mb-8">"Transforming ideas into code and solutions."</p>


<div className="flex justify-center gap-4">
<a href="#projects" className="px-6 py-3 rounded-full bg-cyan-400/90 text-black font-semibold shadow-neon">View My Projects</a>
<a href="/resume.pdf" download className="px-6 py-3 rounded-full bg-transparent border border-gray-700">Download Resume</a>
</div>


<div className="mt-8 flex justify-center gap-6">
<a href="mailto:shruthinanam7@gmail.com" className="p-3 rounded-full glass hover:scale-105 transition">✉️</a>
<a href="https://linkedin.com/in/nanam-shruthi" target="_blank" rel="noreferrer" className="p-3 rounded-full glass">in</a>
<a href="https://github.com/Shruthinaan" target="_blank" rel="noreferrer" className="p-3 rounded-full glass">🐙</a>
</div>
</div>
</header>
)
}