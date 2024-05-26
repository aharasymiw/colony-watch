import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    https: {
      key: fs.readFileSync('../../../localhost_key_exp_4_19_25.pem'),
      cert: fs.readFileSync('../../../localhost_cert_exp_4_19_25.pem'),
    }
    //   proxy: {
    //     // string shorthand: http://localhost:5173/foo -> http://localhost:4567/foo
    //     '/': 'https://localhost:5001/',
    //   }
  }
});
