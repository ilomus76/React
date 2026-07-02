import { useEffect } from "react"

function KaoMap(props){

    //아래 div가 그려진 후 자동으로 특정 함수가 실행되도록 하는 HOOK
    let map=undefined
    useEffect(()=>{
        //지도를 불러오는 코드를 작성.
        if(map==undefined){
            const container= document.getElementById('map')
            // 지도를 표시 위치나. 줌레벨등의 옵션 객체
            const options= {
                center: new window.kakao.maps.LatLng(props.position.lat, props.position.lng),
                level: 3  //지도의 레벨(확대, 축소 정도)
            }
            //npm install로 설치하지 않았기에..이 jsx에서는 import로 kakao 클래스를 인식못함
            //index.html에 <script> 외부 스크립트로 추가한 라이브러리는 
            //BOM 중 최상위객체 window 의 멤버로 추가됨.
            map= new window.kakao.maps.Map(container, options)
        }

        //마커등.. 여러 작업을 추가로 구현(개발자 사이트 문서 참고 구현)

    },[])

    return (
        <div style={{border:'2px solid black', margin:8}}>
            {/* 지도가 표시되는 영역(사이즈 필수) */}
            <div id="map" style={{width:'100%', height:'300px'}}></div>
        </div>
    )
}
export default KaoMap
