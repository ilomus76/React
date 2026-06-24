import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// 2교시
// 처음 만들어질때 자동으로 실행됨.
//혹시 ㅣ. 종료한 후 다시 실행하고 싶다면...
//터미널에서 해당 폴더로 이동한 후... npm run dev명령으로 웹서버를 실행.
// npm run dev -- --host를 사용하면.. 같은 네트워크의 다른 컴퓨터에서도 접속 가능
// 같은 와이파이에서는 가능.

// 웹서버에 배포 해 보기.
// 터미널에서 프로젝트 파일들을 수수 html/css/js 형태로 만들어주는 명령어 실행
// npm run build
// 정상적으로 수행되면.. 프로젝트 폴더에 dist(배포본)라는 이름의 폴더가 새로 생길것임. dist : distribution 배포본
// 그 dist 폴더 안에 있는 파일과 폴더들을 서버에 업로드 하면 됨. (배포본만 업로드)

// 파일질라에 dist 폴더에있는것을 업로드.

//https://ilomus76.dothome.co.kr/vite/ 에 올리면 안뜰것이다. https://ilomus76.dothome.co.kr/에 올리면 동작했을 것이다.

// [주의!]
// 호스팅할때 index.html의 위치가.. root 폴더(dothome에서는 html폴더)가 아니고
// /vite 처럼 ( 에 dothome.co.kr/vite) 서브경로가 있다면 페이지가 렌더링 되지 않음.

// 서브경로를 vite.config.js 문서에 등록해야 함.

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   // vite 웹앱을 호스틍/서브경로에 배포해야 한다면.. base설정을 해야 함. 
//   base:'/vite', 
// })

// 다시 npm run build 를 해야 함.
// 날코드로 하는것이 바닐라 코드라고 하는데... 회사의 모습과 다름...


// 명령어 예시... 
// 이제 본격적으로 

// 이제까지 App.jsx를 main에 넣어 했는데 우리것을 만들어 보자..

// terminal 꺼라 ctrl +c





// C:\Users\Admin\MBCA\React> cd hello
//S C:\Users\Admin\MBCA\React\hello> npm run dev 
// 개발 모드로 실행 dev
// > hello@0.0.0 dev
// > vite

// Port 5173 is in use, trying another one...

//   VITE v8.1.0  ready in 217 ms

//   ➜  Local:   http://localhost:5174/    -> 본인 컴퓨터
//   ➜  Network: use --host to expose
//   ➜  press h + enter to show help

// ctrl + c : 끝음. 
// C:\Users\Admin\MBCA\React\hello> npm run dev -- --host
  // ➜  Local:   http://localhost:5173/
  // ➜  Network: http://192.168.0.63:5173/    -> nat 서버여서 집에서 안됨 집에서는 서버에 올려야 함..
  // ➜  press h + enter to show help




//   PS C:\Users\Admin\MBCA\React\hello> npm run build

// > hello@0.0.0 build
// > vite build

// vite v8.1.0 building client environment for production...
// ✓ 20 modules transformed.
// computing gzip size...
// dist/index.html                   0.45 kB │ gzip:  0.29 kB
// dist/assets/react-CHdo91hT.svg    4.12 kB │ gzip:  2.06 kB
// dist/assets/vite-BF8QNONU.svg     8.70 kB │ gzip:  1.60 kB
// dist/assets/hero-CLDdwZDr.png    13.05 kB
// dist/assets/index-DykytF2W.css    4.10 kB │ gzip:  1.47 kB
// dist/assets/index-Gp7qLz_w.js   193.41 kB │ gzip: 60.75 kB

// ✓ built in 155ms