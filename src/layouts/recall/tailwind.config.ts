import { type Config } from "tailwindcss";
export default {
	content: ["./src/**/*.astro"],
	theme: {
		extend: {
			backgroundImage: {
				graphic: "url('/assets/recall/graphic.svg')",
			},
			colors: {
				primary: "#7e00fd",
				footer: "#ededed",
				"footer-link": "#363636",
			},
			fontFamily: {
				nunito: ["'Nunito'", "sans-serif"],
				playfair: ["'Playfair Display'", "serif"],
			},
			screens: {
				tablet: "700px",
				desktop: "950px",
			},
		},
	},
	plugins: [],
} satisfies Config;
