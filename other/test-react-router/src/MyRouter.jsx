import {BrowserRouter,Routes,Route} from 'react-router-dom' 
import Home from './page/Home'
import Second from './page/Second'
import Third from './page/Third'
// react-router-dom 설치


function MyRouter(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/second' element={<Second></Second>}></Route>
                <Route path='/third/:num' element={<Third></Third>}></Route>
            </Routes>        
        </BrowserRouter>     

    )

}
export default MyRouter