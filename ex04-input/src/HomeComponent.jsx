// 단위가 콤포넌트임.

import React, { Component } from "react";

// 홈화면의 콤포넌트를 만들자.
class HomeComponent extends Component{
    // Component라는 것을 react에서 이미 제공을 해주기 때문에 가져다 쓰는 상속을 함.

    // 값이 변경되면 자동으로 화면을 갱신해주는 Componnet 클래스의 아주 특별한 멤버변수 state
    state = {
        text:'', 
        text2:'', 
    }

    // 일반 멤버변수 - 값을 변경해도 화면이 갱신되지 않음. 데이타들 일정기간 보관하는 느낌.
    inputText=''

    // 요소를 참조reference하는 참조변수 선언
    inputRef = React.createRef() 
    pRef = React.createRef()  //
    render(){

        // let aaa=0;
        // 그림을 그려내는 함수
        // return <h2>aaa</h2> // 한줄 표현
        return (
            // 여러 HTML을 사용하려면 div문과 같이 안에 넣어야 함. 두개의 요소를 직렬화 시키면 에러
            <div>
                <h2>REACT INPUT</h2>
                {/* <p>리액트에서 사용자 입력 받아보기 {aaa}</p>    */}
                <p>리액트에서 사용자 입력 받아보기</p>  
                <hr />  
                {/* //  */}
                {/* // 변수를 만들 수 없지만 {}를 쓰면 된다.  */}

                {/* 1. input요소의 글씨가 변경될때 마다 반응하기 */}
                <input type="text" onChange={this.changeText} /> 
                {/* // 텍스트가 바뀔때 마다 생기는 메세지 , this 는 멤버 변수/함수를 가리킴 , 호출할때 함수 이름만 ()없애라*/}
            
                <hr />
                {/* 2. input요소의 글씨가 변경될때 마다 바로 아래 p요소에 표시하기 */}
                <input type="text" onChange={this.changeText2} />
                <p>입력된 글씨 : {this.state.text}</p> 
                {/* {} 안에 자바스크립트가 올거고 변수가 올거다. */}
                {/* <p>입력된 글씨 : this.state.text</p> ::글자임 */}
                <hr />
                {/* 3.버튼을 클릭했을 때 input요소에 써있는 글씨를 p 요소에 보여주기 */}
                <input type="text" onChange={this.changeText3}/>
                <button onClick={this.clickBtn}>입력완료</button>
                <p>입력이 완료된 글씨 : {this.state.text2}</p>

            {/* 4. 요소를 참조하여 제어하는 방식을 react에서도 제공함 */}
            {/* 원래 없었다가 생긴것임 */}
            <input type="text" placeholder="이메일을 입력하세요." ref={this.inputRef}/>
            <button onClick={this.clickBtn2}>이메일 입력완료</button>
            <p ref={this.pRef }>입력한 이메일 정보 : </p>
            
            {/* 사용자 입력데이터는 보통 웹서버로 전송해야 함. form 에 대한 수업(추후 별도.) */}
            {/* 사용자 input은 여기까지... */}
            </div>

            
            
        )
    }// render methode

    //4) 
    clickBtn2 = () =>{
        // inputRef 참조변수가 현재 참조하는 요소의 값을 가져와서
        let value = this.inputRef.current.value // 현재 참조하는 요소의 값을 가져와라
        // pRef참조변수가 현재 참조하는 요소에 쓰기 
        this.pRef.current.innerHTML = value
    }

    //3)
    clickBtn=()=> this.setState({text2:this.inputText})
    changeText3 = event=> this.inputText = event.target.value 
        // 일반 변수기 때문에 화면에 갱신되지 않므.
    

    // clickBtn=()=>{
    //     this.setState({text2:this.inputText})
    // }
    // changeText3 = (event)=>{
    //     this.inputText = event.target.value 
    //     // 일반 변수기 때문에 화면에 갱신되지 않므.
    // }

    //2) 글씨 변경될때 마다 p요소가 보여주는 sate 값 변경하는 함수 만들기
    changeText2 = (event)=>{ // 강사님께 질문한 결과 event는 실제로 BOM에서 react에 주고 그걸 다시 component가 나에게 상속을 해준 객체라고 함.
        //state값의 변경은 반드시 .setState()라는 기능을 사용해야 만 함. 
        this.setState({text:event.target.value})

    }

    //1) 글씨변경될때 마다 반응할 함수로 등록된 함수 만들기
    // 선언적 함수 익명함수 화살표함수 중 화살표 함수를 써라
    changeText = (event)=>{ // event : 변경이벤트 정보를 가진 객체가 자동으로 전달됨.
        // alert(event.target.value) // 이벤트를 발생한 녀석(target)의 값 출력
        // 브라우저 개발자모드(F12)의ㅡ [console]탭에 출력하기
        console.log('change text:' + event.target.value)
    }



}//HomeComponent
export default HomeComponent