import { useEffect, useState } from "react";

import { Mainwraper } from "../inexpage/index"
import { useRef } from 'react';
import { Savebutton } from "../Button/Button"
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Savedata } from "../../Firebse/firebse"
import Alertmessge from "../Diloaugbox/Dialoubox"
import PinIcon from '@mui/icons-material/Pin';
import { Numbermemoryscore } from "../../redux/actions/gamescore"
import "./Number.css"
const Numbermemory = () => {
    const [start, setStart] = useState(true)
    const [value, setVAlue] = useState("")
    const [level, setLevel] = useState(1)
    const [no, setNo] = useState()
    const [Noshow, setNoshow] = useState()
    const [Scueess,setScueess] = useState(true)
    const [open,setOpen] = useState(false)
    const [showanswer, setshowanswer] = useState(false)
    const inputRef = useRef(null);
    const [eroro, seteroro] = useState("")
    const dispatch = useDispatch()
    const Checkvalue = () => {
        if (value == "") {
            seteroro(true)
            setTimeout(() => {
                seteroro(false)
            }, 1000)
            return
        }
        if (no == value) {
            setLevel(level + 1)
        } else {
            SavebuttonScore()
            setshowanswer(true)
        }



    }

    const Nomaker = () => {

        let No = ""
        for (let i = 0; i < level; i++) {
            const Rendno = randomIntFromInterval(0, 9)
            No = No + Rendno

        }
        setNoshow(No)
        setTimeout(() => {
            setNoshow("")
            setVAlue("")
            if (inputRef.current) {
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
   
    const Tryagain = () => {

        setStart(true)
        setVAlue("")
        setLevel(1)
        setNo()
        setNoshow()
        setshowanswer(false)

    }
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    const SavebuttonScore = () => {
        const userid = JSON.parse(localStorage.getItem("user"))
        if(userid){
            Savedata(userid.uid, "numbermemory", (level - 1)).then((x) => {
                if (x === "Document successfully updated!") {
                    dispatch(Numbermemoryscore(level - 1))
                    handleClickOpen()
                   
                }
            })
        }
        if(!userid){
                 setScueess(false)
                 handleClickOpen()  
        }
    }



    return (
        <>
            <div className="Nodisplay anim-slide-fade-in">
            <Alertmessge message={ Scueess ? "Your score hase been saved" : "Need to login for Saving Score "} level={level} handleClose={handleClose} open={open} />

                {start &&
                    <Mainwraper setStart={setStart} Img={<PinIcon />} linktext={"Start"} Text={"The average person can remember 7 numbers at once. Can you do more?"} Header={"Number Memory"} />
                }

                {
                    Noshow &&

                    <div className="column">
                        <div >
                            <h1 style={{ color: "white" }}>{Noshow}</h1>
                        </div>

                        <div className="progress">
                            <div className="progress-value"></div>
                        </div>
                    </div>

                }
                {showanswer &&

                    <div className="column">
                        <div style={{ opacity: "1", transition: "all 1s linear 0s" }}>
                            <div style={{ fontSize: "40px" }}>Number</div>
                            <div style={{ fontSize: "40px" }} className="label">  {no}</div>

                        </div>
                        <div>
                            <div style={{ fontSize: "40px" }} >Your answer</div>
                            <div >
                                <p style={{ textDecoration: 'line-through', fontSize: "40px", color: 'black' }}>{value}</p>
                            </div>

                        </div>
                        <div>
                            <span style={{ fontSize: "40px" }}>Level {level}</span>

                        </div>
                        <div>

                            <p style={{ marginBottom: "20px" }}>Play more and Imporve Your score </p>
                        </div>
                        <div>

                            <button onClick={() => Tryagain()} className="css-qm6rs9 ">Try again </button>
                            {/* <Savebutton Score={SavebuttonScore} /> */}

                        </div>

                    </div>

                }
                {!start && !Noshow && !showanswer &&

                    <div >

                        <h4>Level {level}</h4>
                        {eroro && <h4 style={{ color: "red", fontSize: "20px" }}>Enter the No </h4>}
                        <h4>What was the number?</h4>

                        <span>Press enter to submit</span>

                        <div>
                            <input type="text" ref={inputRef} style={{ color: "white" }} className="css-18qa6we" onChange={(e) => setVAlue(e.target.value)} />
                        </div>

                        <button style={{ marginTop: "20px" }} className="css-de05nr" onClick={Checkvalue}>
                            Submit
                        </button>
                    </div>
                }

            </div>
            <div  className="Abouttest" style={{display:"flex",flexDirection:"c"}}>

                <div className="css-1oen1ps e19owgy73">
                    <h2 style={{ textAlign: "start" }}>About the test</h2>
                    <p style={{ textAlign: "start" }}>The average person can only remember 7 digit numbers reliably, but it's possible to do much better using mnemonic techniques. Some helpful links are provided below.</p>
                    <p style={{ textAlign: "start" }}><a href="https://en.wikipedia.org/wiki/Mnemonic_major_system">Mnemonic major system</a>
                    </p>
                    <p style={{ textAlign: "start" }}><Link to="https://en.wikipedia.org/wiki/Dominic_system">Dominic system</Link></p>
                    <p style={{ textAlign: "start" }}><Link to="https://en.wikipedia.org/wiki/Katapayadi_system">Katapayadi system</Link></p>
                    <p style={{ textAlign: "start" }}><Link to="https://en.wikipedia.org/wiki/Mnemonic">Mnemonic devices</Link></p>
                </div>
            </div>
        </>
    )
}


export default Numbermemory;