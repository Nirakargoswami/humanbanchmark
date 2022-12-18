import React, { useState, useEffect } from 'react'
import "./visualmemory.css"
import AppsIcon from '@mui/icons-material/Apps';

import SequenceMemoryTest from '../SequenceMemoryTest/SequenceMemoryTest'
import Cuebmaekr from "../Cubecomponent/Cubecomponent"
import {Mainwraper} from "../../components/inexpage/index"
const Visualmemory = () => {
const [flashcount,setFlashcount] = useState(0)
const [mianarry,setMainarry] =useState([])
const [Start,setStart] = useState(true)
    const Noarry = [1, 2, 3, 4, 5, 6, 7, 8, 9]
   const  Cubeclick=() => {
           
    }


const level = [2,3,9]
useEffect(() => {
    Noarry.map((x) => {
        mianarry.push({
            value:x,
            animate:false,
    
        })
    })
    
},[])


useEffect(() => {
    if(!Start){
        findCommonElement(level,mianarry)
        setTimeout(() => {
            Sowcube()
        },1000)
    }
},[Start])

function findCommonElement(array1, array2) {
          
    // Loop for array1
    for(let i = 0; i < array1.length; i++) {
          
        // Loop for array2
        for(let j = 0; j < array2.length; j++) {
              
            // Compare the element of each and
            // every element from both of the
            // arrays
            if(array1[i] === array2[j].value) {

                array2[j].animate = true 
              console.log(array2[j])
                // Return if common element found
               
            }
        }
  
    }
      
    // Return if no common element exist
    
}
useEffect(() => {
    
},[flashcount])
    const Sowcube = () =>

    !Start &&  mianarry.map((x) => {
const Class = ` Cube ${ x.animate == true &&"Animate" }`
            return (<div key={x.value} style={{ backgroundColor: x.value === flashcount ? "white" : null, opacity: x.value === flashcount ? 1 : 0.15 }} onClick={() => setFlashcount(x.value)} className={Class} >
                {x.value}
            </div>)

        })

    return (
        <>
        
             {Start &&
                <Mainwraper setStart={setStart} Img={<AppsIcon />} linktext={"Start"} Text={"Memorize the pattern"} Header={"Visual  Memory Test"} />
            }
        {!Start && 
           <Cuebmaekr>
           <Sowcube/>
           </Cuebmaekr>}
        </>
    )
}

export default Visualmemory