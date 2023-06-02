import React, { useState, useEffect } from 'react'
import { Mainwraper } from "../inexpage/index"
import AppsIcon from '@mui/icons-material/Apps';
import "./SequenceMemoryTest.css"
import { Tryagin, Savebutton } from "../Button/Button"
import { SeauenceScore } from "../../redux/actions/gamescore"
import { useDispatch } from 'react-redux';
import GridOnIcon from '@mui/icons-material/GridOn';
import Chart from "../Chart/Chart"
import { Secondscreen } from "../../components/firstscreen/firstScrenn"
const SequenceMemoryTest = (props) => {
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
    const [nocube, setnocube] = useState(mylevel * mylevel)
    const [newwidth, setnewwidth] = useState((310 / 3) - 2)
    const [showanswer, setshowanswer] = useState(false)
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
        console.log("added")

        const Firstcount = randomIntFromInterval(1, nocube - 1)
        console.log(countarry)
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
            console.log(countarry)

            return (<div key={x} style={{ width: `${newwidth}px`, height: `${newwidth}px`, backgroundColor: x === flashcount ? "white" : null, opacity: x === flashcount ? 1 : 0.15 }} onClick={() => Cubeclick(x)} className='Cube'>
                {x}
            </div>)

        })
    }


    // 0.5s linear 0s 1 normal none running animation-1sioss



    const Cubeclick = (x) => {
        check.push(x)

        setShowanimaton(false)
        if (countarry.indexOf(x) === check.indexOf(x)) {
            Setflashcount(x)
            setTimeout(() => {
                Setflashcount("")
            }, 500);

            doublecheck.push(x)

        } else {
            setshowanswer(true)
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
        dispatch(SeauenceScore(Level))
    }

    const Tiemlapse = () => {

        return (setlevelcount(1),
            setmylevel(mylevel + 1),
            console.log(mylevel),
            setnewwidth((310 / (mylevel + 1)) - 2),
            setnocube((mylevel + 1) * (mylevel + 1)))
    }
    const classnaem = `Cubenames   ${shwonaimation && "animate"}`

    return (
        <div>
            {start && !showanswer &&
                <Mainwraper setStart={setStart} Img={<GridOnIcon />} linktext={"Start"} Text={"Memorize the pattern"} Header={"Sequence Memory Test"} />
            }
            {showanswer && <div
                style={{ backgroundColor: "rgb(43, 135, 209)" }}
                className='Mainbox' >
                <div className='Secondbox'>

                    <AppsIcon className='Icon' />
                    <div className='textbox'>
                        <span className='SecLevel'>
                            <span className='TEXt'>Level </span>
                            <span style={{ fontSize: "27px" }} >{Level}</span>
                        </span>
                        <div className='textfirst'>
                            Reaction Time
                        </div>

                    </div>

                    <div className='textbox '>

                        <p className='Discription'>
                            Save your score to see how you compare.

                        </p>

                        <div className='
                        Flex'>

                            <Tryagin Tryagin={Tryagain} />
                            <Savebutton Score={SavebuttonScore} />

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
                            <div className='Cubesec'>

                                {
                                    Sowcube()

                                }
                            </div>
                        </div>
                    </div>
                </div>}
            <div  className='Abouttest'>
            <Chart labels={['0ml', '50ml', '100ml', '150ml', '200ml', '250ml','300ml',"350ml"]} data={[10, 20, 30,40,50,40,20,10]}  />

                <h1 style={{ textAlign: "start" }}>About the test</h1>
                <p style={{ textAlign: "start" }}>Memorize the sequence of buttons that light up, then press them in order.</p>
                <p style={{ textAlign: "start" }}>Every time you finish the pattern, it gets longer.</p>
                <p style={{ textAlign: "start" }}>Make a mistake, and the test is over.</p>
            </div>
        </div>

    )
}

export default SequenceMemoryTest;