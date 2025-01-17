import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      '/predict':{
        target:'https://airquality-backend.onrender.com', //Flask Backend URL
        changeOrigin:true,
      },
    },
  },
});
