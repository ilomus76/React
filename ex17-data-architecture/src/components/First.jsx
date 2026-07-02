import Second from "./Second"

function First(props){
    return(

        <div>
            <h3>First component</h3>
            <Second messsage={props.messsage} setMessage={props.setMessage}></Second>

        </div>


    )


}
export default First