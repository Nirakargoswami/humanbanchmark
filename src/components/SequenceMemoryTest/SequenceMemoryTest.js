import React, { useState, useEffect } from 'react'
import { Mainwraper } from "../inexpage/index"
import AppsIcon from '@mui/icons-material/Apps';
import "./SequenceMemoryTest.css"

const SequenceMemoryTest = () => {
    const [start, setStart] = useState(true)
    const [Count, setCount] = useState()
    const [Level,setlevel] = useState(1)
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

        const Firstcount = randomIntFromInterval(1, 9)
        countarry.push(Firstcount)
        console.log(countarry)
        setCount(0)
    }
    

    useEffect(() => {
        console.log(Count)
        console.log(typeof( Count))
        console.log(countarry.length > Count && !start)
       if (countarry.length > Count && !start) {
            console.log(countarry)
            const No = countarry[Count]

            console.log(No)
            Setflashcount(No)
            console.log(typeof( Count),)
           setTimeout(() => {
            Setflashcount()
            console.log(Count)
         setCount(Count + 1)
           },1000)
          

        }
}, [Count])
console.log(Count)

    const Sowcube = () =>
        Noarry.map((x) => {

            return (<div key={x} style={{ backgroundColor: x === flashcount ? "white" : null }} onClick={() => Cubeclick(x)} className='Cube'>
                {x}
            </div>)

        })



    const Cubeclick = (x) => {

        check.push(x)


        console.log(countarry.indexOf(x) === check.indexOf(x))
        if (countarry.indexOf(x) === check.indexOf(x)) {
            doublecheck.push(x)

        } else {

        }
        if (doublecheck.length === countarry.length) {
            setCheck([])
            setDoubleCheck([])
            setmocup()
            setlevel(Level + 1)
           
        }


    }


    return (
        <div>
            {start &&
                <Mainwraper setStart={setStart} Img={<AppsIcon />} linktext={"Start"} Text={"Memorize the pattern"} Header={"Sequence Memory Test"} />
            }

            {!start &&
                <div className='SeqMain'>
                    <div className='SeqSec'>
                        <span className='SecLevel'>
                            <span className='TEXt'>Level </span>
                            <span >{Level}</span>
                        </span>
                        <div className='Cubename'>
                            <div className='Cubesec'>

                                {
                                    <Sowcube />

                                }
                            </div>
                        </div>
                    </div>
                </div>}
        </div>

    )
}

export default SequenceMemoryTest;