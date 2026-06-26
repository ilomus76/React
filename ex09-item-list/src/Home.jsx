import { useState } from "react"

import ItemComponent from "./components/ItemComponent"

function Home(){

    // 글씨 데이터를 가진 state 변수와 setState 함수 만들기

    //변수와 함수를 set에 붙여 같이 써라..
    let[message, setMessage] = useState('Hello world') 
    // 초기값 안넣으면 undefined 값이 들어감
    // 변수와 함수를 둘다 만든것임. setState

    // 위의 것은 문자열

    // 2) JSX의 태그를 가진 state 변수 만들기
    let [message2,setMessage2] = useState(<h2>nice to meet you</h2>)

    //3)여러개의 글씨를 가진 배열 변수
    let [datas, setDatas] = useState(['aaa','bbb','ccc','ddd']) // 초기값 -배열

    //4) 여러개의 리스트 <li>요소를 가진 배열 변수
    let [datas2,setDatas2] = useState([<li>aaa</li>,<li>bbb</li>,<li>ccc</li>,<li>ddd</li>])


    //7) 대량의 데이타를 가진 배열 변수
    // const를 써도 된다. 원래것을 다시 새롭게 하기 때문에 const를 써도 됨
    // const [items, setItems] = useState([]) 
    // const [items, setItems] = useState([{},{},{},{}]) 
    // 보통 서버에서 가져오니까 빈 배열이다. 하지만 우리는 여기서 사용할 것이니 넣자.
    // const [items, setItems] = useState([
    //     {no:1, name:'sam',message:'Hello react'},
    //     {no:2, name:'robin',message:'nice to meet you'},
    //     {no:3, name:'hong',message:'have a good day'},
    //     {no:4, name:'park',message:'nice AI'}
    // ]) 

    // // [수행과제] 이미지가 있는 데이터를 목록으로 표시해보기
       const [items, setItems] = useState([
        {no:1, name:'sam',message:'Hello react',image:'https://cdn.pixabay.com/photo/2012/04/26/19/47/penguin-42936_1280.png'},
        {no:2, name:'robin',message:'nice to meet you',image:'https://cdn.pixabay.com/photo/2017/03/07/06/47/pirate-2123313_1280.png'},
        {no:3, name:'hong',message:'have a good day',image:'https://cdn.pixabay.com/photo/2013/07/13/13/14/tiger-160601_1280.png'},
        {no:4, name:'park',message:'nice AI',image:'https://cdn.pixabay.com/photo/2017/11/06/18/30/eggplant-2924511_1280.png'}
    ]) 

        // 픽사 베이



    return(
        <>
            <h2>목록형 UI 구현하기</h2>

            {/* 1) 일반 글씨를 가진 변수를 그냥 출력해 보기 */}
            {message}
            {/* 태그문이 아니더라도 그냥 나옴 .. {} 안은 자바스크립트의 문법 */}

            {/* 2)요소를 가진 변수를 그냥 출력하면... */}
            {message2}

            <hr />
            {/* 3)글씨 여려개를 가진 배열을 출력해 보기(JS는 배열을 출력하면 ,구문자로 요소들이 보여짐. JSX는 ,구분자 없이 그냥 열거됨) */}
            {datas}

            {/* 4) 각 요소들의 구분을 쉽게 하기 위해 ul요소로 표시하기 */}
            <ul>
                {/* <li>aa</li>
                <li>bb</li> */}
                {/* 요소들을 가진 배열을 그냥 출력하면.. 요소들이 열거됨 */}
                {datas2}
                {/* 데이타는 서버에 있음 값만 있음. 요소를 가지고 있지는 않음 편하기는 하지만 */}                
            </ul>
            {/* 5) 위 방식이 편해보이지만.. 배열의 요소에 html요소를 저장하는 방식은 좀 번거로움 */}
            {/* 실무 환경의 서버 DB에는 html요소가 아니라 그냥 데이터 값들만 존재함 */}
            {/* 그래서 우리는 일반 데이터를 가진 배열요소를 하나씩 가져와서  html요소로 감싸서 보여줘야 만 함 */}
            <ul>
                    <li>{datas[0]}</li>
                    <li>{datas[1]}</li>
                    <li>{datas[2]}</li>
                    <li>{datas[3]}</li>
            </ul>
            
            {/* 6) 배열의 요소데이터를 하나씩 직접 쓰는건 미쳤음. 그래서 반복문 활용 */}
            <ul>
                {
                    //  6) 배열의 요소 데이타를 하나씩 직접 쓰는건 미쳤음 . 그래서 반복문 활용 
                    //for(let i=0;i<3 ; i++){  }  error -{}안에서는 변수,값, 연산자, 함수호출 만 가능함
                    // 배열 스스로 본인의 요소 개수만큼 반복하면서 특정 함수가 실행 되도록 하는 메소드가 있었음.
                    //datas.forEach(function(e,idx,array){}) // 요소의 각각을 가져와서 함수를 실행해라.
                    //forEach()기능은 반복만 할뿐 출력이 없음. 그래서 사용 X
                    //forEach는 자기 스스로 돌기만 하고 출력을 하지 않음.
                    //그래서 .forEach처럼 요소의 개수만큼 반복하면서 함수를 실행하여 그 결과를 새로운 배열로 리턴해주는 기능 .map() 맵핑
                    //새 배열을 가지고 오면 그냥 놓기만 함. 그 배열에 li 요소를 붙이기만 함.
                    datas.map(function(e,idx,array){ //요소, 인덱스번호, 배열
                        // 반복문으로 목록을 구현할때 항목(item)마다 key 라는 속성을 줘야만 함.(값은 중복되지 않는 값)
                        return <li key={idx}>{e}</li>
                        // 설명 이야기를 다시 들어봐라..
                    })
                }
            </ul>
            <hr />

            {/* 7) 대량의 데이터가 보통은 값여러개를 가진 객체들인 경우가 많음. */}
                {
                    // items.map(function(item,idx,array){  // 요소:이름은 자기마음대로 , 인덱스 , 배열 ,
                    items.map(function(item,idx){  // 요소:이름은 자기마음대로 , 인덱스 , 배열 ,  
                        // 파라미터는 원하는 것만 가져오면 됨
                         return (
                            <div key={idx} style={{border:'1px solid black' , borderRadius:4, margin:4, padding:4 , display:'flex' ,flexDirection:'column'}}>
                                <span>{item.no}</span>
                                <span>{item.name}</span>
                                <span>{item.message}</span>

                            </div>
                         )

                    })
                }
                <hr />
            {/* 8) 항목(item)마다 화면 UI를 만드는 코드가 같이 있으니 지저분.. 그래서 항목 1개의 UI를 별도의 컴포넌트 조각으로 분리하여 제작 */}
            <div style={{border:'2px solid blue', padding:8 , margin:8}}>
                {
                    items.map((item,idx)=>{
                        return <ItemComponent item={item} key={idx} onClick={()=>{alert('선택항목의 이름:' + item.name)}}></ItemComponent>
                        // 반복문에서는 항상 key가 필요함. 시스템에서 필요
                        // props로 item을 전달

                        // => 한줄로도 가능...
                    })
                }
            </div>
               


            {/* 객체들은 나열되지 않음. */}

                    
                


        </>

    )
}
export default Home


            // <ul>

                

            //    
            //     {/* { */}
            //          {/* //  */}
            //          {/* //  */}
            //          {/* //   */}
            //          {/* //  */}
            //          {/* //  */}
            //          {/* //  */}
            //          {/* //  */}
            //         data.map(function(e,idx,array){ // 요소, 인덱스번호, 배열
            //             //반복문으로 목록을 구현할때 항목(item)마다 key 라는 속성을 줘야만 함.(값은 중복되지 않는 값)
            //             // return <li>{key}{e}</li>

            //         })

                    

            //     {/* } */}

            // </ul>

            // <hr />

            // {/* 대량의 데이타가 보통은 값 여러개를 가진 객체들인 경우가 많음. */}
                