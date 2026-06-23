function show(){
    // alert('show');
    // 모듈 js쪽에서는 html의 dom을 직접 출력하는 기능 불가. 무조건 react DOM 을 통해서 index.html에 접근하기때문에..
    // document.write('show....');
    //  // 이것은 실행이 안됨. 왜냐하면 html을 직접 접근이 안되고 
    //DOM 객체를 생성해서 출력해야 함.
    const div = document.createElement('div');
    div.textContent='show!!!';
    document.body.appendChild(div);

    // 이렇게 사용하면 또 기니 react를 사용하여 jsx에서 그렇게 해줌.

    // 리액트는 이 DOM생성을 알아서 해줌.. 개발자는 그대로 태그문으로 만들면 됨.  go to 5

}
//다른 JS에서 show 함수를 import하여 사용하게 하려면.. export 해야 함. 
// 아무나 가져다 쓸수 없음. 아래와 같이 export해야 함. 
export default show; // 이 문서안에서 적어도 1개는 export default 여야 함.  이거말고 더 있을 수 있으니 적어도 하나는 default 를 써야 함.
// 이 코멘트는 위에 있을 수 는 없지만 함수 선언할때 아래와 같이 사용가능.
// export default function show(){
//     alert('show');
// }


// 5
/// 
//또 다른 함수 정의
export function output(){
    // alert('show');
    // 모듈 js쪽에서는 html의 dom을 직접 출력하는 기능 불가.
    // document.write('show....');
    //  // 이것은 실행이 안됨. 왜냐하면 html을 직접 접근이 안되고 
    //DOM 객체를 생성해서 출력해야 함.
    const div = document.createElement('div');
    div.textContent='output~~~~~~~';
    document.body.appendChild(div);
}
// 다른 js에서 import 하려면 .. 여기서 export 해야만 함.
// export output; // default는 .js모듈안에 1개만 가능 .. default가 아닌것은 만들면서 export해야함.

// 변수도 export 가능
export let name = 'sam';
export const age = 20;

// 이 문서안에 export 4개 , default 하나 그리고 나머지 3

// 제일 중요한게 default, 
