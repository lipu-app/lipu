import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import vike from "vike/plugin";
import { pages } from "vike-cloudflare";

export default defineConfig({
  plugins: [
    vike({}),
    react({}),
    pages({})
  ],
});
