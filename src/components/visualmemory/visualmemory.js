import React, { useState, useEffect } from 'react'
import "./visualmemory.css"
import AppsIcon from '@mui/icons-material/Apps';

import SequenceMemoryTest from '../SequenceMemoryTest/SequenceMemoryTest'
import Cuebmaekr from "../Cubecomponent/Cubecomponent"
import { Mainwraper } from "../../components/inexpage/index"
import { StartOutlined } from '@mui/icons-material';
const Visualmemory = () => {
    const [flashcount, setFlashcount] = useState()
    const [mianarry, setMainarry] = useState([])
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
    
    const [nocube, setnocube] = useState(leve * leve)
    const [newwidth, setnewwidth] = useState((310 / 3) - 2)

    const Noarry = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    console.log(nocube)

    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const Nomaker = (x) => {
        console.log(x)
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

        const ansarry = []

        if (!gamestart) {
            setGAmestart(true)
        }
        if (ans.includes(x)) {

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
                        console.log(Stagecount)
                        setStagecount(Stagecount + 1)
                        setLevel(leve + 2)

                    } else {
                        console.log("Nirakar")
                        setmainlevel(mainlevel + 1)


                    }

                }, 1000)
            }
        } else {

            setValue(x)
            setTimeout(() => {
                setValue()
                setFlashcount()
                setMainarry([])
                setLevelArry()
                setAns([])
                setCount(0)
                setGAmestart(false)
                setchance(chnce - 1)
                Nomaker(nocube)
            }, 500)

        }



    }

    useEffect((x) => {
        Nomaker(nocube)
    }, [leve])

    useEffect(() => {
        if (Stagecount) {
            console.log(mainlevel)
            setStagecount(0)
            setnewwidth((310 / mainlevel) - 2)
            setnocube(mainlevel * mainlevel)
        }


    }, [mainlevel])


    useEffect(() => {
        Nomaker(nocube)
    }, [nocube])



    const Sowcube = () => {
        console.log('mmm')


        return Object.keys(levelArry).map((x, y) => {
            const Item = levelArry[`${x}`]

            const classs = ` Cube ${!gamestart && Item.animate && "Animate"}`
            return (<div key={y} style={{ width: `${newwidth}px`, height: `${newwidth}px`, backgroundColor: Item.bacg == true ? "white" : value == Item.key ? "red" : "", opacity: Item.bacg == true ? "1" : value == Item.key ? "1" : "0.15" }} onClick={() => Cubeclikck(Item.key)} className={classs} >
                {Item.key}
            </div>)
        })



    }





    return (
        <>

            {Start &&
                <Mainwraper setStart={setStart} Img={<AppsIcon />} linktext={"Start"} Text={"Memorize the pattern"} Header={"Visual  Memory Test"} />
            }
            {!Start &&
                <Cuebmaekr>
                    <div className='Mainboxofcube'>
                        <Sowcube />
                    </div>

                </Cuebmaekr>}
        </>
    )
}

export default Visualmemory