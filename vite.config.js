import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
     minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          router: ["@tanstack/react-router"],
        },
      },
    },
    chunkSizeWarningLimit: 600,
    sourcemap: false,
  },
  optimizeDeps: {
    include: ["react", "react-dom", "@tanstack/react-router", "lucide-react"],
  },
  server: {
    port: 3000,
    strictPort: false,
  },
})
