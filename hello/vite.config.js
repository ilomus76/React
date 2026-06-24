import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // vite 웹앱을 호스틍/서브경로에 배포해야 한다면.. base설정을 해야 함. 
  base:'/vite', 
})
