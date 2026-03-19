/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
  		},
  		colors: {
  			primary: '#5A57FF',
  			'primary-hover': '#7B79FF',
  			dark: '#0F172A',
  			background: '#F4F2FF',
  			border: '#C2C0FF',
  			'text-secondary': '#818181',
  			'input-placeholder': '#8F8F8F',
  		},
  		borderRadius: {
  			'pill': '40px',
  			'card': '20px',
  			'icon': '10px',
  		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
