import './OlListTable.css'

function OlListTable(props){
    return(
        <div className="board_wrap">
            <div className="icon">
                <div className="icon_area">{props.icon}</div>
                <p>{props.title}</p>
            </div>

            <div>
                <ol>

                </ol>
            </div>


        </div>

    )

}
export default OlListTable