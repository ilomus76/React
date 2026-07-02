import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Home'

// 카카오지도 라이브러리 적용방법. (외부 스크립트로 포함시켜야 하는 라이브러리. npm install 아님)
// 적용방법. kakao developers 사이트에서 문서를 참고하여 제작

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home></Home>
  </StrictMode>,
)
