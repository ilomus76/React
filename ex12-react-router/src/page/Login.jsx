import { useNavigate } from "react-router-dom"

function Login(){

    const navigate = useNavigate()
    // 페이지로 이동하기 위해 필요한 함수 navigate
    return(
        <div>
            <h4>로그인 페이지</h4>
            {/* 브라우저의 뒤로가기 아이콘을 누르는 효과를 버튼으로 구현 */}
            {/* <button onClick={()=>{navigate('/intro')}}>이전 페이지로 돌아가기</button> */}
            {/* intro가 하나 더 뜨는것이다.  */}
            <button onClick={()=>{navigate('/intro',{replace:true})}}>이전 페이지로 돌아가기</button>
            {/* 아래와 같음 */}
            <button onClick={()=>{navigate(-1)}}>이전 페이지로 돌아가기</button>
        </div>
    )
}
export default Login