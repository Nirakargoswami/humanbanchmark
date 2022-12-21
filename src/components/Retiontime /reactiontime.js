
import { red } from '@mui/material/colors'
import React, { useState, useRef, useEffect } from 'react'
import style from "./reactiontime.css"
import AppsIcon from '@mui/icons-material/Apps';
import { Tryagin, Savebutton } from "../Button/Button"
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';

const Reactiontime = () => {
    const [start, setStart] = useState(true)
    const [green, setGreen] = useState(false)
    const [greentime, setGreentime] = useState()
    const [red, setRed] = useState(false)
    const [clickfast, setCliltofst] = useState(false)
    const [timerid, settimeid] = useState()
    const [shwosocre,setShowscore] = useState(false)
    const [level,setLvel] = useState(0)
    const [time,setEverytrietime] = useState()
    const[combinetime,setCombinetime] = useState(0)
    const screen = useRef(null)
    
    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

const Tryagins = () => {
    setCliltofst(false)
    setShowscore(false)
    setStart(true)
    
}


    const Clik = () => {
        if (start && !green) {
            const rndInt = randomIntFromInterval(3, 5)
            setCliltofst(false)

            if (rndInt) {

                setRed(true)
                setEverytrietime()
                screen.current.style.backgroundColor = "red"

                setStart(false)
                var timeid = setTimeout(() => {
                    setGreen(true)
                    setRed(false)
                    const Dates = new Date()

                    setGreentime(Dates)
                    screen.current.style.backgroundColor = "green"
                    
                }, 1000 * rndInt);
                settimeid(timeid)

            }




        } else if(!green){
            setGreen(false)
            clearTimeout(timerid)
            setCliltofst(true)
            setStart(true)
            setRed(false)
            screen.current.style.backgroundColor = "rgb(43, 135, 209)"
        }
        if (green) {
            setGreen(false)
            screen.current.style.backgroundColor = "rgb(43, 135, 209)"
            setStart(true)
             setLvel(level + 1)
            const secdate = new Date()
            const time = secdate.getTime()
            const Miantime = time - greentime.getTime()
    
           
            setCombinetime(combinetime + Miantime )
            setEverytrietime(Miantime)
          
        }
    }


useEffect(() => {
 if(start && level > 2 ){
    setShowscore(true)
    setStart(false)
    setGreen(false)
    setGreentime()
    setRed(false)
    setCliltofst(false)
    settimeid()
    setLvel(0)
    setEverytrietime()
   
    }
},[level])


    console.log(shwosocre,level,combinetime)

    return (
        <div ref={screen} onClick={() => Clik()} className='display'>
{
     green && 
     <div style={{display:"flex",flexDirection:"column"}}>
     <h1 className='Time'>
       Click as fast as you can 
     </h1>

      <h2>CLick to contiue </h2>
    </div>
}    
{
     clickfast && 
     <div style={{display:"flex",flexDirection:"column"}}>
     <h1 className='Time'>
       Click To soon
     </h1>

      <h2>CLick to contiue </h2>
    </div>
}   
{
    start && !clickfast &&  <div style={{display:"flex",flexDirection:"column"}}>
    <h1 className='Time'>
      Click Any where to start

    </h1>

   </div>
}

{red && 
   
    <div style={{display:"flex",flexDirection:"column"}}>
    <h1 className='Time'>
      Wait for green
    </h1>

    
   </div>
}

         { time &&  <div>
            <h1 className='Time'>
                {time}
             <AccessAlarmsIcon className='Icon' />
            </h1>

             <h2>CLick to contiue </h2>
           </div>
           }

            {shwosocre && <div className='Mainbox'>
                <div className='Secondbox'>

                    <AppsIcon className='Icon' />
                    <div className='textbox'>
                        <div className='textfirst'>
                            Reaction Time
                        </div>
                        <h1 className='Scorenaem' >
                            {combinetime}
                        </h1>
                    </div>

                    <div className='textbox '>
                        <p className='Discription'>
                            Save your score to see how you compare.

                        </p>
                        <div className='
                        Flex'>
                         <Savebutton/>
                         <Tryagin Tryagin={Tryagins} />
                        </div>
                        
                    </div>
                </div>
                
            </div>
                
            }
            





        </div>
    )
}

export default Reactiontime