// 1교시 : Redux, Context , 기존 구조
// Home -> First -> Second

import { useState } from "react"
import First from "./components/First";

function Home(){

    const [messsage, setMessage] = useState('Hello react');
    return(
        <div>
            <h2>HOME</h2>
            <p>message: <strong>{messsage}</strong></p>
            <First messsage={messsage} setMessage={setMessage}></First>
        </div>
    )

}
export default Home