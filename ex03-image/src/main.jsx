import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
import HomeComponent from './HomeComponent' 
// export 를 안하거나 창을 닫으면 자동완성 기능이 안됨 

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  // new 생성자를 태그로
  <HomeComponent></HomeComponent>
)
