// home 화면
import { useState, useEffect } from 'react'
// onload와 같은 효과 : useEffect
import MovieList from '../components/MovieList'

import './Home.css'

function Home(){

    //TMDB 인기순 영화 open api url 주소 (강사님 key - 하루 500콜 제한) 컨트롤+아래 클릭하면 보인다.
    const apiUrl='https://api.themoviedb.org/3/movie/popular?api_key=4704d6d917590acc0fdea33c3505baa7&language=ko-KR&page=1'

    // 영화정보 리스트를 저정할 배열 state 변수 
    const [movies, setMovies]=useState(null)
    // 시작은 영화 리스트가 없어라고 하는것임. null

    // 이 콤포넌트가 화면에 처음 랜더링 된 후 자동으로 발동하는 라이프사이클함수를 사용하는 HOOK 기술
    // 매우 중요한 함수
    useEffect(function(){
        // alert() 
        // 새로고침하면 두변 뜨는것이 main의 strict mode 때문이다.

        //TMDB에서 유명한 영화목록 데이터 불러오기
        // 아무것도 없으면 get 방식, 주소에도 get 방식
        // fetch(apiUrl).then(res=>res.text()).then(text=>alert(text)).catch(e=>alert(e.message))
        // 받아온 영화 리스트 json형식을 분석하여 JS객체로 받아와서 .. movies라는 state변수에 대입
        fetch(apiUrl).then(res=>res.json()).then(json=>setMovies(json.results)).catch(e=>alert(e.message))
        // json 데이타에 results라는 항목이 있는데 그것이 배열이고 그 안에 객체로 되어 있음
    },[]) // 두번째 파라미터 배열 - 특정 state변수를 등록해 놓으면 그 값이 변경되었을때도 useEffect가 발동함. 
    //[]빈 배열을 사용하면 .. 처음 한번만 useEffect 함수가 발동함... []가 없으면 모든 변수에 대해서 업데이트를 하게 됨 무조건... state변수가 많으면 갯수의 변화만큼 업데이트함.
    return(
        <div className="Root">
            <header>
                <h1>TMDB 영화정보 OPEN API</h1>
            </header>
            <main>
                {/* 영화리스트를 보여주는 컴포넌트 조각 배치 */}
                {/* 아직 영화정보가 불러지지 않았을 수도 있기에  */}
                {/* fetch()로 받아온 영화목록 데이터들을 콤퍼넌트에 속성으로 전달 */}
                {
                    // 조건? A : B
                    // movies != null? A: B
                    // movies? A: B
                    // 자바스크립트는 0 , null undefined 빼고 다 참
                    movies ? <MovieList movies={movies}></MovieList> : <p>Loading</p>
                   
                }
                {/* fetch()로 받아온 영화목록 데이터들을 콤퍼넌트에 속성으로 전달 */}
                {/* <MovieList movies={movies}></MovieList> */}

                {/* 영화 데이타는 조각이 아니라 사용하는 곳에다가 리스트 배열을 만듦. 그 안에서 사용하면 모르지만 보통 각 페이지에서 데이타 가져오고 조작은 뿌리기만 함 */}
            </main>
        </div>
    )

}
export default Home