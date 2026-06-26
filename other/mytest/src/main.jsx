import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// 기존에 자동으로 만들어진 반응형 web App를 배제하고 나의 것으로 대체하자.
// import Home from './Home'
import Home from './Home.jsx' // jsx는 생략 가능

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,

  // 객체를 그려내기 위해 나의 객체를 여기에 등록하자.
  // 그것을 태그로 사용
  <Home></Home>    
  // Home.jsx로 가자...
)
