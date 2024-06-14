import { type Config } from "tailwindcss";

import { colors, theme } from "./src/lib/theme";

const primaryColorsArray = theme.colors[theme.primaryColor as "transparent"];

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    colors: {
      primary: primaryColorsArray.reduce((a, v, i) => {
        if (i === 0) {
          return { ...a, 50: v };
        }
        return { ...a, [`${i as unknown as string}00`]: v };
      }, {}),
      ...colors,
    },
  },
  corePlugins: {
    preflight: false,
  },
  darkMode: ["class", '[data-mantine-color-scheme="dark"]'],
  plugins: [],
} satisfies Config;
