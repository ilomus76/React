import { IoIosSunny } from "react-icons/io";
import { FaMoon } from "react-icons/fa";
import './DayNight.css'



function DayNight(){
    return (
        <div>
        
        
            <div>            
                <IoIosSunny />
                <FaMoon />

            </div>

            <div>
                <button className="Sunny"><IoIosSunny /></button>
                <button className="Moon"><FaMoon /></button>            
                
                

            </div>



        </div>


    )

}
export default DayNight