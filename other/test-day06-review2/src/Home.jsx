import { useState } from "react"
import ItemComponent from "../components/ItemComponent"



function Home(){

    let[message,setMessage] = useState('Hello world')
    let[message2,setMessage2] = useState(<h2>nice to meet you</h2>)
    let[datas,setDatas] = useState(['aaa','bbb','ccc','ddd'])
    let[datas2,setData2] = useState([<li>aaa</li>,<li>bbb</li>,<li>ccc</li>,<li>ddd</li>])
    
    const [items,setItems] = useState([

        {no:1, name:'sam', message:'hellow react'},
        {no:2, name:'robin', message:'nice to meet you'},
        {no:3, name:'hong', message:'have a good day'},
        {no:4, name:'park', message:'nice AI'},

    ])
    return(
        <>
            <h2>목록형 UI 구현하기</h2>
            {message}
            {message2}
            <hr />
            {datas}
            <ul>
                {datas2}
            </ul>
            <ul>
                <li>{datas[0]}</li>
                <li>{datas[1]}</li>
                <li>{datas[2]}</li>
                <li>{datas[3]}</li>

            </ul>
            <ul>
                {
                    datas.map(function(e,idx,array){
                        return <li key={idx}>{e}</li>
                    })


                }
               
            </ul>
            <hr />

            {
                items.map(function(item,idx,array){
                    return (

                        <div key={idx} style={{border:'1px solid black',borderRadius:4,margin:4,padding:4,display:'flex',flexDirection:'column'}}>
                            <span>{item.no}</span>
                            <span>{item.name}</span>
                            <span>{item.message}</span>
                        </div>
                    )
                })
            }

            <div>
                {
                    items.map((item,idx)=>{
                        return <ItemComponent item={item} key={idx}></ItemComponent>
                        
                        //   onClick={()=>{alert('선택항목의 이름:' + item.name)}} 

                    })
                }
            </div>
        </>

        
        
    )
}
export default Home