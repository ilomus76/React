// store안에 reducer는 단 하나만 있어야 한다.
// 전역공간 store는 리듀서를 1개만 설치할 수 있음.
// state별로 리듀서를 나누어 만들면 관리가 용이함.
// 그래서 이 리듀서들을 하나로 묶어주는 combineReducers 기능을 사용

import {combineReducers} from 'redux'
import numberReducer from './number'
import boardReducer from './board'
// 넘버 리듀서를 불러옴.



// const rootReducer = combineReducers({numberReducer,})// ,뒤에 다른 리듀서를 넣어 추가할수 있음.
const rootReducer = combineReducers({numberReducer,boardReducer}) // ,뒤에 다른 리듀서를 넣어 추가할수 있음.
export default rootReducer  // 다른 곳에서 사용할 수 있게 export 함. 

