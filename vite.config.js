import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://api.themoviedb.org',
        changeOrigin: true,
        secure: false,  // Це може бути корисним, якщо є проблеми з SSL
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
