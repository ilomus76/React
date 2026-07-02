import { useDispatch, useSelector } from "react-redux"

function First(){

    // store에 있는 number값을 불러오는 HOOK기술
    // const number = useSelector(function(state){return state.})
    const number = useSelector(state=>state.numberReducer.number)

    // store에 있는 numberReducer에게 원하는 작업의 action객체를 만들어 보내는 함수
    const dispatch = useDispatch()
    return(
        <div style={{padding:16, backgroundColor:'aqua'}}>
            <h3>First Componenet</h3>
            {/* 전역 store에 있는 number 값 사용 */}
        <p>number : {number}</p>

        <hr />
        <button onClick={()=>dispatch({type:'increase'})}>plus</button>
        <button onClick={()=>dispatch({type:'decrease'})}>minus</button>
        </div>
    )

}
export default First