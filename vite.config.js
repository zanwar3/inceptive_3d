import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({ jsxRuntime: "automatic", fastRefresh: true }),
    {
      name: "configure-response-headers",
      configureServer: (server) => {
        server.middlewares.use((_req, res, next) => {
          res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
          next();
        });
      },
    },
  ],
  mode: "development",
  build: { minify: false },
  server: {
    port: 8080,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.jsx?$/,
    exclude: [],
  },
});
