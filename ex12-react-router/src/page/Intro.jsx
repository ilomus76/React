function Intro(){


    //Link요소 없이 페이지를 이동시키는 기능함수를 만들기 - HOOK기술 ( useXXXX)
    const navigate = useNavigate()


    //버튼 클릭시 발동할 함수들 
    const goLogin=()=>{
        navigate('/login')

    }
    const goSignup=()=>{
        // navigate('/singup')
        //페이지 이동할때 여러개의 값을전달하고 싶다면.. 서브경로는 어려움.
        navigate('/singup',{state:{name:'sam',age:20}}) 
        // state 변수로 전달

    }

    return(
        <div>
            <h2>INTRO PAGE</h2>
            <p>버튼 클릭으로 페이지 이동하기</p>
            <button onClick={goLogin}>로그인 페이지로 이동</button>
            <button onClick={goSignup}>회원가입 페이지로 이동</button>
        </div>
    )
}

export default Intro