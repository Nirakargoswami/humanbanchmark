
import { red } from '@mui/material/colors'
import React, { useState, useRef, useEffect } from 'react'
import style from "./reactiontime.css"
import AppsIcon from '@mui/icons-material/Apps';
import { Tryagin, Savebutton } from "../Button/Button"
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import AcUnitIcon from '@mui/icons-material/AcUnit';

const Reactiontime = () => {
    const [start, setStart] = useState(true)
    const [green, setGreen] = useState(false)
    const [greentime, setGreentime] = useState()
    const [red, setRed] = useState(false)
    const [clickfast, setCliltofst] = useState(false)
    const [timerid, settimeid] = useState()
    const [shwosocre, setShowscore] = useState(false)
    const [level, setLvel] = useState(0)
    const [time, setEverytrietime] = useState()
    const [combinetime, setCombinetime] = useState(0)
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




        } else if (!green) {
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


            setCombinetime(combinetime + Miantime)
            setEverytrietime(Miantime)

        }
    }


    useEffect(() => {
        if (start && level > 2) {
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
    }, [level])


    console.log(shwosocre, level, combinetime)

    return (
        <div ref={screen} onClick={() => Clik()} className='display'>
            {
                green &&
                <div style={{ display: "flex", flexDirection: "column", marginTop: "20px" }}>
                    <h1 className='Time'>
                        Click as fast as you can
                    </h1>

                    <h2>CLick too contiue </h2>
                </div>
            }
            {
                clickfast &&
                <div style={{ display: "flex", flexDirection: "column", marginTop: "20px" }}>
                    <h1 className='Time'>
                        Click Too soon
                    </h1>

                    <h3>Click too keep going </h3>
                </div>
            }
            {
                start && !clickfast && !time &&
                <div style={{ display: "flex", flexDirection: "column", marginTop: "20px", padding: "10px" }}>
                    <div className="Logo">
                        <AcUnitIcon style={{ fontSize: "60px" }} />
                    </div>
                    <div style={{ opacity: 1, transition: "all 1s linear 0s", }} ><h1 style={{ fontSize: "6vh" }}>Reaction Time Test</h1></div>
                    <h2 style={{ fontSize: "4vh" }}>When the red box turns green, click as quickly as you can.</h2>
                    <h2 style={{ fontSize: "4vh" }} >
                        Click Any where To start

                    </h2>

                </div>
            }

            {red &&

                <div style={{ display: "flex", flexDirection: "column", marginTop: "20px" }}>
                    <h1 className='Time'>
                        Wait for green
                    </h1>


                </div>
            }

            {time && <div style={{ marginTop: "20px" }}>
                <AccessAlarmsIcon className='Icon' />
                <h1 className='Time' >
                    {time}

                </h1>

                <h2>Click too keep going  </h2>
            </div>
            }

            {shwosocre && <div className='Mainbox' >
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
                            <Savebutton />
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