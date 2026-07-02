import './InfoBoard.css'

function InfoBoard(props){
    return(
        <div className="container" style={props.style}>
            <div className="left_area">
                {props.data.icon} 
                {/* 속성중에 data속성에서 icon값 */}

            </div>
            <div className="right_area">
                <div className="title">
                    <p><strong>{props.data.title}</strong></p>
                </div>
                <div className="number">
                    <p>{props.data.number}</p>

                </div>
                <div className="subtitle">
                    <p>{props.data.subtitle}</p>

                </div>

            </div>
        </div>
    )
}
export default InfoBoard