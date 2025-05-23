import React, { useState, useEffect } from 'react'
import { Mainwraper } from "../inexpage/index"
import AppsIcon from '@mui/icons-material/Apps';
import "./SequenceMemoryTest.css"
import { Tryagin, Savebutton } from "../Button/Button"
import { SeauenceScore } from "../../redux/actions/gamescore"
import { useDispatch } from 'react-redux';
import { Savedata } from "../../Firebse/firebse"
import Alertmessge from "../Diloaugbox/Dialoubox"
import GridOnIcon from '@mui/icons-material/GridOn';
import clickSound from "../aseest/click.wav";
import { Thirdscreen } from "../firstscreen/firstScrenn"

const clickAudio = new Audio(clickSound);

const SequenceMemoryTest = () => {

    const [shwonaimation, setShowanimaton] = useState(false)
    const [start, setStart] = useState(true)
    const [Count, setCount] = useState()
    const [Level, setlevel] = useState(1)
    const [countarry, setCountArry] = useState([])
    const [flashcount, Setflashcount] = useState()
    const [check, setCheck] = useState([])
    const [doublecheck, setDoubleCheck] = useState([])
    const [leve, setLevel] = useState(3)
    const [levelcount, setlevelcount] = useState(0)
    const [mainlevel, setmainlevel] = useState(6)
    const [mylevel, setmylevel] = useState(3)
    const [open, setOpen] = useState(false)
    const [nocube, setnocube] = useState(mylevel * mylevel)
    const [newwidth, setnewwidth] = useState((310 / 3) - 2)
    const [showanswer, setshowanswer] = useState(false)
    const [Scueess, setScueess] = useState(true)
    const Noarry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    const dispatch = useDispatch()

    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }


    useEffect(() => {

        !start && setTimeout(() => {
            setmocup()

        }, 1000);

    }, [start])

    // if (gameover) {

    //     setCountArry([])
    //     Setflashcount("")
    //     setCheck([])
    //     setgameove(false)
    // }

    const setmocup = () => {

        const Firstcount = randomIntFromInterval(1, nocube - 1)
        if (Firstcount == countarry[countarry.length - 1]) {
            setmocup()
        } else {
            countarry.push(Firstcount)
        }


        setCount(0)
    }


    useEffect(() => {


        if (countarry.length > Count && !start) {
            const No = countarry[Count]

            Setflashcount(No)
            setTimeout(() => {
                Setflashcount()
                setCount(Count + 1)
            }, 1000)


        }
    }, [Count])

    const Sowcube = () => {
        const MianArry = [...Array(nocube).keys()]

        return MianArry.map((x) => {

            return (<div key={x} style={{ width: `${newwidth}px`, height: `${newwidth}px`, backgroundColor: x === flashcount ? "white" : null, opacity: x === flashcount ? 1 : 0.15 }} onClick={() => Cubeclick(x)} className='Cube'>

            </div>)

        })
    }


    // 0.5s linear 0s 1 normal none running animation-1sioss



    const Cubeclick = (x) => {
        check.push(x)
        clickAudio.play(); // Play the click sound

        setShowanimaton(false)
        if (countarry.indexOf(x) === check.indexOf(x)) {
            Setflashcount(x)
            setTimeout(() => {
                Setflashcount("")
            }, 500);

            doublecheck.push(x)

        } else {
            setshowanswer(true)
            SavebuttonScore()
        }
        if (doublecheck.length === countarry.length) {
            setShowanimaton(true)
            setTimeout(() => {
                setCheck([])
                setDoubleCheck([])
                setmocup()
                setlevel(Level + 1)
                setlevelcount(levelcount + 1)
            }, 800)


            if (levelcount == mainlevel) {

                setTimeout(() => {
                    Tiemlapse()
                }, 500)



            }


        }




    }

    const Tryagain = () => {

        setShowanimaton(false)
        setStart(true)
        setLevel(1)
        setCountArry([])
        Setflashcount()
        setCheck([])
        setDoubleCheck([])
        setLevel(3)
        setlevelcount(0)
        setmainlevel(4)
        setmylevel(3)
        setnocube(9)
        setlevel(1)
        setnewwidth((310 / 3) - 2)
        setshowanswer(false)
    }

    const SavebuttonScore = () => {
        const userid = JSON.parse(localStorage.getItem("user"))
        if (userid) {
            Savedata(userid.uid, "sequencememory", (Level - 1)).then((x) => {
                if (x === "Document successfully updated!") {
                    dispatch(SeauenceScore(Level - 1))
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
        Tryaginbutton()
    }, [open])

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const Tiemlapse = () => {

        return (setlevelcount(1),
            setmylevel(mylevel + 1),
            setnewwidth((310 / (mylevel + 1)) - 2),
            setnocube((mylevel + 1) * (mylevel + 1)))
    }
    const classnaem = `Cubenames   `

    const Tryaginbutton = () => {
        return (
            <Tryagin disable={open} Tryagin={Tryagain} />

        )
    }
    return (
        <>
            <div className="Nodisplay anim-slide-fade-in">
                {start && !showanswer &&
                    <Mainwraper setStart={setStart} Img={<GridOnIcon />} linktext={"Start"} Text={"Memorize the pattern"} Header={"Sequence Memory Test"} />
                }
                {showanswer && <div
                    style={{ backgroundColor: "rgb(43, 135, 209)" }}
                    className='Mainbox' >
                    <div className='Secondbox'>
                        <Alertmessge message={Scueess ? "Your score hase been saved" : "Need to login for Saving Score "} level={Level - 1} handleClose={handleClose} open={open} />

                        <AppsIcon className='Icon' />
                        <div className='textbox'>
                            <span className='SecLevel'>
                                <span className='TEXt'>Level </span>
                                <span style={{ fontSize: "27px" }} >{Level}</span>
                            </span>
                            <div className='textfirst'>
                                Sequence Memory
                            </div>

                        </div>

                        <div className='textbox '>



                            <div className='
                        Flex'>

                                {Tryaginbutton()}
                            </div>

                        </div>
                    </div>

                </div>
                }

                {!start && !showanswer &&
                    <div className="SeqMain">
                        <div className="SeqSec">
                            <span className='SecLevel'>
                                <span className='TEXt'>Level </span>
                                <span >{Level}</span>
                            </span>
                            <div className={classnaem}>
                                <div style={{ marginBottom: "37px" }} className={`Cubesec ${shwonaimation && "animate"}`} >

                                    {
                                        Sowcube()

                                    }
                                </div>
                            </div>
                        </div>
                    </div>}

            </div>
            <div style={{ marginTop: "30px" }}>
                <Thirdscreen />
            </div>
            {/* <div className='Abouttest'>
                <h1 style={{ textAlign: "start" }}>About the test</h1>
                <p style={{ textAlign: "start" }}>Memorize the sequence of buttons that light up, then press them in order.</p>
                <p style={{ textAlign: "start" }}>Every time you finish the pattern, it gets longer.</p>
                <p style={{ textAlign: "start" }}>Make a mistake, and the test is over.</p>
            </div> */}
        </>

    )
}

export default SequenceMemoryTest;