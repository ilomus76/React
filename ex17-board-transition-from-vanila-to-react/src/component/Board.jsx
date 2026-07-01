import { useEffect, useState } from "react";
import TableItem from "./TableItem"


function Board(){

    
    const [boards, setBoards] = useState([]);

    useEffect(function(){
        fetch('../backend/board/loadBoardList.php')
        .then(function(response){            
            return response.text()  
            

        })
        .then(function(text){
            // var json = JSON.parse(text)
            // alert('aaaa')

            
            // for( board of json.data){ // 배열의 요소가 반복하여 추출됨  [배열 , 파이썬의 리스트]
            // //table에 추가될 <tr> 요소와 데이터들을 만들기
            // var row = "";
            // row +="<tr>";
            // row +=`<td class="col_no">${board.no}</td>`;
            // row +=`<td class="col_title"><a href="./board/view.html?no=${board.no}">${board.title}</a></td>`;
            // row +=`<td class="col_writer">${board.writer}</td>`;
            // row +=`<td class="col_date">${board.date}</td>`;
            // row +=`<td class="col_hits">${board.hits}</td>`;
            // row +="</tr>";
            // }


            console.log(json);
            console.log(json.data);
            setBoards(json.data);




        })
       //.catch(e=>alert('test'))
    
    
    },[])
        






    return(
        <div className="board_wrap">
            {/* /////////////////////////////////////////////////// */}
                <div className="board_title">
                        {/* 자유게시판  */}
                        <h2>최신 게시글</h2>          

                </div>
                <div>
                    버튼 [ 이곳은 + 버튼 넣는곳]
                </div>
                <div className="board_list_wrap">
                
                    <TableItem boards={boards}></TableItem>

                </div>
               
            {/* /////////////////////////////////////////////////// */}
        </div>
    )

}
export default Board