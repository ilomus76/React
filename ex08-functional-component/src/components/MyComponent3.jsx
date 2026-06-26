
// functino 함수는 클래스의 render()를 표현해서 콤포넌트로 사용한다는 개념이다. 그래서 render()가 따로 필요없다. 

function MyComponent3(props){ // 태그에 작성한 속성들이 파라미터로 전달됨.
    // props는 파라미터라서 this 가 없음.

    //전달된 props에서 address만 뽑아내기
    // let address = props.address : 이것도 된다. 하지만 아래가 더 많이 사용
    let {address,age}=props // 구조분해할당
    // props를 home에서 던질때 객체로 던지고 그것을 구조할당하면 된다. 
    // 변수가 오는 순서는 상관없이 데이타 이름만 같으면 된다. 
    // 사용하는 갯수는 자신이 가져오고 싶은 만큰 하면 된다. 
    // 현재 속성에서 aa age color address를 주고 있는데 변수로는 address, age 두개로만 받고 있음.
    return(
        <div>
            {/* Componet를 상속받지 않았기에 아주 특별한 멤버변수인 this.props가 존재하지 않음 */}
            {/* 그럼 속성은... 함수니까.. 값을 당연히.. 파라미터로 속성들을 받음 */}
            {/* <span>Hello {this.prop.aaa}님</span> : // 이것은 안됨 */}
            <span>Hello {props.aaa}님</span> 
            <p style={{color:props.color}}>나이는 {props.age}살 입니다.</p>
            <p>나라: {props.address.nation}</p>
            <p>도시: {props.address.city}</p>

            {/* 위에 보니 props.을 매번 쓰는게 좀 번거로워. 그래서 [구조분해할당] */}
            <p>{age}, {address.nation}, {address.city}</p>
        </div>
    )
}
export default MyComponent3