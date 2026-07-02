function Second(props){

    return(
            <div>
                <h4>Second Component</h4>
                {/* 홈에 있는걸 second에서 보고 싶다 */}
                <p>Home 컴포넌트의 message 변수값 : {props.messsage}</p>

                <button onClick={()=>{props.setMessage('nice to meet you')}}>change message</button>
                {/* setMessage()가 여기에 없음. 부모에도 없음. First도 아니고 Home에 있음  */}

                {/* 전달하는 속성이 많아지면 너무 짜증나고 길다. 끝 .. 2번째 예제로  */}
            </div>

    )

}
export default Second