
import {useEffect, useState} from "react";


import './TableItem.css'
import Pagination from './Pagination';

function TableItem(props){

    const [currentPage, setCurrentPage] = useState(1)
    const [pageSize,setPageSize] = useState(8)

    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;

    const currentBoards = props.boards.slice(start, end);


   console.log(props.boards);
    return (
        <div>

            

            <table className="board_list">

                <thead>
                    <tr className="column_title">
                        <th className="col_no">번호</th>
                        <th className="col_title">제목</th>
                        <th className="col_writer">작성자</th>
                        <th className="col_date">작성일</th>
                        <th className="col_hits">조회수</th>
                        {/* <th className="col_eval">좋아요</th> */}
                    </tr>
                </thead>

                <tbody>

                    {
                        currentBoards.map(board => (

                            <tr key={board.no} className="column_title">
                                <td className="col_no">{board.no}</td>

                                <td className="col_title">
                                    <a href={"./board/view.html?no=" + board.no}>
                                        {board.title}
                                    </a>
                                </td>

                                <td className="col_writer">{board.writer}</td>
                                <td className="col_date">{board.date}</td>
                                <td className="col_hits">{board.hits}</td>
                                {/* <td>{board.eval}</td> */}

                            </tr>

                        ))
                    }

                </tbody>

            </table>
            <div>
                <Pagination 
                    totalCount={props.boards.length}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                
                ></Pagination>

            </div>

        </div>
    )

}
export default TableItem