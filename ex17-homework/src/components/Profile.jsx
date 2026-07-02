import profileImage from "../assets/ms19.png"

import './Profile.css'

import { IoIosArrowDown } from "react-icons/io";

function Profile(){

    return(

        <div className="container">
            <div id="wrap">
                {/* <h2>프로필 등록 페이지</h2> */}
                {/* <p>프로필 사진을 등록하고 닉네임을 설정하세요</p> */}
            </div>
    
            <div>
                <img src={profileImage} alt="profile-image" width={40}   />                
                {/* <input id="in1" type="file" accept="image/*" />/ */}
                
            </div>
            <div>
                <p> <strong>홍길동</strong></p>
            </div>
            <div>
                <IoIosArrowDown />
            </div>

            <div>
                {/* <input type="text" placeholder="닉네임" id="in2" /> */}
            </div>
            <div>
                {/* <button id="btn1"> 프로필 등록</button> */}
            </div>
        
        </div>


    )

}
export default Profile