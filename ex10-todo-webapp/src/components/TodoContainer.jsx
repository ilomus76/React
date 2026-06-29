import { useState } from 'react'

//2-6 별도의 스타일 문서를 연결하기
// css를 하면 자식 자손을 이용해야 하니 문법적으로 구조환된 scss를 사용

import './TodoContainer.scss' 

//UI 조각 컴포넌트 사용 
//2-11 : <TodoIn 까지 쓰면 자동완성 되면서 아래의 import가 붙음.
import TodoInput from './TodoInput'

// 2-13 
import TodoList from './TodoList'





// 2-4
function TodoContainer(){

    // 3교시
    // TodoInput과 TodoList에서 사용할 [할일목록 데이터 todos] state변수 만들기
    const [todos, setTodos] = useState([
        {no:1, content:'리액트의 기초문법 학습', isDone:false},  // 처음에 값이 있는데 그것은 실행되지 않았다....
        {no:2, content:'리액트의 스타일링 학습', isDone:true},
        {no:3, content:'리액트의 컴포넌트 학습', isDone:false},
        // 이것을 todolist에 보여줘야 하니 그쪽으로 가자..
    ]) 
    // react 에서 만든거라 import 해야함. , hook기술을 만든것임. 시작을 배열로 가지고 오겠다. 
    // 데이타뿐만 아니라 상태를 지시하는것도 만들어야 하니 객체로 만들자.


    // todos 배열에 새로운 데이터를 추가하는 기능함수( 사용하는 위치와 상관없이 변수가 선언된 곳에서 변경하는 함수도 정의할 것을 권장)
    const insertTodo = (content)=>{ // content파라미터로 새로 추가할 할일 데이터를 받아서 추가
        // 새로 추가할 객체를 만들기
        const newTodo={
            no: todos.length+1,
            // 요소의 길이보고 1증가로 추가. 요소개수 +1 을 통해 번호를 부여
            content: content,
            isDone: false
        }
        // todos라는 state 배열변수에 새로운 데이터를 추가할 것이다. 

        // 배열에 새로운 객체를 추가하는 기능 함수 호출
        const newTodos = todos.concat(newTodo)
        // 새로운 todo데이터들을 state 변수에 적용하기.
        setTodos(newTodos) 
        // 배열은 항상 concat를 해서 setTodos로 해야 함.

        // 아래 TodoInput으로 가자 
    }

    //todos의 항목들 중에서 전달받은 번호의 todo요소을 삭제하는 기능함수
    const deleteTodo=(no)=>{
        // 기존 state배열에서 요소만 삭제하면 setState()할때 배열객체의 변화가 없다고
        // 생각하여 화면갱신이 자동으로 되지 않음. 
        // state가 배열을 가지고 있다면 그것은 주소를 가지고 있어 안의 배열이 바뀌더라도 원래의 주소가 있어 변화가 생기지 안음.
        // 그리고 state가 그 변화된 주소를 가르켜야 함.

        //리액트팀에서 배열의 요소를 삭제하는 권장깁법(.filter 기능함수 사용) // 어떤 특정 조건을 필터링 함.
        // const newTodos = todos.filter((todo,idx,array)=>{}) // 아래와 같이 써도 됨
        const newTodos = todos.filter((todo,idx)=>{return todo.no!=no})   // no빼고 나머지것만 살아남아라...
        // 넘버와 다른 것만 빼고 나머지만 가져와라는 뜻. 
        // 요소의 갯수만큼 돌아감.  
        setTodos(newTodos)  
        // 화면갱신해라.. 변수를 업데이트하고 화면을 갱신하라...
    }

    // todos 항목들의 index번째  todo 객체의 isDone값을 toggle.. 
    // no 이 아닌 인덱스로 삭제해 보자.

    const toggleDone = (index)=>{

        //원래 todos배열의 요소값을 바꾸어도 화면을 새로 갱신되지 않음. 
        // 원래 배영을 복제한 완전 새로운 배열 만들기
        // const newTodos = [todos[0],todos[1],todos[2]]  // 새배열을 만드는데 todos의 데이타만 가져옮. 하지만 이건 너무 김.
        const newTodos = [ ...todos] // ... 스프레드 연산자(todos의 요소들을 전개시켜 줌. 위의 것을 대신해줌. 데이타를 나열)
        newTodos[index].isDone= !newTodos[index].isDone  // 값을 인버전시킴
        setTodos(newTodos)


    }

    // todoItem에서 todolist를 건너 container를 바로 줄수 없고 바로 올수 없어 거쳐와야 함.

    return(
        // 2-5 스타일 작업  TodoContainer.scss
        <div className="TodoContainer">
            {/* [1]타이틀영역  */}
            <div className="app-title">TODO LIST</div>

            {/* [2] 사용자가 할일 목록을 입력하는 컴포넌트 */}
            {/* + 버튼을 클릭했을 때 insertTodo()함수를 실행할 수 있도록 함수를 실행 */}
            <TodoInput insertTodo={insertTodo}></TodoInput>
            {/* 2-11 */}

            {/* [3] 할일목록이 나열되는 컴포넌트 */}
            {/* todos를 삭제/변경하는 기능함수도 속성으로 전달하기 todolist로 가자*/}
            <TodoList todos={todos} deleteTodo={deleteTodo} toggleDone={toggleDone}></TodoList> 
            {/* 2-13 */}
        </div>
    )
}

// 내가 만든 위의 함수를 TodoContainer로 내보내자.
export default TodoContainer