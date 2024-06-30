import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// voice 
export default {
  build: {
    rollupOptions: {
      external: ['react-speech-recognition']
    }
  }
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
});
