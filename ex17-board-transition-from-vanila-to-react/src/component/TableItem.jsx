
// import {useEffect, useState} from "react";


import './TableItem.css'

function TableItem(props){
   
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
                        <th className="col_eval">좋아요</th>
                    </tr>
                </thead>

                <tbody>

                    {
                        props.boards.map(board => (

                            <tr key={board.no}>
                                <td>{board.no}</td>

                                <td>
                                    <a href={"./board/view.html?no=" + board.no}>
                                        {board.title}
                                    </a>
                                </td>

                                <td>{board.writer}</td>
                                <td>{board.date}</td>
                                <td>{board.hits}</td>
                                <td>{board.eval}</td>

                            </tr>

                        ))
                    }

                </tbody>

            </table>

        </div>
    )

}
export default TableItem