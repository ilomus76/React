
//변수가 여러개일 경우 사용하는 방법

const initState = {
    boards : [

        {no:1, name:'sam' , age:20},
        {no:1, name:'sam' , age:20},
        {no:1, name:'sam' , age:20},
    ]
}


function boardReducer(state=initState, action){
    switch(action.type){
        case 'addBoard':
            // return {...state,boards:[...state.boards , {no:3, name:'new',age:20}]}
            return {...state, boards:[...state.boards , action.payload]} 
            // 변수를 많이 사용가능.

        default:
            return state
    }
}
export default boardReducer  
// rootReducer에 등록만 하면 됨.