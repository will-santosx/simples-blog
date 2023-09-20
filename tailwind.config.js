/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				Vigilance: "'Vigilance BRK', sans-serif;",
				Montserrat: "'Montserrat', sans-serif;",
			},
			colors: {
				Orange: {
					400: "#FF9A62",
					500: "#FF7C33",
				},
				Black: "#0D0D0D",
				White: "#F2F2F2",
			},
		},
	},
	plugins: [],
};
