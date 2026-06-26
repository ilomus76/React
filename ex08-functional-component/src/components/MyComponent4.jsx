import { useState } from "react"

function MyComponent4(){

    //값이 변경되면 화면이 자동으로 갱신되는 아주 특별한 state 변수
    // Component 클래스를 상속하지 않았기에 this.state라는 멤버변수가 존재하지 않음. 
    // state = {'name':'sam'}  그래서 이 명령은 에러..
    // 그래서 클래스형 콤포넌트만 state를 사용했고 함수형 콤퍼넌트는 state를 않썼음 그래서 stateless 콤퍼넌트라고 불림
    // 원래 함수형 컴포넌트는 간단하게 UI만 표시하는 목적이었음.
    // 즉, Component의 유용한 능력은 아무것도 가지고 있지 않았음.  오로지 HTML만 뿌리고 props만 받는것 밖에 없었음.
    // 리액트의 버전이 갱신되면서... 함수형 컴포넌트에서도 클래스형 컴포넌트기능들을 사용할수 있도록 개선되었음.
    // 이렇게 함수형에서 클래스형의 기능들을 사용할 수 있는 기법을 Hook기술이라고 부르기로 했음. -> 갈고리.. -> 컴포넌트에 있는걸 가지고 나와. 라고 하는 의미
    // 이 Hook 기능(함수)들의 명칭은 대부분 useXXX()라고 명명하였음.
    // 지금 현재 Hook도 개발중이며 개발자도 Hook을 만들수 있고... 원래 없는 기능인다 .. 만들면 그냥 Hook이고 useXXX로 있는것은 다 hook임.
    // 이 HOOK중에서 가장 중요한 useState() 사용
    // message라는 이름의 state 변수와 setState()용 함수를 만들어보기
    // let message = 'aa' //그냥 변수
    let [message , setMessage] = useState('this is state message ') // state변수가 됨 , 변수와 함수를 동시에 useState가 줌.  리턴을 배열로 줌. 객체로 주는것은 "":""로 줌
    // 이것은 구조불할 할당임. 배열이 아님.
    // let aa=[10,20,30]
    // n1 = aa[0] 
    // let[n1,n3,n3] = aa # 배열 분해 할당
    // state = {'name':'sam'} 

    // 버튼 클릭시 반응할 함수 ( 화살표 함수로 만드는 것을 권장)
    const aaa=()=>{ 
        setMessage('hello hook!!!')
    }

    // 또 다른 state 변수 만들어 보기
    let [ title, setTitle] = useState('제목')
    const bbb = () => setTitle('다른 제목')


    return(

        <div style={{border:'2px solid black', padding:8, margin:4}}>
            <h3>함수형 컴포넌트에서 state사용해보기</h3>
            {/* state변수 만들어 출력해 보기 */}
            <p>{message}</p>

            {/* 버튼 클릭하여 message 변수 변경(state 변수이니 자동으로 화면 갱신) */}
            {/* 클릭하면 aaa함수라는 지역함수 호출 , 클래스가 아니라서 멤버가 아님. [return 전에 있어야 함.] */}
            <button onClick={aaa}>change message</button>
            <hr />
            <p>{title}</p>
            <button onClick={bbb}>제목변경</button>


        </div>
    )
}
export default MyComponent4