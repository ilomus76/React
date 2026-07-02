import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import Home from './Home.jsx'
import Home from './Home'


// 카카오지도 라이브러리 적용방법. (외부 스크립트로 포함시켜야 하는 라이브러리. npm install)
// 적용방법. kakao devloopers 사이트에서 문서를 참고하여 제작

//문서 -> 지도 -> 시작하기 -> 앱생성 
// 옆의 앱 -> 자기 만든거.. 사용설정이 되어 있어야 함.. 
// 앱-> 플랫폼키 -> 자바스크립트의 키 -> 도메인 주소 등록 : 5500번은 라이브서버 사용.  여기에 http://localhost:5173/ 을 등록해라.. 
// 시작하기로 와서 -> 개발하기  -> 자바스크립트 개발사이드 와라.. -> 

// 키를 복사해서 index.html에 붙여라.

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Home></Home>
  </StrictMode>,
)
