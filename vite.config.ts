import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  // Define process.env variables for the client
  process.env.API_KEY = env.API_KEY;

  return {
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "."),
      },
    },
    build: {
      outDir: "dist",
      sourcemap: false,
      minify: "esbuild",
    },
  };
});
