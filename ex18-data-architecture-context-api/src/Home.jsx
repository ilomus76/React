import React from 'react'

import First from "./components/First"
import { useState } from 'react'



// Home 아래에 있는 모든 컴포넌트들이 공유하고 싶은 데이터가 있다면...
// 전역 저장소를 만들어 값을 저장해 놓고 자식 컴포넌트들이 언제든 저장소에 접근하여 데이트를 사용.
// 전역 저장소를 Context라고 부름. ( 또는 리덕스에서는  store라고도 부름)

// 전역변수이니 함수 밖에 씀
// const MyContext=React.createContext()    // 라이브러리를 import 해야 함.
export const MyContext=React.createContext()    // 다른 곳에서 사용하도록 export해야함 default는 안됨. Home이 export이기 때문에
// 다른 곳에서 사용하려면 export 해야함. 즉 second가 모르니 export 해야 함. 
//전역 저장소를 만듦.Mycontext 여기 안에 원하는 변수를 저장할수 있음 이것을 value라고 함.
// value가 여러개일수도 있음. 이때는 객체로 전달도 가능


function Home(){
    const [message,setMessage] = useState('hello React')
    return(

        

        <div style={{padding:16}}>
            <h1>HOME</h1>
            {/* MyConext의 데이타들을 자식들이 사용할 수 있도록 제공해주는 객체로 감싸야 함. */}
            <MyContext.Provider value={{message:message,setMessage:setMessage}}>  
                {/* 이 영역 안에 있는 자손 컴포넌트 들만 MyConext에 접근 가능 */}
                <First></First>
            </MyContext.Provider>

            {/* Home이 first를 가짐 */}
            {/* <First></First> */}

        </div>
    )

}
export default Home

// Context API: 앱 전체에서 참조할 수 있는 전역변수를 만들 수 있는 React의 API
// 상태값을 최상위 컴포넌트에 넣고 작업해도 되지만...
// state 변수가 많아지면 관리가 어려움. 어려워지기 시작함. 
// state 변수를 만들어도 되지만 배열일 경우 그 배열들을 재배열 하는 함수를 다시 만들어야 하는데 
// 갯수가 많아지면 너무 많아짐.

// 그래서 state값과 이를 제어하는 함수들을 연관된 것끼리 별도의 파일로 나누어 관리하는 방법
// 외부 라이브러리 redux