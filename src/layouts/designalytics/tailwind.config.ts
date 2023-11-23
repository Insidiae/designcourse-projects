import { type Config } from "tailwindcss";
export default {
	content: ["./src/**/*.astro"],
	theme: {
		extend: {
			colors: {
				primary: "#588dfd",
			},
		},
	},
	plugins: [],
} satisfies Config;
