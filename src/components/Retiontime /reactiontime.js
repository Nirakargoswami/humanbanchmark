
import { red } from '@mui/material/colors'
import React, { useState, useRef, useEffect } from 'react'
import style from "./reactiontime.css"
import AppsIcon from '@mui/icons-material/Apps';
import { Tryagin, Savebutton } from "../Button/Button"
const Reactiontime = () => {
    const [start, setStart] = useState(true)
    const [green, setGreen] = useState(false)
    const [greentime, setGreentime] = useState()
    const [red, setRed] = useState(false)
    const [clickfast, setCliltofst] = useState(false)
    const [timerid, settimeid] = useState()
    const [shwosocre,setShowscore] = useState(false)
    const screen = useRef(null)

    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const Clik = () => {





        if (start && !green) {
            const rndInt = randomIntFromInterval(3, 5)
            console.log(rndInt)

            if (rndInt) {

                setRed(true)
                screen.current.style.backgroundColor = "red"
                setStart(false)
                var timeid = setTimeout(() => {
                    setGreen(true)
                    const Dates = new Date()

                    setGreentime(Dates)
                    screen.current.style.backgroundColor = "green"
                }, 1000 * rndInt);
                settimeid(timeid)
                console.log(timeid)

            }

            console.log(screen.current.style)



        } else {
            console.log(timerid)
            clearTimeout(timerid)
            setCliltofst(true)
            setStart(true)
            screen.current.style.backgroundColor = "rgb(43, 135, 209)"
        }

        if (green) {
            setGreen(false)
            screen.current.style.backgroundColor = "rgb(43, 135, 209)"
            setStart(true)

            const secdate = new Date()
            const time = secdate.getTime()
            console.log(time, greentime.getTime())
            console.log(time - greentime.getTime())
            setShowscore(true)
        }



    }

    console.log(clickfast)

    return (
        <div ref={screen} onClick={() => Clik()} className='display'>

            {shwosocre && <div className='Mainbox'>
                <div className='Secondbox'>

                    <AppsIcon className='Icon' />
                    <div className='textbox'>
                        <div className='textfirst'>
                            Reaction Time
                        </div>
                        <h1 className='Scorenaem' >
                            548ms
                        </h1>
                    </div>

                    <div className='textbox '>
                        <p className='Discription'>
                            Save your score to see how you compare.

                        </p>
                        <div className='
                        Flex'>
                         <Savebutton/><Tryagin/>
                        </div>
                        
                    </div>
                </div>
                
            </div>
                
            }
            





        </div>
    )
}

export default Reactiontime