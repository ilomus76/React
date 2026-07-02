import Second from "./Second"
import { MyContext } from "../Home"
import { useContext } from "react"

function First(){

    const value= useContext(MyContext)

    return (
        <div style={{padding:16, backgroundColor:'aqua'}}>
            <h3>FIRST COMPONENT</h3>
            <Second></Second>

            <button onClick={()=>value.setMessage('nice to meet you')}>메세지 데이터 변경</button>
        </div>
    )
}
export default First