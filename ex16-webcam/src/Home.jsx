import { useRef } from "react"

function Home(){

    //요소참조변수 만들기 - HOOK
    const videoRef = useRef()
    const startVideo = ()=>{
        // navigator : 브라우저에 있는 추가 기능들에 대한 정보.
        // BOM 객체들 중에 navigator의 하위 멤버로 .. 웹캡을 제어하는 객체를 사용할 수 있음.
        // window.navigator : 원래 이형태임 
        // 마이크 카메라
        // navigator.mediaDevices.getUserMedia({audio:true, video:{facingMode:'user'}}) // 모바일에서는 앞/뒤 후면카메라 facingMode:{exact:'environment}
        // audio:false 면 소리 안나옴.  후면 카메라는 environment 임 


        // 내려받아.. 미디어내놔.. 그리고 나서.. : 그리고 이건 텍스트가 아님. 가지고 있는 통로를 stream이라고 하는데 ... 
        navigator.mediaDevices.getUserMedia({audio:true, video:{facingMode:'user'}}) // 스트림 받은 것을 소스 객체를 이용해서 스트림에게 주겠다.
        .then(stream=>videoRef.current.srcObject=stream)
        .catch(e=>alert(e.message))

        //후면카메라
        // navigator.mediaDevices.getUserMedia({audio:true, video:{facingMode:{exact:'environment'}}}) // 스트림 받은 것을 소스 객체를 이용해서 스트림에게 주겠다.
        // .then(stream=>videoRef.current.srcObject=stream)
        // .catch(e=>alert(e.message))
        // terminal 에서 npm run dev -- --host 치고 컴퓨터를 와이파이 핸드폰도 와이파이로 해서 네트워 주소로 들어가면 실행됨.
//         ➜  Local:   http://localhost:5173/
//   ➜  Network: http://192.168.50.165:5173/
//   ➜  press h + enter to show help


    }
    const stopVideo =()=>{
        videoRef.current.srcObject.getTracks().forEach(track=>track.stop())
        // 이미지의 수많은 프레임의 track를 가져와서 멈춰라
        
    }
    return(
        <div>
            <h1>react webcam</h1>

            {/* 웹캠이(핸드폰캠) 촬영한 비디오를 재생할 요소. src 속성에 적용할 비디오 데이타를 설정했을 때 바로 재생되게 하려면 무조건 autoplay속성이 있어야만 함 */}
            {/* 요소 참조변수 : videoRef */}
            <video autoPlay ref={videoRef} style={{width:'100%',maxWidth:'400px', border:'solid', backgroundColor:'black',borderRadius:16}}></video>
            <br />
            <button onClick={startVideo}>start Video</button>
            &nbsp;
            <button onClick={stopVideo}>stop Video</button>
        
        </div>
    )
}
export default Home