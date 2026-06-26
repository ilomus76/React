import { Component } from "react";
// import { Component, Fragment } from "react";
// import ES6에서 나옴

// 컴포넌트 조각 불러오기
import MyComponent2 from "./components/MyComponent2";
import MyComponent3 from "./components/MyComponent3";
import MyInput from "./components/MyInput";  
// 스타일된 Input을 받은 것이다.... styled-component를 안씀.

import MyButton from "./components/MyButton";

import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
import MyContainer from "./components/MyContainer";



class Home extends Component{

    //컴포넌트 A가 보여줄 글씨 데이터 (값이 변경되면 자동으로 화면 갱신)
    state = {
        'nickname':'oops',

    }

    //컴포넌트 B가 클릭했을 때 실행할 함수 
    changeNickname = ()=> this.setState({'nickname':'mbca'})

    render(){
        return(
            <>
                {/*fragment  */}
                <h2>Custom Component</h2>
                {/* 리액트는 화면 구성시 화면의 일부영역을 별도의 컴포넌트로 분리하여 조립하여 구성하는 것이 가능 */}
                {/* 1)별도의 컴포넌트 조각 만들기. 이 Home.jsx안에 또 다른 컴포넌트를 제작해 보기 */}
                {/* new MyComponent() 로 객체 생성해야 하지만 태그문으로 됨.  */}
                <MyComponenet></MyComponenet>
                <MyComponenet></MyComponenet>
                <MyComponenet/>  
                {/* 중간에 글자를 안넣으면 앤드태그만 써도 됨 */}
                {/* 2)다른 문서에서도 재사용하게 하고 싶다면 별도의 .jsx로 화면조각을 만드는 것이 좋음. */}
                {/* MyComponet처럼 Home 에 같이 넣으면 다른 곳에서 찾기 어려움.  */}
                {/* 그리고 각 콤포넌트들은 폴더를 나누고 sub로 나누어서 함 */}
                {/* 그래서 componets 폴더를 만들자  MyComponent2.jsx*/}
                <MyComponent2></MyComponent2>
                <MyComponent2></MyComponent2>
                {/* 스타일을 주고 싶다.. css를 하고 싶은데  */}

                {/* 3) 컴포넌트를 재사용할때 매번 같은 글씨만 보이는 것 효용성이 없어보임 */}
                {/* 그래서 컴포넌트를 재사용할때 데이타를 속성property으로 전달해보기 */}
                {/* 속성명은 나 마음대로 지을 수 있다. */}
                <MyComponent3 aaa='sam' age='20' color='red'></MyComponent3>
                <MyComponent3 aaa='robin' age='25' color='green'></MyComponent3>
                {/* 인스타그램이 이런 방법으로 만듦 */}
                {/* 내 생각 : 마치 객체를 실행하면서 함수의 파라미터를 전달하여 그 데이타를 사용하는 느낌임. */}
                {/* 내 생각 : 아이디어가 너무 좋은 것 같음 , XML에서 객체를 태그모양으로 만들어 실행하고 필요하면 파라미터를 전달하여 사용하는 방식이라는 것이 보인다. */}
                {/* 내 생각 : 인형에 객체를 끼어 넣는 다는 것과 같음. 그리고 데이타 바인딩....*/}

                {/* 혹시 속성들을 안주면? 그냥 비어 있은 undefined*/}
                <MyComponent3></MyComponent3>

                {/* 4) 컴포넌트에 전달할 값들이 여러개일 때...컴포넌트 안에서 속성들을 한번에 알아서 사용하기 */}
                <MyInput type='text' size='10' placeholder='닉네임 입력' readOnly></MyInput>
                {/* 자동완성하려면 타입자바스크립트를 배우거나 DOCS를 배워라  */}
                <MyInput type='password' size='20' placeholder='비밀번호 입력' autoFocus ></MyInput>
                <input type="text" />
                <input type="text" />
                {/* default와 내가 만든 styled 된 요소가 차이가 남. 그래서 각 회사들은 각 요소를 스타일되게 만들어 놓음. */}

                <hr />
                {/* 5) 컴포넌트의 props로 함수를 전달할 수도 있음 */}
                <button>aa</button> 
                {/* 안예쁨. */}
                {/* 나만의 버튼 */}
                <MyButton label='A를 선택' aaa={this.actionA}></MyButton>
                <MyButton label='B를 선택' aaa={this.actionB}></MyButton>
                <hr />

                {/* 6) 컴포넌트들 간의 데이타 처리 */}
                {/* 컴포넌트가 여러개 있을때 버튼과 input에 홈화면이 있다면 버튼과 input의 데이타를 처리하는 모습 */}
                {/* 3교시 */}
                {/* 리액트 팀에서 제안하는 데이타 주고받는 방법 */}
                {/* A라는 콤포넌트 B 콤포넌트 . 콤퍼넌트 사이에서 데이타를 주고 받지 못함. 둘이 대화하고 싶다면 무조건 HOME에 이야기 해야 함. 그래서 글씨가 HOME이 가지고 있어야 함. 그래서 함수와 변수가 HOME에 있어야 함. */}
                <ComponentA nickname={this.state.nickname}></ComponentA>
                <ComponentB onClick={this.changeNickname}></ComponentB>

                {/* 7) 콤포넌트의 속성이 아니라 자식을 전달 */}
                <MyContainer>
                    <h5>TITLE</h5>
                    <p>This is compoent children</p>
                    {/* div는 넣었는데 h5와 p가 안보임 */}

                    <a href="">aaa</a>
                    <a href="">bbb</a>
                </MyContainer>
                
                {/* 이제 funcitonal componnet로 가자 */}
                

            </>
        )
    }// render()

    // 함수를 속성으로 줄때는 버튼의 jsx가 아니라 전달하는 쪽에서 함수를 만듦.
    actionA=()=>alert('전화를 겁니다')
    actionB=()=>alert('이메일을 보냅니다.')

}// Home

export default Home


// 나만의 UI 조각(콤포넌트) 만들기
// export class MyComponenet extends Component{
// 다른 곳에서도 사용하려면 export 써야 함.

class MyComponenet extends Component{
    render(){
        return(

            <div>
                <p>This is Mycomponent</p>
                <button>BUTTON</button>
            </div>
        )
    }
}