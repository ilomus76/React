import { useLocation } from "react-router-dom"

function Signup(){
    // 페이지 전환될때 state로 전달된 객체를 받기 - HOOK 기술
    const location =useLocation()

    return(
        <div>
            <h4>회원가입 페이지</h4>
            {/* location에 전달되 state값을 사용 */}
            <p>이름 : {location.state.name} </p>
            <p>나이 : {location.state.age} </p>   
            {/* 서버에서 데이타를 가져올 것이기 때문에 자주 쓰지 않지만 이런게 있다는 것을 보여준다. */}
        </div>
    )
}
export default Signup