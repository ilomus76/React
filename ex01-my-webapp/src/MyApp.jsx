import { Component } from "react";

//별도의 css문서를 연결.
import './MyApp.css'

// src 폴더 안에 있는 이미지 파일을 불러와서 변수로 만들기
import paris from './assets/paris.jpg'

class MyApp extends Component{
    render(){
        // return "Hello"

        // 2 ]위의 태그문 글씨를 출력해 보면? -- 따옴표를 사용하면 그냥 문자열데이터임. 태그문인식 못함.. - 그냥 글씨로 보임
        // return "<h2>Hello</h2>"
        // 3 ] 따옴표 없이 태그문<>을 사용하면 React가 알아서 DOM 갤체로 만들어 화면을 구성함
        // return <h2>Hello Webapp</h2>
        // 이런식으로 .js안에 .. html 태그문을 같은 사용할 수 있도록 만든 언어 : JSX언어 (JS + XML [html])

        // 요소 여러개를 표시해 보기 - return 은 하나의 요소만 가능함..
        // return <h2>Hello</h2>
        // <p>error....</p>


        // 그래서 여러요소를 감싸는 큰 요소 하나를 먼저 만들고 안에 여러개의 요소를 배치
        // JSX 언어의 특징은. js안에 <>태그문을 사용하듯이..
        // <> 태그안에서 JS 의 변수사용이나 함수호출을 수행할 수도 있음.
        let name = 'sam'
        let type= 'checkbox' // input 요소의 타입
        // let type= 'text' // input 요소의 타입

        //스타일 적용해 보기 -- 별도의 .css문서를 만들어 적용
        

        return (    // 괄호  // JSX인데 HTML을 사용가ㅡㅇ
            // class 명 지정할때 .. 속성명 class 대신 className 사용을 권장 - why? JS에서 class 를 설계도를 만드는 키워드
            <div className='wrap'>
                <h2> Hello React JSX</h2> 
                <p>This is paragraph element</p>
                {/* // 이거 주석 안됨. 이곳은 html영역임.  */}
                {/* // <!-- -->  이것도 주석 아님  */}
                <p>Hello name</p>
                <p>Hello {name}</p>
                {/* xml영역안에서 js를 사용하는 {}를 쓰고 js의 주석문법으로.. 주석을 구현 */}
                {/* 태그문 안에서 {}안은 jsx문법이됨. */}
                {/* ctrl +/ 를 누르면 알아서 주석구조가 만들어 짐.. */}

                <input type="text" />
                <input type="radio" />
                {/* 속성값도 JS변수로 설정 가능 */}
                <input type={type} id='' readOnly placeholder=""/>

                {/* JSX언어는 반드시 end tag가 있어야 함. 만약 업애려면 closing tag를 사용 */}
                <hr />
                {/* 이미지 보여주기 (별도 수업예정) - 맛보기 */}
                {/* src폴더에서 작업하는 component의 이미지들은 scr폴더안에 위치하는 것을 선호함 */}
                {/* 이미지를 사용하려면 import 해야 함. */}
                <img src={paris} alt="paris image" />

            </div>
        )
    }
}

export default MyApp