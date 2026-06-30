import { useParams } from "react-router-dom"

function Third(){

    // 라우터에 등록된 서브경로 :no를 받기위한 HOOK기술 ( useXXX)
    const params = useParams()
    // 특정 기술을 발동 시키는 것을 HOOK이라고 보면 됨. 자동완성됨.

    return(
        <div>
            <h2>Third 페이지</h2>
            <p>Hello 전달받은 번호: <strong>{params.no}</strong></p> 
            
        </div>
    )
}
export default Third