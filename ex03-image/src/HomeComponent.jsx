import React,{Component} from 'react'

//src폴더안에 있는 이미지파일을 불러와서 변수에 저장
import newyork from './newyork.jpg' // 변수 이름은 자기 마음대로 사용할수 있음.
import paris from './assets/paris.jpg'
import sydney from './assets/sydney.jpg'
import moana01 from './assets/moana/moana01.jpg'
import moana02 from './assets/moana/moana02.jpg'
import moana03 from './assets/moana/moana03.jpg'
import moana04 from './assets/moana/moana04.jpg'
import moana05 from './assets/moana/moana05.jpg'

class HomeComponent extends Component{
    // 값이 변경되면 화면이 갱신되는 Compondnet 클래스의 아주 특별한 멤버변수 state
    state = {
        image: newyork,
        //이미지들을 가진 배열
        images:[moana01,moana02,moana03,moana04,moana05],
        imgIndex:0, // 현재 보여줄 이미지의 인덱스 번호
    }
    render(){
        return(
            <div>
                <h2>React Image</h2>

                {/* image 요소 보여주기 */}
                {/* 1)src 폴더 안에 이미지파일을 위치 */}
                {/* (경로1) html엣서처럼 파일 경로를 지정하면 안보여짐. */}
                <img src={newyork} alt="뉴욕 이미지" width={150}  />  
                {/* 클로징 태그 주의 , 150== 150픽셀*/}
                {/* (해결) scr폴더의 이미지를 .jsx파일에서 불러와서 보여줘야 함. import , 위로 올려라. */}

                {/* 2)src폴더 안에 이미지파일을 위치하면 파일이 너무많이 식별이 어려움. 그래서 src/assets폴더안에 이미지를 위치할 것을 권장 */}
                <img src={paris} alt="파리 이미지" width={150} />

                {/* 3) public 폴더는 index.html이 바라보는 본인 폴더위치임. */}
                {/* public 폴더에 이미지파일을 위치하고 사용해 보기 */}
                {/* run build 할때 public은 빼놓는다. */}
                <img src="./koala.jpg" alt="코알라 이미지" width={150} /> 

                {/* 4) 웹 이미지파일의 전체 url 경로(절대경로) */}
                <img src="https://cdn.pixabay.com/photo/2019/09/17/02/20/jeju-4482313_1280.jpg" alt="웹이미지" width={150} />
                {/* pixabay 사이트가서 받자 */}
                {/* 사이트 가서 새탭으로 열어서 넣어라. */}
                {/* https://cdn.pixabay.com/photo/2019/09/17/02/20/jeju-4482313_1280.jpg */}

                {/* 이미지 파일을 사용하는 방법은 경로에 따라 다름. 이중 권장은 src/assets폴더 */}
                {/* public 폴더 안에는 아이콘 이미지들을 보통 배치하여 사용 , 용량이 적은 것들  */}
                <hr />
                {/* 버튼 클릭하여 이미지 변경하기 - 화면갱신에 영향을 주는 state 변수 활용  --> 위로*/}
                {/* <img src={newyork} alt="" /> 이렇게 하면 바뀌지 않음. */}
                <img src={this.state.image} alt="뉴욕" width={200} />
                <button onClick={this.changeImage}>change image</button>
                <hr />
                {/* 이미지를 클릭하면 그림 변경하기 */}
                <img src={this.state.images[this.state.imgIndex]} alt="moana images" width={200} onClick={this.changeImage2} />

                
            </div> 

        )
    }// render method...

    // changeImage=()=>{
    //     this.setState({image:paris})
    // }

    changeImage=()=>this.setState({image:paris})
    changeImage2=()=>{
        // 번호가 계속 증가되면 안됨.
        let idx = this.state.imgIndex +1
        if(idx>=5){
            idx=0; // 계속 돌게함.
        }

        // this.setState({imgIndex:this.state.imgIndex+1})
        this.setState({imgIndex:idx})
    }



}//HomeComponent......................
export default HomeComponent

//main.jsx로 가자.

// npm create vite@latest ex01-image
// npm run dev    : 디렉토리 실행하기
// ctrl + c
// npm 
// exit : terminal 빠져나가기
// clear : terminal 명령어 지우기