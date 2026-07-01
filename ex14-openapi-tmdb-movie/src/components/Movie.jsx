
import { useNavigate} from 'react-router-dom'
import './Movie.css'

function Movie(props){


    // 페이지 전환 기능함수를 HOOK으로 가져오기
    const navigate = useNavigate()
    const goMovieDetail = () =>{ 
        //페이지전환 요청
        navigate('/movie/' + props.movie.id) // 현재 영화의 id를 서브경로로 붙이기
    }

    return(
        <div className="Card" onClick={goMovieDetail}>
            <div className="title">{props.movie.title}</div>
            {/* json 데이타인 movie의 title 값-파일을 보면 있다. */}
            {/* <div className="poster">{props.movie.poster_path}</div> */}
            <div className="poster"><img src={`https://image.tmdb.org/t/p/original${props.movie.poster_path}`} alt="포스터 이미지" /></div>

            
            {/* json 데이타인 movie의 poster_path 값-파일을 보면 있다. */}
            <div className="year">{props.movie.release_date.slice(0,4)}년도 개봉작</div>
            {/* json 데이타인 movie의 release_date 값-파일을 보면 있다. slice 0번부터 4번전까지*/}
            <div className="rating">평점: <span>{props.movie.vote_average}</span>점</div>
            {/* json 데이타인 movie의 vote_average 값-파일을 보면 있다. */}

        </div>
    )
}
export default Movie