import React, { useState, useEffect } from "react";
import { Mainwraper } from "../inexpage/index"
import "./Chimptest.css"
import { Tryagin, Savebutton } from "../Button/Button"
import { Chimptest } from "../../redux/actions/gamescore"
import { useDispatch } from 'react-redux';
import { Savedata } from "../../Firebse/firebse"
import Alertmessge from "../Diloaugbox/Dialoubox"
import GridOnIcon from '@mui/icons-material/GridOn';
import { SettingsInputComponentOutlined } from "@mui/icons-material";
import AppsIcon from '@mui/icons-material/Apps';


const ChimpTest = () => {
    const [start, setStart] = useState(true)
    const [tilePositions, setTilePositions] = useState([]);
    const [GameStared, setGamestarted] = useState(false)
    const [level, setLevel] = useState(1)
    const [cubeno, setCubeno] = useState(5)
    const [Strick, setStrick] = useState(3)
    const [count, setcount] = useState(1)
    const [Countine, setCountine] = useState(false)
    const [No, setNo] = useState()
    const [showanswer, setshowanswer] = useState(false)
    const [open, setOpen] = useState(false)
    const [Scueess, setScueess] = useState(true)

    const dispatch = useDispatch()

    let generateTilePositions
    const [windowDimensions, setWindowDimensions] = useState({
        width: window.innerWidth,
    });

    const areaHeight = 500;
    const tileWidth = 403 > windowDimensions.width ? 48 : 80
    const tileHeight = 403 > windowDimensions.width ? 100 : 80
    console.log(tileWidth, tileHeight)

    useEffect(() => {
        const generateRandomPosition = (i) => {
            i++
            const x = Math.floor(Math.random() * ((windowDimensions.width - 50) - tileWidth));
            const y = Math.floor(Math.random() * (areaHeight - tileHeight));
            return { x, y, i };
        };


        const checkOverlap = (newTile, positionss) => {
            return positionss.every(
                (existingTile) =>
                    newTile.x + tileWidth < existingTile.x ||
                    newTile.x > existingTile.x + tileWidth ||
                    newTile.y + tileHeight < existingTile.y ||
                    newTile.y > existingTile.y + tileHeight
            );
        };

        generateTilePositions = () => {
            const positions = [];

            for (let i = 0; i < cubeno; i++) {
                let newTile;
                let overlapAttempts = 0;

                do {
                    newTile = generateRandomPosition(i);
                    overlapAttempts++;

                    // If it's taking too many attempts to find a non-overlapping position, break the loop
                    if (overlapAttempts > 100) {
                        console.error("Could not find non-overlapping positions for all tiles.");
                        break;
                    }
                } while (!checkOverlap(newTile, positions));

                positions.push(newTile);
            }

            setTilePositions(positions);
        };
        generateTilePositions();
    }, [cubeno]);

    useEffect(() => {
        const handleResize = () => {
            setWindowDimensions({
                width: window.innerWidth,

            });
        };
        // Set up an event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    console.log(windowDimensions)

    const check = (no) => {
        console.log(no, count)
        if (no == count) {
            const newTilePositions = tilePositions.filter((x) => x.i !== no)
            console.log(tilePositions)
            setTilePositions(newTilePositions)
            setcount(count + 1)

        }else {
            setNo(no)
            setStrick(Strick - 1)
            setCountine(true)
        }
        if (level !== 0) {
            setGamestarted(true)

        }


    }

    useEffect(() => {
        if (tilePositions.length === 0 && !start && count !== 1) {
            console.log("count")
            setCountine(true)
        }
    }, [count])


    const Showcube = () => {
        console.log(tilePositions)
        return tilePositions && tilePositions.map((position, index) => {
            return (
                <div
                    onClick={() => check(position.i)}
                    style={{
                        backgroundColor: GameStared && "white",
                        position: 'absolute',
                        left: position.x,
                        top: position.y,
                        width: 403 > windowDimensions.width ? "48px" : "80px",
                        height: 403 > windowDimensions.width ? "48px" : "80px",
                    }}
                    key={index}
                    className="css-19b5rdt"

                >
                    <div style={{
                        fontSize: 403 > windowDimensions.width ? "23px" : "50px",
                        display: GameStared && "none",

                    }} className="SmallCube">
                        {GameStared ? "." : position.i}
                    </div>
                    {/*  */}
                </div>

            )
        }
        )
    }
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const SavebuttonScore = () => {
        const userid = JSON.parse(localStorage.getItem("user"))
        if (userid) {
            Savedata(userid.uid, "chimptest", (cubeno)).then((x) => {
                if (x === "Document successfully updated!") {
                    dispatch(Chimptest(cubeno))
                    handleClickOpen()

                }
            })
        }
        if (!userid) {
            setScueess(false)
            handleClickOpen()
        }
    }
    const Continue = () => {
        if (No) {
            setNo(null)
            setCountine(false)
            setGamestarted(false)
            generateTilePositions()
        }else{
            setCountine(false)
            setLevel(cubeno + 1)
            setcount(1)
            setGamestarted(false)
            setCubeno(cubeno + 2)
        }
    }
    const Tryagain = () => {
        setCubeno(5)
        setCountine(false)
        setLevel(1)
        setNo(null)
        setStrick(3)
        setcount(1)
        setshowanswer(true)
        setStart(true)
        setshowanswer(false)
    }


    useEffect(() => {
        if (Strick == 0) {
            console.log(Strick)
            setCountine(false)
            setNo(null)
            setGamestarted(false)
            SavebuttonScore()
            setshowanswer(true)
        }
    }, [Strick])

    const Tryaginbutton = () => {
        return (
            <Tryagin disable={open} Tryagin={Tryagain} />

        )
    }
    return (

        <div>
            <Alertmessge message={Scueess ? "Your score hase been saved" : "Need to login for Saving Score "} level={cubeno} handleClose={handleClose} open={open} />

            {start &&
                <Mainwraper setStart={setStart} Img={<GridOnIcon />} linktext={"Start"} Text={"Chimptest "} Header={"Chimptest Memory Test"} />
            }

            <div>

                {!start && !Countine && !showanswer && 
                    <div
                        style={{ backgroundColor: "rgb(43, 135, 209)" }}
                        className='Mainbox'>

                        {Showcube()}
                    </div>


                }
                {showanswer && !Countine &&

                    <div
                        style={{ backgroundColor: "rgb(43, 135, 209)" }}
                        className='Mainbox' >
                        <div className='Secondbox'>
                            <Alertmessge message={Scueess ? "Your score hase been saved" : "Need to login for Saving Score "} level={cubeno} handleClose={handleClose} open={open} />

                            <AppsIcon className='Icon' />
                            <div className='textbox'>
                                <span className='SecLevel'>
                                    <span className='TEXt'>Level </span>
                                    <span style={{ fontSize: "27px" }} >{cubeno}</span>
                                </span>
                                <div className='textfirst'>
                                    Chimp Test
                                </div>

                            </div>

                            <div className='textbox '>



                                <div className='
                        Flex'>

                                    {Tryaginbutton()}
                                </div>

                            </div>
                        </div>

                    </div>
                }
                {Countine && !start &&
                    <div
                        style={{ backgroundColor: "rgb(43, 135, 209)" }}
                        className='Mainbox' >
                        <div className='Secondbox'>

                            <AppsIcon className='Icon' />
                            <div className='textbox'>
                                <span className='SecLevel'>
                                    {No ? <span className='TEXt'>{No}</span>
                                        :
                                        <>
                                            <span className='TEXt'>Level </span>
                                            <span style={{ fontSize: "27px" }} >{level}</span>
                                        </>
                                    }
                                </span>
                                <div className='textfirst'>
                                    Lives
                                </div>
                                <div className='textfirst'>
                                    3 out of {Strick}
                                </div>
                                <div className='textfirst'>
                                    Chim ChimpTest
                                </div>

                            </div>

                            <div className='textbox '>



                                <div className='Flex'>
                                    <button style={{ backgroundColor: "rgb(255, 209, 84)" }} onClick={() => Continue()} className="Tryagain Link" >
                                        Countine
                                    </button>
                                </div>

                            </div>
                        </div>

                    </div>
                }
            </div>
        </div>
    )
}

export default ChimpTest