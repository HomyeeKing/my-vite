import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import Unocss from "unocss/vite";
import presetUno from "@unocss/preset-uno";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unocss({
      presets: [presetUno()],
      variants: [
        // hover:
        (matcher) => {            
          if (!matcher.startsWith("hover:")) return matcher;
          return {
            // slice `hover:` prefix and passed to the next variants and rules
            matcher: matcher.slice(6),
            selector: (s) => {
                return `${s}:hover`
            },
          };
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "~assets": path.resolve(__dirname, "src/assets"),
    },
  },
});
