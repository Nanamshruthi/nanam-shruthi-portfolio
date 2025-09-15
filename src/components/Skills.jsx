import React from 'react';


const skills = [
'C', 'Basic Python', 'Java', 'JavaScript', 'SQL', 'REST APIs', 'HTML', 'CSS', 'TensorFlow', 'Flask', 'Power BI', 'Git & GitHub'
];


export default function Skills(){
return (
<section id="skills" className="py-20 px-6 bg-gradient-to-b from-[#031021] to-[#041022]">
<div className="max-w-6xl mx-auto text-center">
<h2 className="text-4xl font-bold neon-title mb-8">Skills</h2>
<div className="grid sm:grid-cols-3 gap-6">
{skills.map(s=> (
<div key={s} className="glass p-4 rounded-xl text-left">
<div className="font-semibold text-cyan-300">{s}</div>
</div>
))}
</div>
</div>
</section>
)
}