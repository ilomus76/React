//2-1 라우터를 import
import {BrowserRouter,Routes,Route} from 'react-router-dom'

//2-2 페이지 컴포넌트 import   : Home Second jsx만들고 여기와라.
import Home from './page/Home'
import Second from './page/Second'
import Third from './page/Third'
import Intro from './page/Intro'
import Login from './page/Login'
import Signup from './page/Signup'


// 2-0 라우터도 컴포넌트이기에 함수형 컴포넌트로 제작
function MyRouter(){
    return(
        // 경로에 따라 페이지를 다르게 보여주는 라우터 객체 생성 - 라우터 여러개 있는데 기본적인것 보여줄것이다.
        // 웹호스팅할때 서브경로를 사용한다면 라우터에 등록해놔야 보여짐 
        <BrowserRouter basename='/vite/'>
            <Routes>
                {/* 페이지 컴포넌트들을 등록.. 경로와 함께 */}
                <Route path='/' element={<Home></Home>}></Route>    
                {/*  '/' 는 root 경로 */}
                {/* <Route path='/second' element={<Second></Second>}></Route> : 아래처럼 앤드태그 사용가능*/}
                <Route path='/second' element={<Second/>}></Route>
                {/* ../second/  */}
                
                {/* 서브 경로(:변수)를 가지는 페이지 */}
                <Route path='/third/:no' element={<Third/>}></Route>
                {/* :no 는 no라는 이름으로 전달될것이다. 라는 뜻, 즉 앞으로 뭔가 더 올거야... :no라는 것이.. */}

                {/* 경로등록 */}
                <Route path='/intro' element={<Intro />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/signup' element={<Signup />}></Route>

            </Routes>
        
        </BrowserRouter>

    )
}
export default MyRouter