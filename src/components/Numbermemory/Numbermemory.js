import { useEffect, useState } from "react";

import AppsIcon from '@mui/icons-material/Apps';
import { Mainwraper } from "../inexpage/index"
import { useRef } from 'react';
import {Savebutton} from "../Button/Button"
import { useDispatch } from "react-redux";
import {Numbermemoryscore} from "../../redux/actions/gamescore"
import "./Number.css"
const Numbermemory = () => {
    const [start, setStart] = useState(true)
    const [value, setVAlue] = useState("")
    const [level, setLevel] = useState(1)
    const [no, setNo] = useState()
    const [Noshow, setNoshow] = useState()
    const[showanswer, setshowanswer] = useState(false)
    const inputRef = useRef(null);
    const [eroro,seteroro] = useState("")
    const dispatch = useDispatch()
    const Checkvalue = () => {
 if (value == ""){
    seteroro(true)
    setTimeout(() => {
      seteroro(false)
    },1000)
    return 
 }
        if (no == value) {
            setLevel(level + 1)
        }else{
            setshowanswer(true)
        }



    }

    const Nomaker = () => {
        
        let No = ""
        for (let i = 0; i < level; i++) {
            const Rendno = randomIntFromInterval(0, 9)
            console.log(Rendno)
            No = No + Rendno

        }
        setNoshow(No)
        setTimeout(() => {
            setNoshow("")
            setVAlue("")
            if(inputRef.current){
                inputRef.current.focus()
              
            }
        }, 1500)
        setNo(No)

    }
    // let no = ""







    useEffect(() => {
        
       
        if (!start) {

            Nomaker()
        }
    }, [level, start])



    function randomIntFromInterval(min, max) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
const SavebuttonScore = () => {
    dispatch(Numbermemoryscore(level - 1))
}
const Tryagain = () =>{
    

    setStart(true)
    setVAlue("")
    setLevel(1)
    setNo()
    setNoshow()
    setshowanswer(false)
}
    return (
        <div className="Nodisplay anim-slide-fade-in">
            {start &&
                <Mainwraper setStart={setStart} Img={<AppsIcon />} linktext={"Start"} Text={"The average person can remember 7 numbers at once. Can you do more?"} Header={"Number Memory"} />
            }

            {
                Noshow &&

                <div className="column">
                    <div >
                        <h1 style={{ color: "white" }}>{Noshow}</h1>
                    </div>

                    <div class="progress">
                        <div class="progress-value"></div>
                    </div>
                </div>

            }
            {showanswer &&

                <div className="column">
                    <div style={{ opacity: "1", transition: "all 1s linear 0s" }}>
                        <div style={{fontSize:"40px"}}>Number</div>
                        <div style={{fontSize:"40px"}} class="label">  {no}</div>

                    </div>
                    <div>
                        <div style={{fontSize:"40px"}} >Your answer</div>
                        <div >
                            <p style={{ textDecoration: 'line-through' ,fontSize:"40px" ,color: 'black'}}>{value}</p>
                        </div>

                    </div>
                    <div>
                    <span style={{fontSize:"40px"}}>Level {level }</span>

                    </div>
                    <div>

                    <p style={{marginBottom:"20px"}}>Play more and Imporve Your score </p>
                    </div>
                    <div>

                    <button onClick={() => Tryagain()} class="css-qm6rs9 ">Try again </button>
                    <Savebutton Score={SavebuttonScore} />

                    </div>

                </div>

            }
            {!start && !Noshow && !showanswer && 

                <div >
                  
                    <h4>Level {level}</h4>
                    { eroro &&  <h4 style={{color:"red",fontSize:"20px"}}>Enter the No </h4>}
                    <h4>What was the number?</h4>
                    
                    <span>Press enter to submit</span>
                  
                    <div>
                        <input   type="text" ref={inputRef} style={{ color: "white" }} className="css-18qa6we"  onChange={(e) => setVAlue(e.target.value)} />
                    </div>

                    <button style={{ marginTop: "20px" }} className="css-de05nr" onClick={Checkvalue}>
                        Submit
                    </button>
                </div>
            }
        </div>

    )
}


export default Numbermemory;