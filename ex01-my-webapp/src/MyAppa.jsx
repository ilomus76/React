// Componnet라는 클래스는 react.js라는 라이브러리에 설계되어 있음.
// 이 파일에서 사용하려면.. import해야 함.
import {Component} from 'react' // .js 는 생략가능 , Component는 디폴트가 아니어서 {}로 가져옴.


// 리액트에서 화면의 구성 요소가 되려면.. component라른 클래스를 상속해야 함. 
// 화며에 보여지는 것들을 콤포넌트라고 함.
class MyApp extends Component{   // 상속을 통해 Componnet의 능력(멤버들)을 가지게 됨
    // 클래서이기 때문에 대문자로 시작 
    // 콤퍼넌트는 리액트가 가지고 있음.

    // MyApp 컴포넌트가 보여줄 화면을 그리는 기능함수 (이름이 정해져 있음.)
    render(){  // render : 그려라
        // 브라우저가 보여줄 글씨를 리턴해주면 표시됨
        return "Hello My Webapp" // ; 는 찍어도 되고 안찍어도 됨. 파이썬은 안찍음.
        // 이것을 main.js에 뿌려야 함. 

    }

} // MyApp class

/// 다른 문서(main.jsx)에서 MyApp를 사용하려면 .. export 해야 함.

export default MyApp // new로 객체 실행하는데 여기서는 태그로 함. main.jsx로 가라...