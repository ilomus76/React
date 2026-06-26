import { Component } from "react";

class MyContainer extends Component{
    render(){
        return(

            <div style={{margin:8 , padding:8 , border:'1px dotted red'}}>
                {/* div는 넣었는데 h5와 p가 안보임 */}
                 {/* // 컴포넌트의 자식 요소로 전달된 요소 배치하기 */}
                {this.props.children}
            </div>

        )
    }
}

export default MyContainer
// 스타일드된 div에 불과함 .. 아무것도 없음.