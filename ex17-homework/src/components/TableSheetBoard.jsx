import './TableSheetBoard.css'


function TableSheetBoard(props){
    //  console.log(props.data[0].board_name);
    //  alert(props.data[0].board_name)
    // col,row,
    return(
        <div>
            <div className='table_caption'>
                    <span>{props.data[0].board_name}</span>
                    <button className="write_btn"> {props.icon} 글쓰기</button>
            </div>
            <table>
                
                <thead>
                    <tr>
                        {
                            props.data[0].title.map((head,idx,array)=>{
                                return (                     
                                    <th key={idx}>{head}</th>               
                            
                                )   
                        })

                        }
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>서버 넘버</td>
                        <td>서버 제목</td>
                        <td>서버 사용자 이름</td>
                        <td>서버 날짜 2026.06.05</td>
                        <td>서버 조회수15</td>
                        <td>서버 좋아요 3</td>

                    </tr>
                </tbody>
            
            </table>

        </div>




    )
}
export default TableSheetBoard