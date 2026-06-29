
// 아이콘 가져오기
import { MdCheckBoxOutlineBlank } from "react-icons/md"; 
// 비어있고 아웃라인 있는것

import { MdCheckBox } from "react-icons/md";
// 체크안됬을때

import { MdDeleteForever } from "react-icons/md";
//영구 삭제 아이콘
//2-15

//스타일 연결
import './TodoItem.scss'

function TodoItem(props){  // 속성으로 todo 정보를 전달받으면 파라미터로 받아짐

    // todo 항목데이터으ㅏ isDone 값이 true이면.. "TodoItem isDone"으로 클래스명 지정
    const todoItemStyleName = props.todo.isDone? "TodoItem IsDone" : "TodoItem"
    return (
        <div className={todoItemStyleName}>  
                    {/* 클래스가 TodoItem isDone 두개 */}
            {/* 1.  */}
            <div className="checkbox" onClick={()=>{props.toggleDone(props.index)}}> 
                {/* 전달받은 함수 실행 */}
                {/* <input type="text" /> : 색깔 사이즈 지정이 힘듦 */}
                {/* 체크박스의 생삭이나 사이즈를 지정하기 위해 아이콘으로 구현  */}
                {/* isDone 여부에 따라 케크박스의 아이콘 모양을 다르게 */}
                {
                    props.todo.isDone ? <MdCheckBox /> : <MdCheckBoxOutlineBlank/>
                }
                {/* <MdCheckBoxOutlineBlank></MdCheckBoxOutlineBlank> : 아래로 줄일 수 있다 */}
                {/* <MdCheckBoxOutlineBlank /> */}

            </div>
            {/* 2. */}
            <div className="content">
                {/* TODO WEBAPP 만들기  */}
                {props.todo.content}
            </div >
            {/* 3.  */}
            {/* <div className="delete" onClick={()=>{props.deleteTodo(props.todo.no)}}> 중괄호 생략가능 */} 
            <div className="delete" onClick={()=>props.deleteTodo(props.todo.no)}>
                {/* <MdDeleteForever></MdDeleteForever> */}
		        <MdDeleteForever/>
            </div>
        </div>
    )
}
export default TodoItem