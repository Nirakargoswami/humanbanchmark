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
    const [levelArry,setLevelArry] = useState()
    const[ans,setAns] = useState()
    const [newobj,setNewobj] = useState({})
     
    const Noarry = [1, 2, 3, 4, 5, 6, 7, 8, 9]


    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    const Nomaker = () => {
        const MianArry = [...Array(9).keys()]
        const NewArryobj = [];
        MianArry.map((x) => {
            const obj = {
                key : x ,
                animate:false,
                bacg:false
            }
            newobj[`${x}`] = obj
            NewArryobj.push(obj)
        })
         console.log(NewArryobj)
       
        for (let i = 0; i < leve ; i++) {
            const Rendno = randomIntFromInterval(0, 9)
                
            NewArryobj[`${Rendno}`].animate = true
            // if(mianarry.indexOf(Rendno) !== -1){
            //     i--
            // }else{
            //     mianarry.push(Rendno)
            //     console.log(Rendno)
            //     console.log( NewArryobj[Rendno])
            //     NewArryobj[Rendno].animate = true

            // }
        }
        console.log(newobj)
        console.log(mianarry)
        setLevelArry(NewArryobj)
     
    }

    
    // Object.entries(newobj).forEach(([key, value]) => {
    //     console.log(`${key}`)
    // });
const Cubeclikck = (x) => {
console.log(x)
if(x){
    let obj = newobj[`${x}`]
    obj.bacg = true
    console.log(newobj[`${x}`])
    setNewobj(prevState => (
        {...newobj ,
            ...prevState[`${x}`].bacg = true

        }
    ))
    
}

}

    
    useEffect((x) => {
        Nomaker()

    }, [])


    useEffect(() => {
        !Start && Sowcube()
    },[newobj])

console.log(levelArry)
  
    const Sowcube = () =>{
        const  A = Object.keys(newobj)
       
      return Object.keys(newobj).map((x,y) =>  
      {
        const Item = newobj[`${x}`]
        console.log(Item)
   const classs = ` Cube ${Item.animate && "Animate"} `
   return (<div key={y}  style={{backgroundColor: Item.bacg == true ? "white" : ""}} onClick={() => Cubeclikck(Item.key)}  className={classs} >
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