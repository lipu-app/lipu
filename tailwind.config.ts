import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import daisyui from "daisyui";

export default {
  content: ["./{pages,layouts,components,src}/**/*.{html,js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [
    typography(),
    daisyui,
  ],
  prefix: "",
} satisfies Config;
