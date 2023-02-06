import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
// port:process.env.PORT
//
export default defineConfig({
    server: {port:8080},
    plugins: [react()],
    resolve: {
        alias: {
          '@': path.resolve(__dirname, './src'),
        },
    }
})