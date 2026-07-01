import {BrowserRouter,Routes,Route} from 'react-router-dom' 
import Home from './page/Home'
import Second from './page/Second'
import Third from './page/Third'
import Intro from './page/Intro'
import Login from './page/Login'
// react-router-dom 설치


function MyRouter(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/second' element={<Second></Second>}></Route>
                <Route path='/third/:num' element={<Third></Third>}></Route>

                <Route path='/intro' element={<Intro></Intro>}></Route>
                <Route path='/login' element={<Login></Login>}></Route>
                <Route path='/signup'></Route>

            </Routes>        
        </BrowserRouter>     

    )

}
export default MyRouter