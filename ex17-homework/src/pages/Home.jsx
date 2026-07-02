

import InfoBoard from "../components/InfoBoard"
import InputBox from "../components/InputBox";
import DayNight from "../components/DayNight";
import Profile from "../components/Profile";

import './Home.css'


// https://react-icons.github.io/react-icons/
// react-icons  [ npm install sacc react-icons]
import { FcAddDatabase } from "react-icons/fc";
import { FcEnteringHeavenAlive } from "react-icons/fc";
import { FaList } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";


import { RiListIndefinite } from "react-icons/ri";
import { IoEyeOutline } from "react-icons/io5";
import { AiTwotoneStar } from "react-icons/ai";
import { TfiPencil } from "react-icons/tfi";






function Home(){

    const icons_info = [ //  {icon, title, number, subtitle }
        {icon:<FcAddDatabase />, title:'자유게시판', number:null , subtitle:'React SPA board'},
        {icon:<FcEnteringHeavenAlive />, title:'대시보드', number:null , subtitle:''},
        {icon:<FaList />, title:'게시글목록', number:null , subtitle:''},
        {icon:<FaStar />, title:'즐겨찾기', number:null , subtitle:''},
        {icon:<IoPerson />, title:'내가작성한글', number:null , subtitle:''},
        {icon:<IoMdSettings />, title:'내가작성한글', number:null , subtitle:''},


        
    ]

    const icons_info2 = [ //  {icon, title, number, subtitle }        
        {icon:<RiListIndefinite />, title:'전체게시글', number:'10' , subtitle:'전체 등록된 게시글 수'},
        {icon:<IoEyeOutline />, title:'오늘조회수', number:null , subtitle:'오늘 전체 조회수'},
        {icon:<AiTwotoneStar />, title:'즐겨찾기', number:null , subtitle:'내가 즐력차기한 글'},
        {icon:<TfiPencil />, title:'내가작성한글', number:null , subtitle:'내가 작성한 게시글'},        
    ]


    return(
        <div className="Main_container">
            <div className="left_section">
                <div className="left_section_top">
                {  
                    // <InfoBoard data={icons_info[0]}></InfoBoard>
                    icons_info.map((icon_info,idx,array)=>{
                        if(idx>0) return null
                        // style={{ marginBottom: idx === 0 ? "20px" : "10px" }
                        return <InfoBoard data={icon_info} key={idx} style={{marginBottom: idx===0 ?"20px":"10px"}}></InfoBoard>
                    })
                }
                </div>

                <div className="left_section_bottom">
                {  
                    // {/* <InfoBoard icons_info={icons_info}></InfoBoard> */}
                    icons_info.slice(1).map((icon_info,idx,array)=>{
                        return <InfoBoard data={icon_info} key={idx}></InfoBoard>
                    })
                }
                </div>
            </div>
            <div className="right_section">
                <div className="board_search">
                    
                    <InputBox></InputBox>
                    <DayNight></DayNight>
                    <Profile></Profile>

                    
                    
                </div>
                <div className="Info_area">
                    {/* <p>afladf</p> */}
                    {
                        
                        icons_info2.map((icon_info,idx,array)=>{
                             return <InfoBoard data={icon_info} key={idx}> </InfoBoard>

                        })

                    }               

                </div>
                <div className="boarding_area">
                    <div className="board">

                    </div>
                    <div className="features">
                        <div className="popular">

                        </div>
                        <div className="category">

                        </div>

                    </div>

                </div>


            </div>

        </div>

    )
}
export default Home