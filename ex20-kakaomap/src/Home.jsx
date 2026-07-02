import KaoMap from "./components/KaoMap"

function Home(){

    return (
        <div>
            <h1>Kakao Map TEST</h1>
            {/* 지도를 보여주는 화면은 여러 페이제에서 재사용될수 있기에 콤포넌트로. */}
            <KaoMap position={{lat:37.4846,lng:126.9296}}></KaoMap>
            {/* 네이버에서 위도 경도 검색해라 , 현재 내위치 지정해서 보여줄수도 있다. 마커들도 전달할수 있고.. 이것은 우리가 해라.  */}
        </div>
    )
}
export default Home