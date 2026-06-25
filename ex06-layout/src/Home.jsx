import { Component } from "react"


import styled from 'styled-components' 
// 스타일을 만들 수 있는 것.


// src / assets 폴더안에 있는 이미지 파일을 불러와서 변수로 저장
import logo_insta from './assets/instagram-logo.png'
import logo_facebook from './assets/facebook-logo.png'

//css 파일 불러오기
import './Home.css'

// import { Component, Fragment } from "react"
class Home extends Component{
// class Home extends Component{

    render(){
        return (  // return은 하나만 할수 있음.

            // <div>
            //     <p>Hello</p>
            //     <p>Nice</p>
            // </div>
            // F12를 통해 요소를 보면 변함
            // 여러개를 리턴하기 위해 div 묶었더니.. 중첩이 깊어짐.. 필요업을 수도 있음.
            // 그래서 등장한 그냥 묶어만 주고 실제 요소가 되지 않는 컴포넌트 (화면의 일부 -파편) : Fragement
            // 단, 실제 요소가 아니기에 스타일등.. 어떤 속성도 적용할 수 없음.
            // 여러개의 요소가 안된다고 하니 하나로 묶어만 주는 것 만 함. 
            // 실제 요소가 아니기에 Fragment라는 글씨가 보이는 것도 싫어.

            // <Fragment>
            //     <p>Hello</p>
            //     <p>Nice</p>
            // </Fragment>
            <>  
            {/* 이것도 Fragement이다. */}
                <p>Good</p>
                <p>Nice</p>

            {/* 레이아웃 연습 (3개의 요소를 배치 - flex 스타일) : styled-components*/}
            {/* terminal 끊고 폴더로 가서 npm install styled-components를 하고.. */}
            <Root>
                <div>Resion #1</div>
                <div>Resion #2</div>
                <div>Resion #3</div>
            </Root>

            {/* 인스타그램 헤더 영역 따라 만들기 */}
            <Header>
                <img src={logo_insta} alt="logo" />
                <input type="text" placeholder="검색" />
                <div>
                    <span>SAM</span>
                    {/* 이미지 파일을 public폴더에 넣어보다(마치 현재 폴더인거처럼 경로 지정) */}
                    <img src="./ms_01.png" alt="" />
                </div>
            </Header>/

            {/* 인스타그램 로그인 요청 화면 UI 만들어보기 - 일반 CSS 파일로 적용해 보기 */}
            {/* 엣날 방식 */}
            <div className="container">
                <img src={logo_insta} alt="LOGO" className="logo" />

                <input type="text" placeholder="전화번호, 사용자이름 또는 이메일" className="login_input"/>
                <input type="password" placeholder="비밀번호" className="login_input"/>

                <input type="submit" value="로그인" className="login_button" />

                <div className="separator">
                    
                    <span>또는</span>
                </div>
                <div className="loginFacebook">
                    <a href="">
                        <img src={logo_facebook} alt="facebook" />
                        <div>Facebook으로 로그인 </div>
                    </a>

                </div>

            </div>
            </>

        )
    }

}//Home ....
export default Home

const Root = styled.div` 
/* 이름은 Root지만 div임. */
    display: flex;   
    /* row가 기본이니 횡으로 보인다. */
    border: 1px solid black;
    padding:1rem;
    justify-content: space-between; 
    /* 사이사이 알맞게 들어감. */
    /* 인스타그램에서 이런 구조 보임. */

    
`
const Header = styled.div`
    display: flex; 
    /* 옆으로 보기 */
    padding: 1rem;

    justify-content: space-between;
    box-shadow: 0px 3px 3px black;
    align-items: center;

    >img{height: 2rem} 
    /* 자식중에서 img */
    >input{
        padding: 0.5rem 1rem;
        text-align: center;
    }
    div{
        display: flex;
        img{
            width: 2px;
            height: 2rem;
            border-radius: 50%;
            margin: 1px solid black;
        }
    }

    span{
        font-weight: bold;
        padding:8px;
    }
    
`