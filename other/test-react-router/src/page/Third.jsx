import { useParams } from "react-router-dom"



function Third(){

    const params = useParams()

    return(
        <div>
            <p>Third page</p>
            <p>Hello 전달받은 번호: <strong>{params.num}</strong></p>
            
        </div>
        

    )
}
export default Third