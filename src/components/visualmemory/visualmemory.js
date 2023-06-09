import React, { useState, useEffect } from 'react'
import "./visualmemory.css"
import AppsIcon from '@mui/icons-material/Apps';
import { Tryagin, Savebutton } from "../Button/Button"

import SequenceMemoryTest from '../SequenceMemoryTest/SequenceMemoryTest'
import Cuebmaekr from "../Cubecomponent/Cubecomponent"
import { Mainwraper } from "../../components/inexpage/index"
import { StartOutlined } from '@mui/icons-material';
import Chart from "../Chart/Chart"
const Visualmemory = () => {
    const [Start, setStart] = useState(true)
    const [levelArry, setLevelArry] = useState([])
    const [ans, setAns] = useState([])
    const [newobj, setNewobj] = useState({})
    const [gamestart, setGAmestart] = useState(false)
    const [chnce, setchance] = useState(3)
    const [value, setValue] = useState()
    const [count, setCount] = useState(1)
    const [Stagecount, setStagecount] = useState(0)
    const [mainlevel, setmainlevel] = useState(3)
    const [leve, setLevel] = useState(3)
    const [gameover, setGameover] = useState(false)
    const [nocube, setnocube] = useState(leve * leve)
    const [newwidth, setnewwidth] = useState((310 / 3) - 2)
    const [ansarry,setansarry] = useState([])

    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const Nomaker = (x) => {
        const MianArry = [...Array(x).keys()]
        const NewArryobj = [];
        MianArry.map((x) => {
            const obj = {
                key: x,
                animate: false,
                bacg: false
            }
            newobj[`${x}`] = obj
            NewArryobj.push(obj)
        })
        for (let i = 0; i < leve; i++) {
            const Rendno = randomIntFromInterval(0, (x) - 1)
            if (NewArryobj[`${Rendno}`].animate) {
                i--
            } else {

                setAns(x => [...x, Rendno])

                NewArryobj[`${Rendno}`].animate = true
            }
            // if(mianarry.indexOf(Rendno) !== -1){
            //     i--
            // }else{
            //     mianarry.push(Rendno)
            //     console.log(Rendno)
            //     console.log( NewArryobj[Rendno])
            //     NewArryobj[Rendno].animate = true

            // }
        }
        setLevelArry(NewArryobj)

    }



    const Cubeclikck = (x) => {
console.log(ans)
        if (!gamestart) {
            setGAmestart(true)
        }
        if (ans.includes(x) && ansarry.includes(x) !== true ) {
            let obj = newobj[`${x}`]
            obj.bacg = true
            setNewobj(prevState => (
                {
                    ...newobj,
                    ...prevState[`${x}`].bacg = true
                }
            )
            )
            setCount(count + 1)
            ansarry.push(x)
            //   console.log(leve,count)
            if (count == leve) {
                setGAmestart(false)
                setTimeout(() => {
                    const MianArry = [...Array(nocube).keys()]
                    const NewArryobj = [];
                    MianArry.map((x) => {
                        const obj = {
                            key: x,
                            animate: false,
                            bacg: false
                        }
                        newobj[`${x}`] = obj
                        NewArryobj.push(obj)
                    })
                    setLevelArry(NewArryobj)
                }, 500)
                setTimeout(() => {
                    setCount(1)
                    console.log("Nirakar")
                    if (Stagecount < 2) {
                        setStagecount(Stagecount + 1)
                        setLevel(leve + 2)
                    } else {
                        setmainlevel(mainlevel + 1)
                    }
                }, 1000)
                setansarry([])
                setAns([])
            }
        } else if ( ansarry.includes(x)) {
            return
        } else {
            setGameover(true)
            setansarry([])
        }
    }

    useEffect((x) => {
        Nomaker(nocube)
    }, [leve])

    useEffect(() => {
        if (Stagecount) {
            setStagecount(0)
            setnewwidth((310 / mainlevel) - 2)
            setnocube(mainlevel * mainlevel)
        }


    }, [mainlevel])


    useEffect(() => {
        Nomaker(nocube)
    }, [nocube])



    const Sowcube = () => {
        return Object.keys(levelArry).map((x, y) => {
            const Item = levelArry[`${x}`]
            const classs = ` Cube ${!gamestart && Item.animate && "Animate"}`
            return (<div key={y} style={{ width: `${newwidth}px`, height: `${newwidth}px`, backgroundColor: Item.bacg == true ? "white" : value == Item.key ? "red" : "", opacity: Item.bacg == true ? "1" : value == Item.key ? "1" : "0.15" }} onClick={() => Cubeclikck(Item.key)} className={classs} >
                {Item.key}
            </div>)
        })
    }

    const Tryagain = () => {
        setStart(true)
        setGameover(false)
        setLevelArry([])
        setGAmestart(false)
        setAns([])
        setNewobj({})
        setchance(3)
        setValue()
        setCount(1)
        setStagecount(0)
        setmainlevel(3)
        setLevel(3)
        setnocube(3 * 3)
        setnewwidth((310 / 3) - 2)
        setansarry([])
    }

    useEffect(() => {
        if (!Start) {
            Nomaker(9)
        }
    }, [Start])
    const SavebuttonScore = () => {

    }


    return (
        <>

            {Start && !gameover &&
                <Mainwraper setStart={setStart} Img={<AppsIcon />} linktext={"Start"} Text={"Memorize the pattern"} Header={"Visual  Memory Test"} />
            }
            {!Start && !gameover &&
                <Cuebmaekr>
                    <div className='Mainboxofcube'>
                        {Sowcube()}
                    </div>

                </Cuebmaekr>}
            {gameover && <div
                style={{ backgroundColor: "rgb(43, 135, 209)" }}
                className='Mainbox' >
                <div className='Secondbox'>

                    <AppsIcon className='Icon' />
                    <div className='textbox'>
                        <span className='SecLevel'>
                            <span className='TEXt'>Level </span>
                            <span style={{ fontSize: "27px" }} >{leve}</span>
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
            <div>
                <div className='Abouttest'>
                    <Chart labels={['0ml', '50ml', '100ml', '150ml', '200ml', '250ml', '300ml', "350ml"]} data={[10, 20, 30, 40, 50, 40, 20, 10]} />

                    <h1 style={{ textAlign: "start" }}>About the test</h1>
                    <p style={{ textAlign: "start" }}>Every level, a number of tiles will flash white. Memorize them, and pick them again after the tiles are reset!</p>
                    <p style={{ textAlign: "start" }}>Levels get progressively more difficult, to challenge your skills.</p>
                    <p style={{ textAlign: "start" }}>If you miss 3 tiles on a level, you lose one life.</p>
                    <p style={{ textAlign: "start" }}>You have three lives.</p>
                    <p style={{ textAlign: "start" }}>Make it as far as you can!</p>
                </div>
            </div>
        </>
    )
}

export default Visualmemory