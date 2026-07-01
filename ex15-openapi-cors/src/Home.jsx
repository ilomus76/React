function Home(){

    const clickBtn = ()=>{
        //네이버 코스피 지수 검색 결과 웹페이지 데이터 가져오기
        // 자바스크립트로 가져와 보자.
        // 인터넷 주소에서 네이버 켜봐라.
        // 네이버에서 "코스피 지수" 
        const url='https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%EC%BD%94%EC%8A%A4%ED%94%BC+%EC%A7%80%EC%88%98&ackey=orz6y29z'

        fetch(url).then(res=>res.text()).then(text=>alert(text)).catch(e=>alert(e.message))
        // catch 하면 에러가 나오는데 failed to fetch로 나오는데 자세히 안나옴.
        // F12 를 눌러 에러를 보면 cors 문제로 인해 가져오지 못하는데 이것은 대부분이 그렇다. 큰 회사에는 프런트 백엔드 DB 머신러닝  서버가 따로 있는데 이 서버간에 이동이 단절이 되어 있음. 
        // cross origin(원격지) 간의 자료 공유는 안됨. Web Day14번을 참조...
        // Access to fetch at 'https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%EC%BD%94%EC%8A%A4%ED%94%BC+%EC%A7%80%EC%88%98&ackey=orz6y29z' from origin 'http://localhost:5173' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
    
        // Day14 web 에서 공부했음. 

        // 해결책 .. 
        // 내 서버의 backend에게 대신 데이터를 요청하고.. 그 결과를 받기(web 수업의 Day14 참고)
        // 이것은 나중에 해 봐라.... Day14를 이용해서...
    }
    return(
        <div>
            <h2>OPEN API-CORS</h2>
            <button onClick={clickBtn}>naver 검색 데이터 가져오기(CORS 문제 발생)</button>

            
        </div>
    )

}
export default Home