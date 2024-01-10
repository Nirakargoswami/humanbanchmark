import React from "react"
import "./test.css"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GridOnIcon from '@mui/icons-material/GridOn';
import PinIcon from '@mui/icons-material/Pin';
import AbcIcon from '@mui/icons-material/Abc';

import { Link } from "react-router-dom"

const Data = [
    {
        testname: "NUMBER MEMORY",
        testdes: "Remember the longest number you can.",
        link: "number-memory",
        svg: <PinIcon style={{ fontSize: "60px", color: "rgb(43, 135, 209)" }} />

    },
    {
        testname: "SEQUENCE MEMORY",
        testdes: "Remember an increasingly long pattern of button presses.",
        link: "sequence",
        svg: <GridOnIcon style={{ fontSize: "60px", color: "rgb(43, 135, 209)" }} />


    },


    {
        testname: "VISUAl MEMORY",
        testdes: "Remember an increasingly large board of squares.",
        link: "memory",
        svg: <AcUnitIcon
            style={{ fontSize: "60px", color: "rgb(43, 135, 209)" }}
        />

    },
    // {
    //     testname: "Verbal Memory",
    //     testdes: "Keep as many words in short term memory as possible.",
    //     link: "verbal-memory",
    //     svg: <AbcIcon style={{ fontSize: "60px", color: "rgb(43, 135, 209)" }} />

    // },
    {
        testname: "REACTION TIME",
        testdes: "Test your visual reflexes.",
        link: "reactiontime",
        svg: <AccessTimeIcon style={{ fontSize: "60px", color: "rgb(43, 135, 209)" }} />

    },
    {
        testname: "Chimp Test",
        testdes: "Are you smarter than a chimpanzee?",
        link: "chimpTest",
        svg: <GridOnIcon style={{ fontSize: "60px", color: "rgb(43, 135, 209)" }} />

    },


]

const RouteContainer = () => {
    return (
        <div className="RoteCon">
            {Data.map((x) => {
                return (
                    <>
                        <Link to={`${x.link}`} className="css-uaat4j css-1ur49oz" style={{ cursor: "pointer", textAlign: "center", position: "relative" }}>
                            {/* <div className="Cuponbox" >
                                <div>
                                    2500
                                </div>
                                <div>
                                    Coin
                                </div>
                            </div> */}
                            {x.svg}
                            <h4>{x.testname}</h4>
                            <p>{x.testdes}</p>

                        </Link>
                    </>
                )
            })}

        </div>
    )
}

export default RouteContainer