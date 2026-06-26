// import { Fragment } from "react";
import { Component } from "react";

// import styled from 'styled-components'
import styled from 'styled-components'
// styled는 정해진 카워드이다. 
// styled-components를 사용하면 자동완성이 되어 편함.
// 이것을 사용하려면 프로젝트에 styled-components 를 설치해야 함. 
// 이때 terminal에서 ctrl + c 로 끊고 설치하고 다시 와라. 
// npm install styled-components

// install이 되었는지는 package.json에 가서 dependencies를 확인해 보면 된다.
// 다시 코딩으로 돌아오려면 npm run dev를 실행해라. 

import logo_insta from './assets/instagram-logo.png'
import logo_facebook from './assets/facebook-logo.png'

import './Home.css'

class Home extends Component {

    render() {
        return (
            // return 은 하나의 값만 return을 할수 있기에 div 요소 하나를 만들고 그 안에 구조적으로 요소를 넣음.
            // <div>
            //     <p>Good</p>
            //     <p>Nice</p>                
            // </div>
            // <Fragment>
            //     <p>Good</p>
            //     <p>Nice</p>
            // </Fragment>
            // //////////////// XML ///////////////////////////////////////
            <>
                {/* <> 는 Fragment 객체의 속성을 가져오지는 않지만 그 위의 속성을 가져오는것이다. */}
                <p>2026.06.27. 로얄 패밀리 자체대회</p>
                <p>토요일 13:00 ~ </p>


                {/* 레이아웃 연습 (3개의 요소를 배치 - flex 스타일) : styled-components*/}
                {/* terminal 끊고 폴더로 가서 npm install styled-components를 하고.. */}

                {/* styled-Components 적용하기 -> 이러기 위해서는 styled-Components를 불러와야 함.*/}

                {/* Root라고 하는 스타일된 콤포넌트를 만들자.. */}
                <Root>
                    {/* block 요소 */}
                    <div>Resion #1</div>
                    <div>Resion #2</div>
                    <div>Resion #3</div>
                </Root>
                {/* 인스타그램 헤더 영역 따라 만들기 */}
                <Header>
                    <img src={logo_insta} alt="insta_image" />
                    <input type="text" placeholder="검색" />
                    <div>
                        <span>SAM</span>
                        <img src="./ms_01.png" alt="img" />
                    </div>

                </Header>

                {/* 인스타그램 로그인 요청 화면 UI 만들어보기 - 일반 CSS 파일로 적용해 보기 */}
                {/* 엣날 방식 */}
                {/* shift + alt + F */}

                <div className="container">
                    <img src={logo_insta} alt="LOGO" className="logo" />
                    
                    <input type="text" placeholder="전화번호, 사용자이름 또는 이메일" className="login_input" />
                    <input type="password" placeholder="비밀번호" className="login_input" />

                    <input type="submi" value="로그인" className="login_button" />

                    <div className="separator">

                        <span>또는</span>
                    </div>
                    <div className="loginFacebook">
                        <a href="">
                            <img src={logo_facebook} alt="facebook" />
                            <div>Facebook으로 로그인</div>
                        </a>

                    </div>

                </div>
                {/* <div className="container">
                    <img src={logo_insta} alt="LOGO" className="logo" />

                    <input type="text" placeholder="전화번호, 사용자이름 또는 이메일" className="login_input" />
                    <input type="password" placeholder="비밀번호" className="login_input" />

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

                </div> */}
            </>
            ///////////////////////////////////////////////////////////////



        )
    }

}// Home 객체 마지막  

export default Home
//클래스를 만들고 여기에 그 만든 클래스를 외부에 수출해서 사용하기 위해 정의
// 이 클래스를 main.jsx 에서 import해서 사용할 것이기 때문에 react DOM 인 main.jsx에 가서 import하자.
// 


const Root = styled.div`
    display:flex;
    border: 1px solid black;
    padding:1rem;
    justify-content: space-between;    
`


const Header = styled.div`

    display:flex;
    padding:1rem;
    justify-content: space-between;
    box-shadow: 0px 3px 3px black ;
    align-items: center;   
    
    &>img{height:2rem}
    &>input{
        padding: 0.5rem 1rem;
        text-align: center;
    }
    div{
        display: flex;
        img{
            width:2px;
            height: 2rem;
            border-radius: 50%;
            margin: 1px solid black;

        }
        span{
            font-weight: bold;
            padding:8px;
        
        }
    }

    
    
`
// const Header = styled.div`
//     display: flex;
//     /* 옆으로 보기 */
//     padding: 1rem;

//     justify-content: space-between;
//     box-shadow: 0px 3px 3px black;
//     align-items: center;

//     >img{height: 2rem}
//     /* 자식중에서 img */
//     >input{
//         padding: 0.5rem 1rem;
//         text-align: center;
//     }
//     div{
//         display: flex;
//         img{
//             width: 2px;
//             height: 2rem;
//             border-radius: 50%;
//             margin: 1px solid black;
//         }
//     }

//     span{
//         font-weight: bold;
//         padding:8px;
//     }
