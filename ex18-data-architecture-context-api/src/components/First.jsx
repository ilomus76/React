import Second from "./Second"

import { MyContext } from "../Home"
import { useContext } from "react"

function First(){

    const value = useContext(MyContext)
    return(
        <div style={{padding:16, backgroundColor:'aqua'}}>
            <h3>First Component</h3>

            {/* First가 Second를 가지고 있음  */}
            <Second></Second>
            <button onClick={()=>value.setMessage('nice to meet you')}>메세지 데이터 변경</button>
            {/* 강사님거 체크해봐라 동작이 안됨 */}

        </div>
    )

}
export default First