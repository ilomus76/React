// 사용할 UI 조각 컴포넌트 import
import TodoContainer from "./components/TodoContainer"

function Home(){

    return (
        <>
            {/* 프레그먼트 */}

            {/* Home 확인용 */}
            <TodoContainer></TodoContainer>
            {/* 자동완성하려면 <Todo까지 쓰고 엔터  */}
        </>
    )
}
export default Home