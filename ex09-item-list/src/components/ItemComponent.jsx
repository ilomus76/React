import './ItemComponent.css'

function ItemComponent(props){
    return (
        <div className="item" onClick={props.onClick}>
            <div className="line1">
                <span >{props.item.no}</span>
                <span>{props.item.name}</span>
                {/* 수행과제 : 이미지 넣기 */}
                {/* <img src={props.item.image} alt="" /> */}
                <img width={100} height={100} src={props.item.image} alt="" />
                {/* 너무 span요소에 붙어 있어 스타일링 작업을 하러 css에 가자 */}
            </div>
            <div className="line2">
                <span>{props.item.message}</span>
            </div>

        </div>
    )

}
export default ItemComponent

// 별도 css 만들러 가자.