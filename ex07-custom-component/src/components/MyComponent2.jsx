import { Component } from "react";

class MyComponent2 extends Component{
    render(){
        return(
            // 컴포넌트 조각이 본인의 스타일은 알아서 해 놓기..(인라인 스타일: JS 객체)
            <div style={{margin:'16px'}}>
                {/* margin: 16 -> 기본 픽셀 */}
                {/* 인라인 스타일 */}
                {/* { 자바스크립트} 이고 안의 {} 는 객체임.  */}
            <span style={{padding:'.5rem 1rem',color:'blue'}}>안녕하세요. MyComponent2입니다.</span>
                <button>버튼</button>
                {/* 두개다 인라인 요소이니 옆으로 놓여 짐 */}
            </div>
        )
    }
}

export default MyComponent2 
// 홈에서 사용해야 하닌 Home.jsx로 가자..