import Movie from "./Movie"

function MovieList(props){ //속성으로 전달된 값을 파라미터로 받음.
    return (
        <div>
            <div>
                <h3>MOVIE LIST</h3>
            </div>
            <div>
                영화 개수 : {props.movies.length}
            </div>
            <div>
                {/* 영화 개수만큼 카드모양UI 로 영화정보(제목,포스터,개봉일,평점)를 보여주기 */}
                {
                    props.movies.map( movie=> <Movie movie={movie} key={movie.id}></Movie> )
                }
            </div>
        </div>
    )
}
export default MovieList