import React from 'react';
import { loadFull } from 'tsparticles';
import Particles from 'react-tsparticles';


export default function ParticlesBg(){
const particlesInit = async (engine) => {
await loadFull(engine);
};


return (
<Particles
id="tsparticles"
init={particlesInit}
options={{
fullScreen: { enable: false },
particles: {
number: { value: 60 },
color: { value: ['#00e6ff', '#9b59ff'] },
opacity: { value: 0.6 },
size: { value: { min: 1, max: 3 } },
move: { enable: true, speed: 0.6, direction: 'none' },
},
interactivity: { events: { onHover: { enable: true, mode: 'repulse' } } },
retina_detect: true,
}}
style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
/>
)
}