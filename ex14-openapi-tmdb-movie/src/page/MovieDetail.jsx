import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import {PacmanLoader} from 'react-spinners'

function MovieDetail(props){

    //route의 서브경로로 전달된 :id 값 받아오는 HOOK
    const params = useParams()

    // 이 컴포넌트가 화면에 보여지면 자동으로 발동하는 함수를 등록하는 HOOK
    // useEffect(function(){},[]) 
    // useEffect(()=>{

    // },[movie]) // movie 값만 바뀌면 화면 바뀜

    useEffect(()=>{

    // TMDB 영화상세화면 open api - url params로 전달받은 영화 id 정보를 요청 파라미터로 가져오기
    const api_url= `https://api.themoviedb.org/3/movie/${params.id}?api_key=4704d6d917590acc0fdea33c3505baa7&language=ko-KR`
    // fetch(api_url).then(res=>res.text()).then(text=>alert(text)) // 나오는거 확인하기 위해 text로..
    fetch(api_url).then(res=>res.json()).then(json=>setMovie(json))
    },[]) 

    // 영화상세정보 저장 변수
    const [movie, setMovie] = useState()

    return(

        <div>
            <h2>영화 상세 정보</h2>
            <p>영화 고유 식별자 id: {params.id}</p>
            {/* moviedetail를 실행하는 사람이 속성을 줄것이다. */}

            {/* 영화의 상세 정보들을 표시 */}
            {/* 서버에서 데이터를 가져오는 시간이 걸리기에 .. 로딩 중에서 데이터표시 불가능.. 이거 확인을 아래에서 보자 */}
            {
                // movie?
                // A:B
                movie?
                <h3>영화 제목 : {movie.title}</h3>
                :
                <PacmanLoader color="black" style={{margin:10}}></PacmanLoader>
                // <p>로딩 중....</p>
                // https://www.davidhu.io/react-spinners/  : 리액트 스피너스
                // npm install react-spinners  : 인스톨 해서 사용해랴..
                // <PacmanLoader > 는 사이트가서 참조

            }
            {/* <h3>영화 제목 : {movie.title}</h3> */}
        </div>
    )
}
export default MovieDetail