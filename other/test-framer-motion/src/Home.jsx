import {motion, useAnimationControls} from 'framer-motion'

import ms19 from './assets/ms19.png'
import './BottomSheet.css'

function Home(){
    //render()

    const controls =useAnimationControls() 
    return (
        <div>
            <h2>framer motion 라이브러 - 다운로드 받아야함 npm install framer-motion</h2>
            <motion.div
                initial={{x:10,y:5}} 
                animate={{x:100,y:50}}
                transition={{duration:3,repeat:Infinity}}            
            
            >나는 움직이는 div입니다.</motion.div>

            <hr/>

            <button onClick={()=>{controls.start('right')}} >right</button>
            <button onClick={()=>{controls.start('up')}}>up</button>
            <button onClick={()=>{controls.start('down')}}>down</button>
            <motion.div
                style={{padding:8,boxShadow:'3px 3px 10px gray', width:150}}
                variants={{
                    right:{x:100},
                    up:{y:-50},
                    down:{y:50}
                    }}
                animate={controls}
            > 나는 DIV 입니다.</motion.div>  

            <motion.img
            
            src={ms19}
            style={{height:100, border:'solid', margin:'16px auto', display:'block'}}
            drag='x'
            dragConstraints={{left:-100,right:100}}
            dragElastic={0.3} 
            onClick={()=>controls.start('open')}          
            ></motion.img>     

            <hr />

            <button onClick={()=>controls.start('open')}>open bottom sheet</button>
            <button onClick={()=>controls.start('close')}>close bottom sheet</button>

            <motion.div
                className='Bottomsheet'
                variants={{
                    close: {y:"50%"},
                    open:{y:0}
                }}
                animate={controls}
                initial = 'close'
                drag='y'
                dragConstraints={{top:0}}
            
            >
                <div className='title'>

                </div>
                <div className='content'>
                    <p>요즘 많이 보이는 버텀 시트 요소입니다.</p>
                    <img src={ms19} style={{width:'200px'}} />

                </div>

            </motion.div>

            

        </div>
    )
}

export default Home