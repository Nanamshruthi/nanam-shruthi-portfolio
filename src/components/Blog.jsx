import React from 'react';


const posts = [
{title:'Building My First CNN Model', date:'Aug 2024', desc:'A step-by-step journey of building a CNN for plant disease detection.', link:'#'},
{title:'How I Prepared for Flipkart GRID', date:'Jul 2024', desc:'My strategy and resources for competitive coding and placement prep.', link:'#'},
{title:'Learning React + Tailwind', date:'Jun 2024', desc:'How I built my portfolio with React and Tailwind.', link:'#'}
];


export default function Blog(){
return (
<section id="blog" className="py-20 px-6 bg-gradient-to-b from-[#041022] to-[#021019]">
<div className="max-w-6xl mx-auto text-center">
<h2 className="text-4xl font-bold neon-title mb-10">My <span className="text-cyan-300">Blog</span></h2>
<div className="grid md:grid-cols-3 gap-6">
{posts.map((p,i)=> (
<article key={i} className="glass p-6 rounded-2xl">
<h3 className="text-xl font-semibold text-cyan-200">{p.title}</h3>
<p className="text-sm text-gray-400 mt-1">{p.date}</p>
<p className="mt-3 text-gray-300">{p.desc}</p>
<a href={p.link} className="inline-block mt-4 text-purple-400">Read more →</a>
</article>
))}
</div>
</div>
</section>
)
}