import './InfoBoard.css'


function InfoBoard(props) {
    return (
        <div className="container">

            {/* 왼쪽: 아이콘 영역 */}
            <div className='left_area'>
                <div className="icon_box">
                        {props.icon}
                </div>
            </div>            

            {/* 오른쪽: 정보 영역 */}
            <div className="right_area">
                <div className="title">{props.title}</div>
                <div className="number">{props.number}</div>
                <div className="content">{props.content}</div>
            </div>

        </div>
    );
}

export default InfoBoard;




// function InfoBoard({ icon, title, number, content }) {
//     return (
//         <div className="container">

//             {/* 왼쪽: 아이콘 영역 */}
//             <div className="icon_box">
//                 {icon}
//             </div>

//             {/* 오른쪽: 정보 영역 */}
//             <div className="info_container">
//                 <div className="title">{title}</div>
//                 <div className="number">{number}</div>
//                 <div className="content">{content}</div>
//             </div>

//         </div>
//     );
// }

// export default InfoBoard;