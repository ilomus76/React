//2-9 아이콘 라이브러리 사용
// 사이트에서 아이콘 클릭하면 아래의 코멘드가 보임. 복붙
import { MdAdd } from "react-icons/md";

//2-13 스타일 적용
import './TodoInput.scss'
import { useState } from "react";



//2-8 . 인풋 요소는 재활용이 가능하니 따로 만들자.
function TodoInput(props){ // 전달 받은 값/함수를 받은 파라미터

    // input요소에 써있는글씨를 저장할 state변수
    const [content, setContent] = useState('') 
    // 시작값 빈글씨

    //버튼 클릭할때 발동할 함수
    const clickAddBtn=()=>{
        // input요소에 써있는 글씨(content state변수)를 가져와서.. props 전달받은 insertTodo()함수를 실행시켜 항목 추가
        props.insertTodo(content)
        //다음입력이 편하도록.. input요소의 value값을 빈글씨로...
        setContent('') 
        // 화면갱신하려면 빈글씨로 setContent로 해라.
  
    }


    //버튼을 클릭하거나.. 'enter'키를 눌렀을 때 form 요소의 onSubmit 이벤트에 의해 실행될 함수 
    const submit=(event)=>{
        //form요소는 기본적으로 화면을 바꾸는 동작을 수행 . 우리는 화면을 바꾸지 않을 것이니 이를 방지해야 함.
        event.preventDefault()
        if(content == '') return // 글씨 쓴것이 업스면 동작 종료
        props.insertTodo(content)
        setContent('')
    }
    return(

        // 4교시
        // 사용자가 'enter'키를 눌러도 할일 데이터가 추가되도록 하고 싶다면..form 요소 사용
        // form요소의 안에 있는 마지막 input 요소의 입력이 되고 'enter(키보드엔터키)'를 누르면 자동 서밋이 됨. 
        // <div className="TodoInput">
        <form className="TodoInput" onSubmit={submit}>
            <input type="text" placeholder="할 일을 입력하세요" value={content} onChange={(event)=>{setContent(event.target.value)}} />  
            {/* useState('aa')로 하면 aa로 시작할것이다. onChange는 글씨를 바꿀때마다 실행, event라는 파라미터가 옮 , event가 발생할때마다 가져와서 그 타겟의 값을 바꿔라*/} 
            {/* 버튼에 보여지는 + 기호는 아이콘 이용(react-icons 라이브러리) , 물론 글자 +로 해도 됨.  */}
            {/* https://react-icons.github.io/react-icons/ */}
            {/* <button onClick={clickAddBtn}><MdAdd/></button>   */}
            <button type="submit"><MdAdd/></button>  
            {/* 클릭 버튼이 눌러지면 clickAddBtn을 실행 */}
            {/* 2-10아이콘 넣기 */}
        {/* </div> */}
        </form>

    )
}
export default TodoInput