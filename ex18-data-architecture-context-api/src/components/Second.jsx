
import { useContext } from "react"
import { MyContext } from "../Home" 
// First 건너띄고 여기서 바로 사용하기 위해.. {}는 default가 아니니 사용하는 것임

function Second(){

    // Context API로 저장된 전역 데이터를 가져오는 HOOK기술 
    const value=useContext(MyContext) 
    // 위에서 import 했기 때문에 Mycontext를 쓸수 있음.
    // first에서 던진 message, setMessage를 value로 받은 것임.
    return(
        <div style={{padding:16, backgroundColor:'lightgreen'}}>
            <h3>Second Component</h3>
            <p>Home 컴포넌트의 메세지 데이터 : {value.message}</p>

        </div>
    )

}
export default Second