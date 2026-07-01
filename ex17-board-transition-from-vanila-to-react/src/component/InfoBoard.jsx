import './InfoBoard.css'

function InfoBoard(){
    return(
        <div className="container">
            <div className="icon">icon</div>
            <div className="info_container"> 
                <p>info</p>
                <div className="title">title</div>
                <div className="number">number</div>
                <div className="content">content</div>
            </div>            
        </div>
    )

}
export default InfoBoard