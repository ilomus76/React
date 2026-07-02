import { useDispatch } from "react-redux"

function MyButton(){

    const dispatch= useDispatch() // store에게 보낸다... 리듀서가 받음 , 여기서는 numberReducer
    return <button onClick={()=>dispatch({type:'reset',payload:0})} style={{width:'100%',padding:10,boxSizing:'border-box'}}>0으로 리셋</button>
}
export default MyButton