// 모니터를 세웠을 때 79줄까지 보이기 때문에 79줄까지 쓰고 리엑트로 가면 모듈로 되기에 라인수는 짧아진다. 
// 유지보수는 엄청 용이하다. 

// React 기능과 Component클래스를 사용하기 위해.. import
import React,{Component} from 'react'  // default가 React
// import {Component} from 'react'  // default가 React
// react는 Component 능력을 가진 녀석이 화면의 구성요소가 될수 있음.
class HomeComponent extends Component{

    //멤버변수
    name = 'sam'

    //값이 변경되면 react가 자동으로 화면을 갱신해주는 Component클래스의 아주 특별함 멤버변수
    // 이것은 Component에 이미 있음. 
    // state로 관리될 변수가 여려개 일 수 있어서 객체로 저장
    state = {
        name:'park',
        age:20    
    }

    // 컴포넌트가 보여줄 화면구성을 리턴해주는 기능함수
    render(){   // -> render() 함수는 Component 에 있는 함수를 재정의 한것이지 호출한것이 아니다.. 
        return (
            // let name ='aaaaa' // 지역변수 -> 다른 곳에서 보지 못함. 그래서 멤버 변수로 만듦
            <div>
                <h2>React Button click event</h2>

                {/* 4교시 */}
                {/* 1.버튼 클릭 이벤트 처리(html때와 약간 다름.) - 함수의 이름만 써야 함.. 호출하면 안됨. 마치 함수 등록해  */}
                
                {/* <button onClick={aa()}>눌러주세요</button> : 이것은 이 태그가 실행할때 함수 호출 */}
                <button onClick={aaa}>눌러주세요</button>
                {/* 위처럼 클릭이벤트에 반응하는 함수를 HomeComponent클래스 밖에 놓는 것은 안 좋음. */}
                {/* 그래서 반응하는 함수도 가급적.. 클래스의 영역{}안에 멤버함수(method)로 만들어 등록하는 것을 권장 */}
                {/* ? 를 찾아라 */}

                {/* 멤버를 지칭할때는 this 키워드 필요 */}
                <button onClick={this.bbb}>눌러주세요</button>
                <button onClick={this.ccc}>눌러주세요</button>
                <button onClick={this.ddd}>눌러주세요(권장 have to)</button>
                {/* 화살표함수로 실행할 코드가 길지 않다면..별도로 만들지 말고.. 바로적용 */}
                <button onClick={()=>{alert('arrow function')}}>눌러주세요</button>
                <button onClick={()=>alert('arrow function')}>눌러주세요</button>
                {/* App.jsx의 count 함수도 이렇게 함. */}

                <hr />
                {/* 버튼 눌렀을때 다른 요소의 글씨를 변경해 보기 */}
                {/* <p>이름 : sam </p> */}
                <p>이름 : {this.name} </p>
                <button onClick={this.changeName}>robin으로 이름 변경</button>
                <button onClick={this.changeName2}>robin으로 이름 변경</button>

                {/* state변수를 활용하여 데이터를 변경해보기 */}
                <p>이름 : {this.state.name}</p>
                <button onClick={this.changeName3}>이름 변경</button>

                {/* 5교시 */}
                {/* state.age 정보 표시하고.. 변경해보기 */}
                <p>나이 : {this.state.age}</p>
                <button onClick={this.changeAge4}>나이변경</button>
                <button onClick={this.increaseAge}>나이 1 증가</button>
            </div>
        ) 

    }//render method....

    increaseAge=()=>{
        //state 값의 변경은 setState()만 해야함.
        // this.stage.age = this.stage.age+1 // 이것은 화면 갱신 안함.
        this.setState({age:this.state.age+1}) // age: key. this.stage.age는 멤버변수
    }

    changeAge4=()=>{
        // state 변수의 값 변경은 무조건 setState()함수 이용
        this.setState({age:30}); // state가 객체로 되어 있으니 객체로 줘야 함.
    }

    changeName3 = ()=>{
        //state 변수의 값 변경은 무조건 setState()라는 함수를 이용해야만 갱신됨.
        this.setState({name:'hong'})
        //this.setState({name:'park'}) // 원래의 값과 같으면 화면이 갱신되지 않음. 
    }

    // react에서 이벤트처리용 함수는 무조건 화살표함수로...
    changeName2 = ()=>{
        this.name= 'robin';
        //변수를 바꿧다고해서 화면을 다시 갱신해 주지 않음.
        //화면을 다시 그리라고 명령.
        this.forceUpdate() // 글씨가 업데이트됨. 
        //이렇게 갱신하라고 명령하는 것 짜증.. 알아서 갱신되었으면..하다면..
        // 값이 변경되었을때 자동으로 화면이 갱신되는 아주 특별한 변수 state를 활용. -> state는 다른 언어에서도 사용. 상태값.. 화면에 영향을 미치는 상태값
        // 변수값 마다 갱신을 하려면 미친것이다.

    }

    // 이름 변경 버튼 클릭했을때 실행 될 멤버함수

    changeName = function(){
        // 익명함수

        // 기존방식과 완전 다른 방식으로 요소의 글씨를 변경.
        // 데이타 바인딩
        // 기존은 요소를 찾아와서 id내놔 하고 .innerHTML로 작성...
        // 요소를 찾는 방식은 요소가 많을경우 힘들어짐.. 
        // 처리속도를 느리게 만듦. 반복문을 내부적으로 찾기때문에 매우 오래 걸림.
        // 리액트는 요소를 찾지 않음.
        // p요소가 너가 보여줄 것은 변수이니 너가 가지고 있고.. 너는 변수를 뿌려...
        // 요소와 데이타를 연결해서 데이타가 변하면 그 값을 표현 -> 이것이 데이타 바인딩.
        // 요소가 변수의 값을 보여주고 .. 클릭되었을때.. 요소를 찾지 않고.. 변수값만 변경하면
        // 그 변수를 보여주는 요소의 글씨가 변경되도록 하는 기법(data binding 이라고 부름)
        this.name='robin'  //error 
        //이유? 익명함수도 객체가 될수 있기에..  this.name을 HomeComponent말고
        // 본인 changeName함수객체의 멤버인줄 오해함. 
        // 이 함수가 멤버변수를 만들었다고 생각할 수 있음.

        //그래서 화살표함수를 써야함. 화살표함수를 객체가 되지 않는 함수임.
        // 그래서 이 함수는 안됨. 

        // 그래서 위로 가서 함수 다시 만듦. changeName2
        
    }


    //아래의 3개는 다 똑같다.  react에서는 화살표 함수를 권장 . 꼭 이것으로 해라....
    // es6에서 도입된 또 다른 방법 : 화살표 함수(react에서 권장!!!!)
    ddd=()=>{
        alert('화살표 함수')
    }
    // 함수를 정의하는 또다른 방법 : 익명함수
    ccc = function(){
        alert('익명함수')
    }

    // 멤버영역 -- 클릭 이벤트에 반응하는 함수(method) 만들기
    // function bbb() 클래스 안에서는 멤버함수는 function없어야 함.
    bbb(){
        alert('bbb function')
    }



}//HomeComponent
// main.jsx에서 사용하도록 ..
export default HomeComponent

//1번 실습)버튼 클릭시 반응하면 함수
function aaa(){
    alert('click')
}
// 클래스 밖에 만들었음. 
// 이런것을 다른 곳에서 사용
// 이러면 매일 익스포트해야 함.. 그래서 객체안에 넣자.