import React from 'react';


export default function Footer(){
return (
<footer className="mt-12">
<div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
<div>
<h3 className="text-2xl font-bold text-cyan-300">Nanam Shruthi</h3>
<p className="text-gray-400 mt-3">Aspiring Software Developer passionate about creating innovative solutions and transforming ideas into impactful code.</p>
<div className="flex gap-3 mt-4">
<a href="mailto:shruthinanam7@gmail.com" className="p-3 rounded-full glass">✉️</a>
<a href="https://linkedin.com/in/nanam-shruthi" target="_blank" rel="noreferrer" className="p-3 rounded-full glass">in</a>
<a href="https://github.com/Shruthinaan" target="_blank" rel="noreferrer" className="p-3 rounded-full glass">🐙</a>
</div>
</div>


<div>
<h4 className="text-xl font-semibold text-cyan-300">Quick Links</h4>
<ul className="mt-3 space-y-2 text-gray-400">
<li><a href="#home" className="footer-link">Home</a></li>
<li><a href="#about" className="footer-link">About</a></li>
<li><a href="#projects" className="footer-link">Projects</a></li>
<li><a href="#blog" className="footer-link">Blog</a></li>
<li><a href="#contact" className="footer-link">Contact</a></li>
</ul>
</div>


<div>
<h4 className="text-xl font-semibold text-cyan-300">Get In Touch</h4>
<p className="mt-3 text-gray-400"><strong>Email:</strong> shruthinanam7@gmail.com</p>
<p className="mt-2 text-gray-400"><strong>Phone:</strong> +91 9005599369</p>
<p className="mt-2 text-gray-400"><strong>Location:</strong> Hyderabad, India</p>
</div>
</div>


<div className="border-t border-gray-800">
<div className="max-w-6xl mx-auto px-6 py-6 text-gray-400 flex items-center justify-between">
<div>© 2025 Nanam Shruthi. Made with <span className="text-pink-400">❤</span> and lots of code.</div>
<a href="#home" className="px-4 py-2 bg-[#0b1220] rounded-full hover:opacity-80">↑ Back to Top</a>
</div>
</div>
</footer>
)
}