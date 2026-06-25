import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
import HomeComponent from './HomeComponent'

createRoot(document.getElementById('root')).render(
  // <StrictMode> // 검사모드
  //   <App />
  // </StrictMode>,
  <HomeComponent></HomeComponent> // 객체 생성하는 방법. 
)
