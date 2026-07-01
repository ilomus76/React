import { useNavigate } from "react-router-dom"

function Login(){
    const navigate = useNavigate()
    return(
        <div>
            <p>로그인 페이지 </p>
            <button onClick={()=>{navigate('/intro',{replace:true})}}>이전 페이지로</button>
            <button onClick={()=>{navigate(-1)}}>이전 페이지로</button>
        </div>

    )
}
export default Login