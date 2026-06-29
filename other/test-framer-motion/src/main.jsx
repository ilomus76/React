import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Home'
// import Home from './Home'
// import './index.css'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Home></Home> 
    {/* 객체를 생성: 즉 함수/객체를 실행하는 것임. */}
  </StrictMode>,
)
