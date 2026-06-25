import { Component } from "react";



// 리액트에서 스타일을 적용하는 방법은 매우 다양함.
// Ract에서 기본으로 제공하는 방식이 3가지
// 추가로 외부라이브러리로 스타일 방식 2가지
// 총 5가지 있음. 

//외부 css 파일을 가져오기
{/* <link rel="stylesheet" href="" /> : html에서 사용 */}
import './Home.css'

// 모듈 css 파일을 가져오는 방법은 조금 다름. 스타일 가진 객체를 가져오는 방식
import homeStyle from './Home.module.css'
// 멤버 변수인냥 사용할 수 있음. 
// 이미지 를 불러오는 것과 같음.

import './Home.scss'
// 사스라고 부름


// styled 이 적용된 컴포넌트를 만들어주는 객체 import
import styled from 'styled-components'


class Home extends Component{
    render(){
        return(
            <div>
                {/* 1) 인라인 스타일 : html 요소에 style속성으로 스타일 지정 [ 다른점 : 스타일을 문자열이 아니라.. JS 객체로 줘야 함.*/}
                <h2 style={titleStyle}>Hello React Style</h2>
                {/* <h2 style={this.titleStyle}>Hello React Style</h2>  : 멤버 변수가 아니어서 this를 안씀.*/}
                <p style={textStyle}>nice to meet you.</p>

                <p style={textStyle}>안녕하세요</p>
                <p style={{color:'green',margin:16}}>Have a good day.</p>
                {/* 객체를 직접 만들어 쓰면 자동완성도 됨. */}
                {/* 바깥 중괄호는 자바스크립트, 안쪽은 스타일 객체용 중괄호 */}

                {/* 인라인스타일이면서 내부스타일적인 것이 위의것 */}


                {/* 2)별도 css 파일을 만들고 적용하기 ~주의! 다른 화면에도 영향을 줌 */}
                <p className="aa">클래스 선택자 연습</p> 
                {/* 클래스 선택자가 권장이고 class가 아니라 className임. */}
                {/* Home.css로 가자. */}

                {/* 3) 클래스선택자를 특정 요소에만 적용되도록 하는 module.css 파일 [인기 없음] */}
                {/* 예전에는 인기 있었지만 안함. */}
                <p className="bb">모듈 클래스 선택자 연습 </p> 
                {/* 위 방식은 안됨 . 모듈것의 bb라고 지정해야 함.*/}
                <p className={homeStyle.bb}>모듈 클래스 선택자 실습</p>
                {/* Home.module.css */}
                
                <hr />

                {/* 4) 외부 스타일 라이브러리 - sass[라이브러리 설치 필요 npm install sacc (scss 모듈이 포함되어 있음. 요즘 핫한게 scss) , vpm install + 모듈명] : 신테티컬 ( 구문적으로) awesome (놀라운) 스타일시트 */}
                {/* 1세대 sass */}
                {/* terminal 끊고 설치해라. */}
                {/* 라이브러리를 설치하면 파일들은 node_modules폴더에 다운로드 되며. package.json 파일의 dependencies에 등록됨 */}
                {/* sacc/scss 는 계층구조를 이용하여 요소들의 관계를 선택할 수 있는 문법 */}
                {/* 별도의 파일로 제작  [ 파일 확장자 .scss ] or .sass */}
                <nav className="menu">
                    <ul>
                        <li><a href="">NAVER</a></li>
                        <li><a href="">GOOGLE</a></li>
                        <li><a href="">KAKAO</a></li>
                    </ul>
                </nav>
                
                
                
                {/* 5) 외부 스타일 라이브러리 - styled-components [설치 필요 npm install styled-componets - s가 있다. 없는 것도 있으니 주의]: 스타일된 콤포넌트*/}
                {/* 2세대가 syled-component */}
                {/* scss와 비스함. */}
                {/* 핫 리로딩 기능 : 저장하면 자동으로 결과가 브라우저에 보이는것 */}
                {/* 설치 여부는 pacakge */}

                {/* 사용하려면 import해야 함.  */}
                {/* 스타일이 적용된 버튼을 제작하고 사용 */}
                {/* <button ></button> */}
                <Mybutton>스타일 버튼</Mybutton>
                <Mybutton>나만의 버튼</Mybutton>

                {/* 사용자 입력박스.. 스타일이 적용된 input 요소를 만들자 */}
                <MyInput></MyInput>

                {/* 자식요소들의 스타일을 가진 요소도 만들 수 있음 - 이것때문에 인기 */}
                <MyContainer>    
                    {/* 자식  요소 가지고 있음. */}

                    <span>Good</span>
                    <p>Hello <span>React</span></p>
                </MyContainer>
                <span>nice to meet you</span>

                {/* 형제 선택자 사용 + ~ */}
                <TextInput placeholder="이메일"></TextInput>
                {/* input을 이용했기 때문에 속성을 똑같다. */}
                <TextInput placeholder="비밀번호"></TextInput>
                <div>잠시 다른 요소</div>
                <TextInput placeholder="닉네임"></TextInput>
                <hr />

                {/* 요소의 속성에 따라 다르게 스타일을 적용(동적 스타일링) [ 속성명은 마음대로 정해도 됨] */}
                <WebButton bg='blue'>로그인</WebButton>
                <WebButton bg='green'>회원가입</WebButton>



                {/* [별외. ] 요즘 유행하는 외부 스타일 라이브러리 : bootstrap css, tailwind css*/}
                {/* tailwind는 신흥강자이지만 코드가 엄청 길어져 선호되지 않음.  */}
            
            </div>
        )
    }//render
}// Home
export default Home

