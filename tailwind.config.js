module.exports = {
content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
theme: {
extend: {
colors: {
neon: '#00e6ff',
purpleNeon: '#9b59ff'
},
boxShadow: {
'neon': '0 10px 30px rgba(0, 230, 255, 0.06), inset 0 2px 8px rgba(0,0,0,0.5)'
}
},
},
plugins: [],
}