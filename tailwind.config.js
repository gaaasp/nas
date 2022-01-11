const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Inter"', ...fontFamily.sans],
			},
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				accent: {
					1: "var(--accent-1)",
					2: "var(--accent-2)",
					3: "var(--accent-3)",
					4: "var(--accent-4)",
					5: "var(--accent-5)",
					6: "var(--accent-6)",
					7: "var(--accent-7)",
					8: "var(--accent-8)",
				},
				blue: "var(--blue)",
				green: "var(--green)",
				red: "var(--red)",
			},
			minWidth: {
				11: "2.75rem",
			},
			maxWidth: {
				11: "2.75rem",
			},
		},
	},
	plugins: [],
};
