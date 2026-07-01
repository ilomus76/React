import './Pagenation.css'

function Pagination(props){

    // props의 멤버를 편히 사용하기 위해 구조분해할당
    const {total, number, page, setPage} = props
    
    //전달받은 정보(총개수, 페이지번호, 페이지당 개수)를 기반으로 만들 버튼의 개수를 계산
    // const buttonCount=props.total/props.number 
    // const buttonCount = total/number 
    const buttonCount = Math.ceil(total/number) 
    // 위로 반올림.
    

    // 위 버튼개수만큼 요소를 가지는 배열만들기(값은 1,2,3,4....) - 버튼에 표시될 페이지번호
    const numbers = Array(buttonCount).fill().map((v,i)=>i+1) // 파이썬의 range()와 비슷
    // v : value , i : index , Array(9) : 9개의 배열, Array(9).fill(8) 은 8로 배열 9개를 채워라.
    return(
        <div className="page-button-container">          
            {
                numbers.map((num,idx)=><button key={idx} className="page-button" aaa={num==page? 'aaa':null} onClick={()=>setPage(num)}>{num}</button>)
            }

        </div>

        // 페이지 의 갯수를 바꾸는 것은 select input을 사용해서 하면 됨.

    )
}
export default Pagination