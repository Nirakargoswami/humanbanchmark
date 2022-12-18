import React, { useState, useEffect } from 'react'
import { Mainwraper } from "../inexpage/index"
import AppsIcon from '@mui/icons-material/Apps';
import "./SequenceMemoryTest.css"

const SequenceMemoryTest = (props) => {
    const [shwonaimation, setShowanimaton] = useState(false)
    const [start, setStart] = useState(false)
    const [Count, setCount] = useState()
    const [Level, setlevel] = useState(1)
    const [countarry, setCountArry] = useState([])
    const [flashcount, Setflashcount] = useState()
    const [check, setCheck] = useState([])
    const [gameover, setgameove] = useState(false)
    const [doublecheck, setDoubleCheck] = useState([])
    const Noarry = [1, 2, 3, 4, 5, 6, 7, 8, 9]

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

        const Firstcount = randomIntFromInterval(1, 9)
        countarry.push(Firstcount)

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

    const Sowcube = () =>
        Noarry.map((x) => {

            return (<div key={x} style={{ backgroundColor: x === flashcount ? "white" : null, opacity: x === flashcount ? 1 : 0.15 }} onClick={() => Cubeclick(x)} className='Cube'>
                {x}
            </div>)

        })

    // 0.5s linear 0s 1 normal none running animation-1sioss



    const Cubeclick = (x) => {
        check.push(x)

        setShowanimaton(false)
        if (countarry.indexOf(x) === check.indexOf(x)) {
            Setflashcount(x)
            setTimeout(() => {
                Setflashcount("")
            }, 800);

            doublecheck.push(x)

        } else {

        }
        if (doublecheck.length === countarry.length) {
            setShowanimaton(true)
            setTimeout(() => {
                setCheck([])
                setDoubleCheck([])
                setmocup()
                setlevel(Level + 1)
            }, 800)




        }


    }
    const classnaem = `Cubename ${shwonaimation && "animate"}`

    return (
        <div>
            {start &&
                <Mainwraper setStart={setStart} Img={<AppsIcon />} linktext={"Start"} Text={"Memorize the pattern"} Header={"Sequence Memory Test"} />
            }

            {!start &&
                <div className="SeqMain">
                    <div className={"SeqSec"}>
                        <span className='SecLevel'>
                            <span className='TEXt'>Level </span>
                            <span >{Level}</span>
                        </span>
                        <div className={classnaem}>
                            <div className='Cubesec'>

                                {
                                   props.children 

                                }
                            </div>
                        </div>
                    </div>
                </div>}
        </div>

    )
}

export default SequenceMemoryTest;