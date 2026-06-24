import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'



// MyApp.jsx 파일안에 있는 MyApp 클래스를 사용하기 위해 import 
import MyApp from './MyApp.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App />   */}
    {/* 남은 css js가 나한테 영향 미침 */}
    

    {/* 원래 new MyApp()해야 하지만 태그로 한다. */}
    <MyApp></MyApp>
  </StrictMode>,
)
