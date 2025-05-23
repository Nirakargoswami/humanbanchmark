
import React, { useState, useRef, useEffect } from 'react'
import style from "./reactiontime.css"
import Alertmessge from "../Diloaugbox/Dialoubox"

import AppsIcon from '@mui/icons-material/Apps';
import { Tryagin, Savebutton } from "../Button/Button"
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import { useDispatch } from 'react-redux';
import { Reactiontimescore } from "../../redux/actions/gamescore"
import { Link } from "react-router-dom"
import { Savedata } from "../../Firebse/firebse"
import { Thirdscreen } from "../firstscreen/firstScrenn"

import AccessTimeIcon from '@mui/icons-material/AccessTime';
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
    const [Scueess, setScueess] = useState(true)

    const [open, setOpen] = useState(false)

    const dispatch = useDispatch()

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

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const SavebuttonScore = () => {
        const userid = JSON.parse(localStorage.getItem("user"))
        if (userid) {
            Savedata(userid.uid, "reactiontime", (combinetime)).then((x) => {
                if (x === "Document successfully updated!") {
                    dispatch(Reactiontimescore(combinetime))

                    handleClickOpen()

                }
            })
        }
        if (!userid) {
            setScueess(false)
            handleClickOpen()
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
            SavebuttonScore()
        }
    }, [level])



    return (
        <>
            <div className="Nodisplay anim-slide-fade-in">


                {!shwosocre &&
                    <div ref={screen} style={{ height: "500px", display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "rgb(43, 135, 209)" }} onClick={() => Clik()} className=' anim-slide-fade-in'>
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
                            clickfast && !shwosocre &&
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
                                    <AccessTimeIcon style={{ fontSize: "60px" }} />
                                </div>
                                <div style={{ opacity: 1, transition: "all 1s linear 0s", }} ><h1 style={{ fontSize: "6vh" }}>Reaction Time Test</h1></div>
                                <h2 style={{ fontSize: "4vh" }}>When the red box turns green, click as quickly as you can.</h2>
                                <h2 style={{ fontSize: "4vh" }} >
                                    Click Any where To start

                                </h2>

                            </div>
                        }

                        {red &&

                            <div style={{ display: "flex", width: "100%", flexDirection: "column", margin: "26px" }}>
                                <h1 style={{ width: "100%" }} className='Time'>
                                    Wait for green
                                </h1>


                            </div>
                        }

                        {time && <div style={{ marginTop: "20px" }}>
                            <AccessAlarmsIcon className='Icon' />
                            <h1 className='Time' >
                                {time} mls

                            </h1>

                            <h2>Click too keep going  </h2>
                        </div>
                        }
                    </div>
                }
                <div>


                    {shwosocre && <div className='Mainbox display' >
                        <div className='Secondbox'>
                            <Alertmessge message={Scueess ? "Your score hase been saved" : "Need to login for Saving Score "} level={combinetime + "mls"} handleClose={handleClose} open={open} />

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
                                    {/* <Savebutton Score={SavebuttonScore} /> */}
                                    <Tryagin Tryagin={Tryagins} />
                                </div>

                            </div>
                        </div>

                    </div>

                    }
                    <div>
                        {/* <div>
                        <LineChart width={400} height={300} data={data}>
                            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                            <CartesianGrid stroke="#ccc" />
                            <XAxis dataKey="name" />
                            <YAxis />
                        </LineChart>
                    </div> */}
                    </div>

                </div>
            </div>

            {/* <div className='Abouttest'>
                <h2>About the test</h2>
                <p style={{ textAlign: "start" }}>
                    This is a simple tool to measure your reaction time.
                </p>
                <p style={{ textAlign: "start" }}>
                    The average (median) reaction time is 273 milliseconds, according to
                    <Link to={"/dashboard"} title="Reaction Time Statistics">the data</Link> collected so far.
                </p>
                <p style={{ textAlign: "start" }}>
                    In addition to measuring your reaction time, this test is affected by the latency of your computer and monitor.
                    Using a fast computer and low latency / high framerate monitor will improve your score.
                </p>
                <p style={{ textAlign: "start" }}>
                    Scores in this test are faster than the aim trainer test, because you can react instantly without moving the cursor.
                </p>
                <p style={{ textAlign: "start" }}>
                    This is discussed in further detail on the
                    <Link to={"/dashboard"} title="Reaction Time Statistics">statistics</Link> page.
                    While an average human reaction time may fall between 200-250ms, your computer could be adding 10-50ms on top.
                    Some modern TVs add as much as 150ms!
                </p>
                <p style={{ textAlign: "start" }}>
                    Other tools: <b><a target="_blank" href="https://whatsmygpu.com/">What's My GPU?</a></b>
                </p>
                <p style={{ textAlign: "start" }}>
                    If you want, you can keep track of your scores and see your full history of reaction times.
                    Just perform at least 5 clicks and then save.
                </p>
            </div> */}

            <div style={{marginTop:"30px"}}>
                <Thirdscreen/>
            </div>

        </>

    )
}

export default Reactiontime