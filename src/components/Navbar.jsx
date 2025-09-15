import React, {useState} from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { HiMenuAlt3, HiX } from 'react-icons/hi';


export default function Navbar(){
const [open, setOpen] = useState(false);
const links = [
{name:'Home', to:'home'},
{name:'About', to:'about'},
{name:'Skills', to:'skills'},
{name:'Projects', to:'projects'},
{name:'Blog', to:'blog'},
{name:'Contact', to:'contact'},
];


return (
<nav className="fixed w-full z-50 top-0 left-0 bg-transparent backdrop-blur-md">
<div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
<div className="flex items-center gap-4">
<div className="text-2xl font-extrabold neon-title">Nanam Shruthi</div>
</div>


<div className="hidden md:flex items-center gap-6">
{links.map(l=> (
<ScrollLink key={l.to} to={l.to} smooth={true} offset={-60} className="cursor-pointer hover:text-purple-400">
{l.name}
</ScrollLink>
))}
<a href="/resume.pdf" download className="ml-4 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 text-black font-semibold">Download Resume</a>
</div>


<div className="md:hidden">
<button onClick={()=>setOpen(!open)} className="p-2">
{open ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
</button>
</div>
</div>


{open && (
<div className="md:hidden px-6 pb-6">
<div className="flex flex-col gap-4">
{links.map(l=> (
<ScrollLink key={l.to} to={l.to} smooth={true} offset={-60} className="cursor-pointer hover:text-purple-400">{l.name}</ScrollLink>
))}
<a href="/resume.pdf" download className="mt-2 inline-block px-4 py-2 rounded-xl bg-cyan-400 text-black font-semibold">Download Resume</a>
</div>
</div>
)}
</nav>
)
}