import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MyApp from './MyApp'
// import './index.css'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}

    <MyApp></MyApp>

  </StrictMode>,
)
