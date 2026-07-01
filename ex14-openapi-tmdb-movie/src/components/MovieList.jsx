// 영화 무비들이 보여지는 곳.

import { useState } from "react"
import Movie from "./Movie"
import './MovieList.css'
import Pagination from "./Pagination"


function MovieList(props){ // 속성으로 전달된 값을 파라미터로 받음

    // 페이지네이션
    // 한 페이지에 표시할 영화개수 지정값을 저장하는 state변수
    const [number, setNumber] = useState(9) // 초기값 9개
    // const [number, setNumber] = useState(10) // 초기값 9개
    // const [number, setNumber] = useState(12) // 초기값 9개
    // 영화 총개수 movie.length  : 20개 , 페이지당 개수 9개 ,,  1페이지는 0-8인덱스  , 페이지 번호
    // 현재 페이지 번호   
    const [ page, setPage] = useState(1) // 페이지 초기값 1
    // const [ page, setPage] = useState(2) // 페이지 초기값 1
    // const [ page, setPage] = useState(3) // 페이지 초기값 1



    return(
        <div className="Container">
            <div className="title">
                <h3>MOVIE LIST</h3>
            </div>
            <div className="info">
                영화 개수 : {props.movies.length}
            </div>
            <div className="movies">
                {/* 영화 개수만큼 카드모양 UI로 영화정보 (제목, 포스터 개봉일 평점)을 보여주기 */}
                {
                    // props.movies.map((value,idx)=>{return <p></p>})
                    // props.movies.map((movie,idx)=>{return <p>{movie.title}</p>})
                    // props.movies.map((movie,idx)=> <p>{movie.title}</p>)
                    // props.movies.map((movie,idx)=> <Movie movie={movie} key={idx}></Movie>)
                    // props.movies.map((movie,idx)=> <Movie movie={movie} key={movie.id}></Movie>)
                    // props.movies.map((movie)=> <Movie movie={movie} key={movie.id}></Movie>)
                    // props.movies.map(movie=> <Movie movie={movie} key={movie.id}></Movie>)
                    // props.movies.slice(0,3).map(movie=> <Movie movie={movie} key={movie.id}></Movie>)
                    props.movies.slice((page-1)*number,(page-1)*number+number).map(movie=> <Movie movie={movie} key={movie.id}></Movie>)
                }
            </div>

            <div className="pagenation">
                {/* 별도의 컴포넌트로 pagination UI구현 */}
                <Pagination total={props.movies.length} page={page} number={number} setPage={setPage}></Pagination>
                {/* 함수 속성 전달 */}

            </div>
        </div>
    )

}
export default MovieList