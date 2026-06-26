import { Component } from "react"

import MyInput from "./components/Myinput"

class Home extends Component{
    render(){
        // 자바스크립트 안에서 xml을 사용할 것이다.
        return (
            // fragement
            <>
                <div>
                    <MyInput titleName='XX' ></MyInput>
                    {/* <p>이름 :</p>
                    <input type="text" placeholder="afdadsfad"/> */}
                    <MyInput></MyInput>
                    <p>나이 :</p>
                    <input type="text" placeholder="afdadsfad"/>
                    <hr />
                    <p>버튼</p>
                    <button>버튼입력</button>
                </div>
                <hr />
                <div>
                    <form action="">
                        <label htmlFor="">
                        <input type="text" />

                        <input type="subit" />
                        <input type="reset" />
                    </label>
                    </form>
                    
                </div>
            
            </>
        )
    }
}
export default Home