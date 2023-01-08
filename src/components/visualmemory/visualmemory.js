import React, { useState, useEffect } from 'react'
import "./visualmemory.css"
import AppsIcon from '@mui/icons-material/Apps';

import SequenceMemoryTest from '../SequenceMemoryTest/SequenceMemoryTest'
import Cuebmaekr from "../Cubecomponent/Cubecomponent"
import { Mainwraper } from "../../components/inexpage/index"
const Visualmemory = () => {
    const [flashcount, setFlashcount] = useState()
    const [mianarry, setMainarry] = useState([])
    const [Start, setStart] = useState(true)
    const [leve, setLevel] = useState(3)
    const [levelArry, setLevelArry] = useState([])
    const [ans, setAns] = useState([])
    const [newobj, setNewobj] = useState({})
    const [gamestart, setGAmestart] = useState(false)
    const [chnce, setchance] = useState(3)
    const [mianchange, setmincahnce] = useState(3)
    const [value, setValue] = useState()
    const [ansarry, setAnsarry] = useState([])
    const [count, setCount] = useState(1)
    const [nocube,setnocube] = useState(9)
const [newwidth,setnewwidth] = useState(370 / 3)

    const Noarry = [1, 2, 3, 4, 5, 6, 7, 8, 9]


    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const Nomaker = () => {

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
        console.log(leve)

        for (let i = 0; i < leve; i++) {
            const Rendno = randomIntFromInterval(0, 8)
            console.log(Rendno)
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


    // Object.entries(newobj).forEach(([key, value]) => {
    //     console.log(`${key}`)
    // });
    const Cubeclikck = (x) => {

        const ansarry = []
        console.log(count)

        console.log(x)
        if (!gamestart) {
            setGAmestart(true)
        }
        console.log(ans, ans.includes(x))
        if (ans.includes(x)) {
            console.log("ankit")
            console.log(ansarry.length)
            console.log(ans.includes(x))
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
          

          console.log(leve,count)
            if (count == leve) {
                console.log(count)
                console.log("cunt3")
                setGAmestart(false)

                setTimeout(() => {
                    console.log("500")

                    const MianArry = [...Array(9).keys()]
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
                    console.log(NewArryobj)
                    setLevelArry(NewArryobj)

                }, 500)

                setTimeout(() => {

                    console.log("1000")



                    setCount(1)
                        if(leve < nocube){

                        }

                    setLevel((x) => {
                        return (x + 2)
                    })

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
                Nomaker()
            }, 500)

        }



    }
    console.log(leve)

    useEffect((x) => {
        Nomaker()
    
        // if(){
           

          
        // }
       

    }, [leve])


    useEffect(() => {
        !Start && Sowcube()
    }, [newobj])


    const Sowcube = () => {
        console.log('mmm')
        console.log(levelArry)


        return Object.keys(levelArry).map((x, y) => {
            const Item = levelArry[`${x}`]

            const classs = ` Cube ${!gamestart && Item.animate && "Animate"}`
            console.log(classs)
            return (<div key={y} style={{width : `${newwidth}px` ,  backgroundColor: Item.bacg == true ? "white" : value == Item.key ? "red" : "", opacity: Item.bacg == true ? "1" : value == Item.key ? "1" : "0.15" }} onClick={() => Cubeclikck(Item.key)} className={classs} >
                {Item.key}
            </div>)
        })



    }

        // !Start && Object.keys(newobj).forEach(x => 

        // (<div>
        //         ok
        //     </div>)

        ;


    return (
        <>

            {Start &&
                <Mainwraper setStart={setStart} Img={<AppsIcon />} linktext={"Start"} Text={"Memorize the pattern"} Header={"Visual  Memory Test"} />
            }
            {!Start &&
                <Cuebmaekr>
                    <Sowcube />
                </Cuebmaekr>}
        </>
    )
}

export default Visualmemory