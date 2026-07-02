
import { FiSearch } from "react-icons/fi";
import './InputBox.css'


function InputBox(){
    return(
        <div className="search_box">
            <input type="text" placeholder="제목 이름 작성자로 검색..." />
            <FiSearch className="search_icon" />
        </div>
    )
}
export default InputBox