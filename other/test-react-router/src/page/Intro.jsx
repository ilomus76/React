import { useNavigate } from "react-router-dom"

function Intro(){

    const navigate = useNavigate()

    const goLogin=()=>{
        navigate('/login')
    }
    const goSignup=()=>{
        navigate('/signup')
    }

    return(
        <div>
            <p>INTRO Page</p>
            <p>버튼 클릭으로 페이지 이동하기</p>
            <button onClick={goLogin}>로그인 페이지로 이동</button>
            <button onclick={goSignup}>회원가입 페이지로 이동</button>
        </div>
    )

}
export default Intro