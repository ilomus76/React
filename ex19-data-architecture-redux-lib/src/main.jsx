import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

//리덕스 라이브러리 : 전역 state 상태 관리를 용이하게 해 주는 라이브러리 - 예전만 하더라도 거의 필수 
//react를 사용하면 redux는 의무였지만 지금은 context가 나왔음. 
// 이 이해는 거의 하루정도 해야 함.
// 리덕스 라이브러리 2개 설치 (redux -corelibray , react-redux - sencondary-libray) : core library가 없으면 동작안함.
// npm install redux react-redux


// 리덕스 주요용어
//1. store       : 전역 저장소 ( 각각의 상태state값과 리듀서를 가지고 있음 ~ 코드적으로보면 리듀서가 state를 가지고 있는 것처럼 보임) -> 리듀서가 함수이고 return 값이 state임.
//2. reducer     : 이전에 있던 state값과 action객체를 파라미터로 받는 함수.. 액션의 타입에 따라 state의 변경작업을 하여 새로운 state를 만들어 리턴해주는 함수 (원하는 작업(CRUD-값을 만들고 제거하고 추가하는 등등)으로 setState()를 해주는 함수)
//3. action      : 사용자가 리듀서에게 보내는 객체로서 어떤 작업을 원하는지 지칭하는 type과 변경값 payload를 멤버로 가지는 객체
//4. dispatcher  : 사용자가 원하는 action을 store에 있는 리듀서reducer에게 보내주는 기능함수        


// [제목, 메세지, 이름, 나이, 아이템들,.... 등]의 앱에서 사용하는 state들을 
// 각각 별도의 .js파일로 나누어 작업하는 방식이 요즘 선호됨. 이런것을 dux 패턴이라고 함. 
// 보통 이렇게 redux에 관련된 코드가 작성된 파일들은 redux라는 이름의 폴더에 위치함. - 많이 이렇게 사용...


// 전역저장소 store를 만들기
// import {createStore} from 'redux' 
// deprecated -- 이제는 Redux Toolkit 사용(추가 설치 필요) -> 이걸 하면 기존의 코드를 다 뒤집어 엎어야 함.
import { legacy_createStore as createStore} from 'redux'  
import rootReducer from './redux/RootReducer.js'

import {Provider} from 'react-redux' 
import Home from './Home.jsx'
// provider안에 있는 

const store = createStore(rootReducer)  // store 안에 리듀서 를 배치 이름은 createStore지만 엣날 legacy_createStore를 사용하는 것임. 

// store를 만들고 그 안에 리듀서를 집어 넣은 것임.

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* 최상위 요소로 store를 제공함으로서 모든 컴포넌트들이 store의 값을 사용할 수 있도록 */}
    <Provider store={store}>
      {/* 이 영역안에 있는 컴포턴트만 store 사용가능 */}
      <Home></Home>
    </Provider>
  </StrictMode>,
)
