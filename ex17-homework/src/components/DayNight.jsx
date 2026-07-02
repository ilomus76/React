import { IoIosSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa";
import './DayNight.css'



function DayNight(){
    return (
        <div>

            <button className="Sunny"><IoIosSunny /></button>
            <button className="Moon"><FaMoon /></button>            
            
            
        </div>

    )


}
export default DayNight