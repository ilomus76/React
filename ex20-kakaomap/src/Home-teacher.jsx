import KaoMap from "./components/KaoMap"

function Home(){
    return (
        <div>
            <h1>KAKAO MAP TEST</h1>

            {/* 지도를 보여주는 화면은 여러페이지에서 재사용 될 수 있기에 컴포넌트로 */}
            <KaoMap position={{lat:37.4846, lng:126.9296}}></KaoMap>
        </div>
    )
}
export default Home