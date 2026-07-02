import './UlListTable.css'


function UlListTable(props){
    return(
        <div className='board_wrap'>
            <div className="icon">
                <div className="icon_area">{props.icon}</div>
                <p>{props.title}</p> 
            </div>

            <div>
                <ul>

                </ul>
            </div>


        </div>

    )

}
export default UlListTable