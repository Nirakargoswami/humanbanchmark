import { useEffect, useState } from "react";

import AppsIcon from '@mui/icons-material/Apps';
import {Mainwraper} from "../inexpage/index"

const Numbermemory  = () => {
const [start,setStart] = useState(true)
const [value,setVAlue] = useState()
const [present,setPresetn] = useState()
const [level,setLevel] = useState(1)
const [no,setNo] = useState()

const Checkvalue = () => {

}

const Nomaker = () => {
    for(let i = 0 ;i == level ;i++ ){
        const Rendno = randomIntFromInterval(0,9)
       return  console.log(i)
    }
}
    // let no = ""


   
   



useEffect(() => {
if(!start && present){
    setLevel(level + 1)
  return   Nomaker()
}
},[present])

useEffect(() => {
return Nomaker()
},[])

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
const submit = () => {
    if(no == value ){
        setPresetn(true)
    }
}
console.log(value,no)
    return (
        <div>
            {start &&
                <Mainwraper setStart={setStart} Img={<AppsIcon />} linktext={"Start"} Text={"Memorize the pattern"} Header={"Sequence Memory Test"} />
            }
            <div>
                {no}
            </div>
            <div>
               <input value={value} onChange={(e) => setVAlue(e.target.value) } />
            </div>

            <button onClick={submit}>
                Submit
            </button>
        </div>
    )
}


export default Numbermemory;