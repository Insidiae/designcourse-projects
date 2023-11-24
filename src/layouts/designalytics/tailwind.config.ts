import { type Config } from "tailwindcss";
export default {
	content: ["./src/**/*.astro"],
	theme: {
		fontSize: {
			sm: ["0.875rem", "normal"],
			base: ["1rem", "normal"],
			lg: ["1.125rem", "normal"],
			xl: ["1.625rem", "normal"],
			"6xl": ["4rem", "normal"],
		},
		extend: {
			colors: {
				primary: "#5e85f8",
				secondary: "#292b31",
				link: "#bac2d9",
				"stats-ring": "#464a56",
				"inner-panel": "#32343c",
				"main-background": "#1f2023",
			},
			fontFamily: {
				inter: ["'Inter'", "sans-serif"],
			},
			screens: {
				tablet: "620px",
				desktop: "1200px",
			},
			spacing: {
				logo: "170px",
				"4.5": "1.125rem",
				"7.5": "1.875rem",
				"9.5": "2.375rem",
				"10.5": "2.625rem",
				"12.5": "3.125rem",
				15: "3.75rem",
			},
			transitionDuration: {
				600: "600ms",
			},
		},
	},
	plugins: [],
} satisfies Config;
