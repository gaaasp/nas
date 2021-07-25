const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
	mode: "jit",
	purge: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Inter"', ...fontFamily.sans],
			},
			colors: {
				foreground: "var(--foreground)",
				background: "var(--background)",
				accent: {
					1: "var(--accent-1)",
					2: "var(--accent-2)",
					3: "var(--accent-3)",
					4: "var(--accent-4)",
					5: "var(--accent-5)",
					6: "var(--accent-6)",
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
