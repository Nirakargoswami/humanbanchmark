import { useEffect, useState } from "react";

import AppsIcon from '@mui/icons-material/Apps';
import {Mainwraper} from "../inexpage/index"

const Numbermemory  = () => {
const [start,setStart] = useState(true)
const [value,setVAlue] = useState()
const [present,setPresetn] = useState()
const [level,setLevel] = useState(20)
const [no,setNo] = useState()

const Checkvalue = () => {
    
    if( no == value  ){
         setLevel(level + 1)
    }


}

const Nomaker = () => {
    
    let No = ""
    for(let i = 0 ;i < level ;i++ ){
        const Rendno = randomIntFromInterval(0,9)
         console.log(Rendno)
         No = No +  Rendno
         
    }
    setNo(No)
    
}
    // let no = ""


   
   



useEffect(() => {
if(!start ){
    
     Nomaker()
}
},[level])

useEffect(() => {
 Nomaker()
},[])

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
const submit = () => {
    if(no == value ){
        setPresetn(true)
    }
}

    return (
        <div>
            {start &&
                <Mainwraper setStart={setStart} Img={<AppsIcon />} linktext={"Start"} Text={"Memorize the pattern"} Header={"Sequence Memory Test"} />
            }
            <div>
                <div>
                {no}
                </div>
                
            </div>
            <div>
               <input value={value} onChange={(e) => setVAlue(e.target.value) } />
            </div>

            <button onClick={Checkvalue}>
                Submit
            </button>
        </div>
    )
}


export default Numbermemory;