// 1) 인라인 스타일용 JS 객체 - 제목글씨 스타일 
const titleStyle ={color:'blue'}

//일반 글씨 스타일
const textStyle ={
    color:'red',
    fontSize: 20, // snake 표기법이 cammel 표기법으로 바뀌었음. 여기는 css가 아니자 자바스크립트임. [기본단위는 px 픽셀]
    fontStyle:'italic',
    // margin: 16 // 단위는 픽셀단위  
    margin: '16px', // 단위를 사용하려면 문자열로 '16rem'
}


// styled-components를 이용항여 스타일링이 된 버튼 컴포넌트 만들어 보기
// 스타일을 작성하는 방법은 빽틱 영역 사용. [css문법으로 ...] 인라인에서는 fontSize임. 
// -- vscode에서 속성명이 자동완성되려면.. 확장프로그램설치 [ vscode-styled_components]
const Mybutton=styled.button`                 // styled 된 버튼을 .을 찍으면 보임. 
    font-size:1rem;
    font-weight:bold;
    //자동완성이 안됨.   확장프로그램설치 [ vscode-styled_components] 설치후 자동완성됨
    background-color:black ;
    color: white;
    padding:.25rem 1rem;
    border-radius: 4px;

`  
const MyInput = styled('input')`
    padding: .25rem 1rem;
    width:100%;
    margin:16px;
` // 이것도 된다.
// const MyInput= styled.input`
// `


const MyContainer = styled.div`  // 기본은 div 속성임.
    margin:1rem;
    padding: 1rem;
    box-shadow: 0px 5px 3px gray;

    //본인을 지칭하는 기호 &
    &:hover{ // 본인이 hover 되었을때
        background-color: yellow;
    }

    // 자식 선택 가능 [ 본인을 지칭하는 &는 생략가능]
    /* &>span{
        color:blue;
        font-weight: bold;
    } */

    >span{
        color:blue;
        font-weight: bold;
    }
    
    //자손 선택 가능
    /* & span{
        font-style:italic;
    } */

    //위와 같음
    span{
        font-style:italic;
    }

`

// 콤포넌트는 첫글자 대문자
const TextInput=styled.input`
    padding: .5rem 1rem;
    display: block;   

    //바로 다음 형제 선택자 + 
    & + &{ // 내거 앞에 똑같은 놈이 있을 경우 , 현재거와 똑같은 다음것 , & + div : 현재거와 똑같은 div , 이것을 하면 연달아 오는 input의 만나는 지점을 조정.
        margin-top: 0.5rem;  
    }

    //다음 으로 오는 모든 형제 선택자
    & ~ &{   // 내것 다음에 오는 것 다....
        border: 1px solid red;
    }
`

//일반변수
let textColor = 'white'
const WebButton=styled.button`
    display: block;
    width:100%;
    margin:0.5rem 0; //위아래 좌우
    padding: 0.5rem 1rem;

    // 스탕리이 된 버튼에 지정된 속성(property)을 받아서 특정 기능으로 처리할 수 있음.
    /* background-color: ${function(props){return props.bg}}; // bg의 이름은 내 마음데로.. -> 너무 길어 */
    /* background-color: ${(props)=>{return props.bg}}; */
    background-color: ${props=>props.bg};
    //JS의 변수값 사용
    color: ${textColor}
`
