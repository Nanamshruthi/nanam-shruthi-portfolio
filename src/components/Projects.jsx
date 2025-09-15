import React from 'react';


const projects = [
{
title: 'Voice To Visuals',
period: 'Aug 2023 - Sep 2023',
desc: 'This project converts spoken words into visual representations using AI and NLP, enabling users to generate images, charts, or animations from voice commands.',
tech: ['NLP','Python','Flask','GANs']
},
{
title: 'Plant Disease Detection',
period: 'Apr 2024 - May 2024',
desc: 'A CNN-based system for detecting plant diseases from leaf images to help farmers with early diagnosis and treatment.',
tech: ['TensorFlow', 'MobileNet', 'Flask', 'JS'] ,
live: 'https://plant-disease-detector-2cku.onrender.com'
}
];


export default function Projects(){
return (
<section id="projects" className="py-20 px-6">
<div className="max-w-6xl mx-auto text-center">
<h2 className="text-4xl font-bold neon-title mb-8">Projects</h2>
<div className="grid md:grid-cols-2 gap-6">
{projects.map((p, idx)=> (
<div key={idx} className="glass p-6 rounded-2xl hover:scale-[1.02] transition">
<div className="flex justify-between items-start">
<div>
<h3 className="text-2xl font-semibold">{p.title}</h3>
<p className="text-sm text-gray-400">{p.period}</p>
</div>
{p.live && <a href={p.live} target="_blank" rel="noreferrer" className="text-cyan-300">Live</a>}
</div>
<p className="mt-3 text-gray-300">{p.desc}</p>
<div className="mt-4 flex flex-wrap gap-2">
{p.tech.map(t=> <span key={t} className="px-3 py-1 bg-[#07101a] rounded-full text-sm text-cyan-200">{t}</span>)}
</div>
</div>
))}
</div>
</div>
</section>
)
}