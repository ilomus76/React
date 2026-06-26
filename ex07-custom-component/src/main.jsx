import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Home'
// import './index.css'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode> 
    {/* 검사 , 첫 페이지를 2번 로딩하는데 이중으로 되는 것을 검사하기 위해 .. 앱과는 상관없고, 버전업이 되었을때 미리 한번 해 봐라. */}
    {/* <App /> */}
    <Home></Home>
  </StrictMode>,

  
)
