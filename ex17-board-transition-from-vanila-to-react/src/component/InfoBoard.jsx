import './InfoBoard.css'




function InfoBoard({ icon, title, number, content }) {
    return (
        <div className="container">

            {/* 왼쪽: 아이콘 영역 */}
            <div className="icon_box">
                {icon}
            </div>

            {/* 오른쪽: 정보 영역 */}
            <div className="info_container">
                <div className="title">{title}</div>
                <div className="number">{number}</div>
                <div className="content">{content}</div>
            </div>

        </div>
    );
}

export default InfoBoard;