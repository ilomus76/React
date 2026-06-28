
function ItemComponent(props){

    return(
        

        <div className="item" onClick={props.onClick}>
            <span>{props.item.no}</span>
            <span></span>
            {/* <img src="" alt="" /> */}
        </div>
    )


}
export default ItemComponent