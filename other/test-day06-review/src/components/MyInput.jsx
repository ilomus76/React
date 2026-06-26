import { Component } from "react";

class MyInput extends Component{

    render(){
        return(
            <>
                <p>{this.props.titleName}</p>
                <input type="text" />           
            </>           
        )
    }
}
export default MyInput