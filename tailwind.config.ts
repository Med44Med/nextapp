import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'appear': 'appearPopup .3s ease',
        'appearAside': 'appearAside .3s ease',
      },

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        main:"var(--main)",
        soft:"var(--soft)",
        hard:"var(--hard)",
        danger:"var(--danger)"
      },
      fontFamily: {
        'main':['"Cairo", serif']
      },
    },
  },
  plugins: [],
};
export default config;
