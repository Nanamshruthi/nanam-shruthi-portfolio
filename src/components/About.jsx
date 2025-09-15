import React from 'react';


export default function About(){
return (
<section id="about" className="py-20 px-6">
<div className="max-w-6xl mx-auto text-center">
<h2 className="text-4xl font-bold neon-title mb-3">About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Me</span></h2>
<p className="max-w-3xl mx-auto text-gray-300 mb-8">I am a B.Tech Data Science student at Malla Reddy Engineering College with a CGPA of 9.0. I love solving problems with code and building projects that create impact. I have hands-on experience with machine learning, web development, and data visualization and have participated in hackathons and project expos such as Vishesh 2023.</p>


<div className="grid md:grid-cols-2 gap-8 mt-8">
<div className="glass p-6 rounded-2xl">
<h3 className="text-xl font-semibold text-cyan-300 mb-3">Hello! I'm Nanam Shruthi</h3>
<p className="text-gray-300">Aspiring Software Developer passionate about creating innovative solutions and transforming ideas into impactful code.</p>
</div>


<div className="glass p-6 rounded-2xl">
<h3 className="text-xl font-semibold text-cyan-300 mb-3">Education Journey</h3>
<ul className="space-y-4 text-gray-300">
<li>
<strong>B.Tech (2022 - 2026)</strong><br /> Malla Reddy Engineering College (Data Science) — CGPA: 9.0
</li>
<li>
<strong>Intermediate (2020 - 2022)</strong><br /> Kakatiya Jr College, Nizamabad — 94%
</li>
<li>
<strong>School (2019 - 2020)</strong><br /> Scholars High School, Nizamabad — GPA: 10.0
</li>
</ul>
</div>
</div>
</div>
</section>
)
}