import React, {useState} from 'react';


export default function Contact(){
const [form, setForm] = useState({name:'', email:'', message:''});
const [sent, setSent] = useState(false);


function handleChange(e){
setForm({...form, [e.target.name]: e.target.value});
}


function handleSubmit(e){
e.preventDefault();
// For now we'll only simulate send. You can integrate emailjs or a backend later.
console.log('Send form', form);
setSent(true);
setTimeout(()=> setSent(false), 4000);
setForm({name:'', email:'', message:''});
}


return (
<section id="contact" className="py-20 px-6">
<div className="max-w-6xl mx-auto">
<h2 className="text-4xl font-bold neon-title text-center mb-6">Get In <span className="text-cyan-300">Touch</span></h2>
<p className="text-center text-gray-300 mb-8">Ready to collaborate on exciting projects or discuss opportunities? I'd love to hear from you!</p>


<div className="grid md:grid-cols-2 gap-8">
<form onSubmit={handleSubmit} className="glass p-6 rounded-2xl">
<h3 className="text-xl font-semibold text-cyan-300 mb-4">Send a Message</h3>
<label className="text-sm text-gray-300">Name</label>
<input name="name" value={form.name} onChange={handleChange} className="input-field w-full mt-2 mb-4" placeholder="Your name" />
<label className="text-sm text-gray-300">Email</label>
<input name="email" value={form.email} onChange={handleChange} className="input-field w-full mt-2 mb-4" placeholder="your.email@example.com" />
<label className="text-sm text-gray-300">Message</label>
<textarea name="message" value={form.message} onChange={handleChange} className="input-field w-full mt-2 mb-4 h-36" placeholder="Tell me about your project or say hello..."></textarea>
<button type="submit" className="w-full px-6 py-3 rounded-full bg-cyan-400 text-black font-semibold">{sent ? 'Message Sent ✓' : 'Send Message'}</button>
</form>


<div className="glass p-6 rounded-2xl">
<h3 className="text-xl font-semibold text-purple-400 mb-4">Let's Connect</h3>
<p className="text-gray-300 mb-4">I'm always excited to discuss new opportunities, collaborate on interesting projects, or simply chat about technology and innovation.</p>
<div className="space-y-4">
<div className="p-4 bg-[#07101a] rounded-xl">
<div className="text-sm text-gray-400">Email</div>
<div className="font-semibold">shruthinanam7@gmail.com</div>
</div>


<div className="p-4 bg-[#07101a] rounded-xl">
<div className="text-sm text-gray-400">Phone</div>
<div className="font-semibold">+91 9005599369</div>
</div>


<div className="p-4 bg-[#07101a] rounded-xl">
<div className="text-sm text-gray-400">LinkedIn</div>
<a className="font-semibold text-cyan-300" href="https://linkedin.com/in/nanam-shruthi" target="_blank" rel="noreferrer">Nanam Shruthi</a>
</div>


</div>
</div>
</div>
</div>
</section>
)
}