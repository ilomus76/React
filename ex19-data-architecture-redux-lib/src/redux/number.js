// 화면을 만들것이 아니라서 확장자가 .js임.

//  number상태값을 관리하는 리듀서를 만드는 파일 useState()라는 것이 이 파일이라고 보면 됨.

// 이 리듀서가 처음 배치될때 .. 이전 state작업이 없기에 초기값을 파라미터 디폴트값으로 지정


// 아래에서 초기값이 없다면 에러가 나고 , number를 counter로 하고 아래의 표현 그대로 해도 에러가 남. 
function numberReducer(state={number:0},action){ // 이 리듀서의 파라미터로 이전 state값, action객체를 받음. 
    switch(action.type){
        case 'increase' :
            // 기존 state의 number변수의 값을 1 증가한 새로운 state를 리턴 (setState()작업)
            return {...state,number:state.number+1} // 기존에 있던 state를 열거시켜.. . state를 리턴한게 아니라 새로운 객체를 리턴함. 새로운 state객체
            // state는 값을 대입한다고 업데이트 되지 않음. 그래서 {number:1} 처럼 state를 통채로 바꾼다는 것임.
        case 'decrease' :
            return {...state,number:state.number-1} // 새로운 state객체(자동 UI 갱신)
        case 'reset'    :
            return {...state, number:action.payload} // 액션 객체에 전달된 payload값으로 설정
        default:
            return state // 원래 state를 그대로 리턴하면 화면갱신  -> 화면갱신되지 않음. 

            // 액션의 이름을 다른 곳에서도 똑같이 사용하면 절대안됨. 그러면 꼬임. 
        
    }


}
export default numberReducer


////// 참고 사항 /////////////////////////
// // 위의 함수의 표현을 아래와 같이 주로 사용함. 
// // number가 배열일 경우 데이타가 많아지고 이것을 함수 파라미터 부분에 넣으면 너무 난잡해 지기때문에...
// const initState = {
//     number:0 
// }
// function numberReducer(state=initState,action){

// }