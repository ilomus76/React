import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// 2-1
// import './index.css'
// import App from './App.jsx'
import Home from './Home'



// 1. TODO webapp mini project... 
// [제작순서] -> 워크 플로우 그려보는 것이다. 이것은 바이브코딩의 연습이다. 
//1. 필요한 라이브러리 추가 : scss(스타일 라이브러리),react-icons(아이콘 SVG 라이브러리: 글씨로 만든 아이콘 해상도의 영향을 안받음) [ npm install sass react-icons] : 이 두개를 한꺼번에 받으려면 띄어 쓰기만 하면 됨. 즉 설치 2개
  //  terminal 끊고 npm install sass react-icons 를 설치
  //  확인 :  -> package.json 폴더가서 아래를 보고 확인
  //  "dependencies": {
  //     "react": "^19.2.7",
  //     "react-dom": "^19.2.7",
  //     "react-icons": "^5.6.0",
  //     "sass": "^1.101.0"
  //   },
  // npm run dev로 다시 시작
//2. Home component 제작 
  // Home.jsx만들러가자
//3. UI (화면) 구성요소는 컴포넌트로 영역을 구분하여 제작[4개 컴포넌트]
//3.1 TodoContainer : 화면 가운데 위치, 할일 목록 웹앱의 root 컴포넌트
//3.2 TodoInput : 사용자가 할일을 입력할 수 있도록 스타일된 입력 컴포넌트 
//3.3 TodoList  : 할일 항목(TodoItem)들이 놓여질 컴포넌트
//3.4 TodoItem  : 할일 글씨오 아이콘들을 보여주는 UI로 스타일된 컴포넌트

// 실제로 위 처럼 AI 에게 주면 고대로 만들어 줄것이다. 


// UI 작업을ㅇ 모둔 완료 한 후.. 기능 구현하기
// 할일 데이터들을 가진 배열(todos)를 만들어야 함. 어디에??
// todoinput에서 만든걸 totolist에 보여 줘야 하니 그 위의 TodoContainer인 부모요소가 가지고 있어야 함.
// 2-16 TodoInput 컴포넌트에서 입력한 글씨를 TodoList에서 보여줘야 함. 
// 그러기에 위 2개의 컴포넌트를 가지는 TodoContainer 컴포넌트에 todos데이터배열이 있어야함.


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* 2-2 */}
    <Home></Home>
  </StrictMode>,
  // 빌드하면 스트릭트 모드 사라짐.   - 메인과 연결됨 
)
