import { useEffect, useState } from "react";
import TableItem from "./TableItem"
import InfoBoard from "./InfoBoard";

import { CiViewList } from "react-icons/ci";
{/* <CiViewList /> */}
import { FaEye } from "react-icons/fa";
{/* <FaEye /> */}

import { LiaEyeDropperSolid } from "react-icons/lia";
{/* <LiaEyeDropperSolid /> */}
import { MdStar } from "react-icons/md";
{/* <MdStar /> */}
// https://react-icons.github.io/react-icons/search/#q=list
//npm install react-icons 을 해야 한다.



function Board(){



    const icons = [
        <CiViewList/>,
        <FaEye/>,
        <LiaEyeDropperSolid/>,
        <MdStar/>
    ]

    const titles = [
        ['전체 게시글','전체 등록한 게시글 수'],
        ['오늘 조회수','오늘 전체 조회수'],
        ['즐겨찾기','내가 즐겨찾기한수'],
        ['내가작성한글','내가 작성한 게시글수']
    ]

    const [boards, setBoards] = useState([]);

    useEffect(function(){
        fetch('./backend/board/loadBoardList.php')
        .then(function(response){            
            return response.text()  
            

        })
        .then(function(text){

            // console.log(text);
            // debugging 

            var json = JSON.parse(text)
            // // alert('aaaa')

            
            // // for( board of json.data){ // 배열의 요소가 반복하여 추출됨  [배열 , 파이썬의 리스트]
            // // //table에 추가될 <tr> 요소와 데이터들을 만들기
            // // var row = "";
            // // row +="<tr>";
            // // row +=`<td class="col_no">${board.no}</td>`;
            // // row +=`<td class="col_title"><a href="./board/view.html?no=${board.no}">${board.title}</a></td>`;
            // // row +=`<td class="col_writer">${board.writer}</td>`;
            // // row +=`<td class="col_date">${board.date}</td>`;
            // // row +=`<td class="col_hits">${board.hits}</td>`;
            // // row +="</tr>";
            // // }


            // console.log(json);
            // console.log(json.data)
            // alert(json.data)
            setBoards(json.data);
        })
       .catch(e=>alert('Error'))
    
    
    },[])

    return(

        <div className="board_wrap">
            {/* /////////////////////////////////////////////////// */}
                <div className="middle_info">
                    
                    {/* <InfoBoard icon={}></InfoBoard>          */}
                    {/* function InfoBoard({ icon, title, number, content }) { */}
                    {icons.map((icon, i) => (
                                <InfoBoard
                                    key={i}
                                    icon={icon}
                                    // title={`타이틀 ${i + 1}`}
                                    title={titles[i][0]}
                                    number={i * 10}
                                    content={titles[i][1]}
                                />
                            ))}


                </div>
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