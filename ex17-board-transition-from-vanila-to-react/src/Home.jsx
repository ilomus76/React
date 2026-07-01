import InfoBoard from './component/InfoBoard'
import SearchInput from './component/SearchInput'
import Board from './component/Board'
import PopularBoard from './component/PopularBoard'
import './Home.css'
import Category from './component/Category'




function Home(){


  


    return(
        <div className="main_container">
            {/* <p>main_container</p> */}
            <div className="left_section">
                <p>left_section</p>
                
            </div>
            <div className="right_section">
                {/* <p>right_section</p> */}                
                <div className="top_header">
                    {/* <p>top_header</p> */}
                    <SearchInput></SearchInput>

                </div>
                <div className="middle_info">
                    {/* <p>middle_info</p> */}
                    {/* <InfoBoard></InfoBoard> */}
                    {/* // <InfoBoard></InfoBoard> */}
                    {/* // <InfoBoard></InfoBoard> */}
                    {/* // <InfoBoard></InfoBoard> */}
                    {/* //  */}
                    {/* //  {icons.map((Icon, i) => ( */}
                    {/* //     <InfoBoard  key={i} icon={<Icon />} /> */}
                    {/* // ))} */}

                </div>
                <div className="main_info">
                    {/* <p>main_info</p> */}
                    <div className="board_view">
                        {/* <p>board_view</p> */}
                        <Board></Board>

                    </div>
                    <div className='short_info'>
                        <div className="popular_board">
                        {/* <p>popular_board</p> */}
                        <PopularBoard></PopularBoard>

                        </div>
                        <div className="catergory">
                        {/* <p>catergory</p> */}
                        <Category></Category>

                    </div>

                    </div>
                    

                </div>


            </div>
            

        </div>
        
    )

}
export default Home