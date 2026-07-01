import { useState } from "react"

function Home(){


    const [title, setTitle] = useState('')
    const [message,setMessage] = useState('')

    const changeTitle = (event)=>{setTitle(event.target.value)}
    const changeMessage = (event)=>{setMessage(event.target.value)}

    // const submitGet = ()=>{
    const submitGet = (event)=>{
    
        // form 요소는 action 속성이 있든 없든.. 무조건 페이지를 갱신함. SPA에 맞지 않음.
        // 그래서 기본 기능을 막기  
        event.preventDefault()
        //input 요소의 값들을 가져와서 서버 backend에 전송 (ajax -fetch())
        // alert(title +'\n' + message)

        //backend 코드 (php언어)에 데이터들 (title, message) 전송하기
        // GET 방식 ( url: aaa.php?title=xxx&msg=xxxx)
        
        // 경로.. 실제 웹앱을 서버에 배포할때 일반적으로 frontend/backend 폴더를
        // 분리하여 작업함. 그리고 react 프로젝트는 npm run build를 통해 dist 폴더를 배포함.
        // dist 폴더가 frontend 역할이며. 그 안에 index.html이 모든 경로의 기준점. 
        const url = '../backend/aaa.php?title='+title+'&msg='+message  
        // 결합 연산자... 


    //     fetch(url).then(function(response){
    //         return response.text()
    
    //     }).then(function(text){
    //         alert(text)
    //     })
    //     // 위의 fetch함수를 아래로 하나로 만듦

        fetch(url).then(res => res.text()).then(text => alert(text))
     
        // AJAX는 반드시 서버에 배포해야 실행 됨.
        // 리액트를 배포하려면 .. npm run build로 배포용 dist폴더를 만들고 
        // dist 폴더안에 있는 모든 파일/폴더를 호스팅서버(dothom)업로드 해야 함. 단 /vite 처럼 서브경로가 있다면 vite.config.js파일에 등록해야 함.
        // base:'/vite/frontend' or base:'/vite/frontend/'
        // 마치 빌드하면 dist폴더가 frontend 폴더와 같은 역할임. 


    }


    //////////////////////////////



//     }

    ///////////////////////////////


    return(
        <div>
            <h2>REACT HTTP REQUEST</h2>
            <p>리액트에서 서버에 데이터를 전송해 보기</p>
            <hr />

            {/* 리액트는 실제 페이지전환을 하지 않는 SPA(single page application) 를 기반으로 하기에 */}
            {/* 서버와의 통신도 form 요소를 사용하면 페이지전환이 발생하기에 */}
            {/* JS의 AJAX기술로 HTTP 요청작업을 수행해야함 */}

            {/* 3교시  */}
            {/* 당연히 버튼요소의 onClick으로 처리할 것 처럼 보이지만 */}
            {/* 여전히 form 요소의 submit 이벤트로 처리함 */}
            {/* why? 버튼클릭말고.. 키보드 enter키를 눌렀을때도 전송되도록 하고 싶다면.. from사용 */}
            {/* 1)GET방식으로 간단하게 데이터 전송실습 */}

            <h4>GET method TEST</h4>
            <form onSubmit={submitGet}>
                <input type="text" placeholder="title2" onChange={changeTitle} />
                <input type="text" placeholder="message" onChange={changeMessage} />
                <input type="submit" />

            </form>

            
                        {/* <form onSubmit={submitGet} > */}
                {/* <input type="text" placeholder="title" onChange={changeTitle} /> */}
                {/* 글씨를 입력할때 마다 나오는 onchange 메세지에 따라 함수 발동 */}
                {/* <input type="text" placeholder="message" onChange={changeMessage} /> */}
                {/* <input type="submit" /> */}
            {/* </form> */}


        </div>


    )
}
export default Home