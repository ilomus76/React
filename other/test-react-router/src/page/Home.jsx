import { Link } from "react-router-dom"


function Home(){

    return(
        <div>
            <p>HOME</p>
            <a href="/second">두번째 페이지로 이동(a 요소)</a> 
            <a href="/second">두번째 페이지로 이동(a 요소)</a> 
            <br />
            <Link to="/second" replace={true}>두번째 페이지로 이동(LINK 요소 이동)</Link>
            <p>
                <Link to='/third/1'>세번째 페이지 이동- 특정번호1</Link><br />
                <Link to='/third/2'>세번째 페이지 이동- 특정번호2</Link><br />
                <Link to='/third/3'>세번째 페이지 이동- 특정번호3</Link><br />
            </p>
            <p>
                <Link to='/intro'>버튼 클릭으로 페이지 이동 연습하는 페이지로 이동</Link>
            </p>

        </div>
        

    )
}
export default Home