// 속성을 자동완성 되게 하려면...
// 방법1(권장) : TypeScript 언어 사용
// 방법2 : JSDoc 문서를 만들기 -- 컴파일러가 인식하는 주석 /** 로 시작

/**
 * @param {{
 *  label?:string;
 *  color?:string;
 * }} props
*/

function MyComponent6(props){
    return <button style={{color:props.color}}>{props.label} </button>

}
export default MyComponent6


// 5교시 
// 정보들이 엄청 많음.
// 목록적인 UI가 필요한테 전부 모양은 같고 내용만 다름.
// 컴포넌트 조각을 만들고 데이타만 다르게..
// 데이타는 서버에 있고 그 데이타를 가져와서 배열로 만들어서 데이타를 줌.
// 바이브 코딩을 하려면 코딩의 흐름을 이해한 사람이 중요한데 질문을 잘해야 함.
// 조각해라 라고 안하면 바이브 코딩 답이 힘들어짐.

// 회사에서는 코딩을 지금은 요구할 것이다. 
//