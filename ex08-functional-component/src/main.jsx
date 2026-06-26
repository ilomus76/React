import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

import Home from './Home'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* 함수를 마치 컴포넌트인양... 태그문으로 사용 */}
    <Home></Home>
    {/* 클래스형 콤퍼넌트와 함수형 콤퍼넌트 두개가 있음. */}
  </StrictMode>,
)
