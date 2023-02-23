/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#2BD0D0',
					'hover': '#9AE3E3'
				},
				secondary: {
					DEFAULT: '#4B3F6B',
				},
				error: {
					DEFAULT: '#F46363',
				},
				callToActionBg: {
					DEFAULT: '#3A3054',
				},
				heroBg: {
					DEFAULT: '#FFFFFF',
				},
				statsBg: {
					DEFAULT: '#EFF1F7',
				},
				footerBg: {
					DEFAULT: '#232127',
				},
				primarytxt: {
					DEFAULT: '#34313D',
				},
				secondarytxt: {
					DEFAULT: '#9E9AA8',
				}
			},
		},
    borderRadius: {
      DEFAULT: '0.625rem',
    }
	},
	plugins: [],
}
