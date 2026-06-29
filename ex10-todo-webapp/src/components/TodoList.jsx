//스타일 연결
import './TodoList.scss'

//할일 항목용 컴포넌트 불러오기
import TodoItem from './TodoItem'
//2-13
function TodoList(props){ // 함수의 파라미터로 속성들을 전달 받을 수 잇음.. <TodoList todos={todos}></TodoList> 를 설정해야 함. props를 넣어야 함.
 
    return(
        <div className='TodoList'>
            {/* TodoItem들이 나열됨 */}

            {/* TodoItem들은 배열로 데이터가 있어야 하지만 UI 제작단계에서는 일단 더미데이터로 구현 */}
            {/* <TodoItem></TodoItem>
            <TodoItem></TodoItem>
            <TodoItem></TodoItem> */}

            {/*props로 전달받은 todos배열의 개수만큼 TodoItem 컴포넌트를 표시  */}
            {/* props로 전달받은 todos를 삭제/변경하는 기능함수를 TodoItem에 전달. */}
            {/* 즉 container가 list에게 주고 list가 item에 준다. */}
            {
                props.todos.map((todo,idx)=>{
                // 화살표 함수는 파이썬에서 람다 함수
                // array 파라미터는 삭제 가능
                return <TodoItem key={idx} todo={todo} deleteTodo={props.deleteTodo} toggleDone={props.toggleDone} index={idx}></TodoItem>
                // todo itme으로 가자. // key 값은 전달이 안됨 총 3개를 전달. 이제 todo item으로 가자..


                }) // container 에서 설정한 <TodoList todos={todos}></TodoList> 를 통해 속성 todos로 전달.
          
            }


        </div>
    )
}
export default TodoList