import React from "react";
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { Getallscore } from "../../Firebse/firebse"
import Table from '@mui/material/Table';
import { Scoredata } from "../../redux/actions/gamescore";
import { useParams } from "react-router-dom";
import { Creatuser } from "../../Firebse/firebse"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import AbcIcon from '@mui/icons-material/Abc';
import { Button } from "@mui/material";
import PinIcon from '@mui/icons-material/Pin';
import CircularIndeterminate from "../Loading/Loading"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { Reactiotimerandk } from "../../redux/actions/gamescore"
import { Getrankdata } from "../../Firebse/firebse"
import GridOnIcon from '@mui/icons-material/GridOn';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import AccessTimeIcon from '@mui/icons-material/AccessTime';


const Dashborad = () => {
    const State = useSelector(state => state)
    const [data, setdata] = useState([])
    const [info, setifo] = useState({})
    const [user, setUser] = useState(false)
    const [loading, setLoding] = useState(true)
    const dispatch = useDispatch()
    const params = useParams();
    const navigate = useNavigate()

    const userid = JSON.parse(localStorage.getItem("user"));

    const makearoute = (key) => {
console.log(key)
        switch (key) {
            case "numbermemory":
                return (
                    <div style={{ display: "flex" }}>
                        <Link to="/gameleadorbord">
                            <button style={{padding:"4px 9px"}}  onClick={() => Ranckdata(key)} className="css-de05nr" >
                                Rank
                            </button>
                        </Link>
                        <Link to="">
                            <div> <PinIcon /></div>
                        </Link>
                    </div>
                )
            case "reactiontime":
                return (
                    <div style={{ display: "flex" }}>
                        <Link to="/gameleadorbord">
                            <button style={{padding:"4px 9px"}}  onClick={() => Ranckdata(key)} className="css-de05nr" >
                                Rank
                            </button>
                        </Link>
                        <Link to="">
                            <div><AccessTimeIcon /></div>
                        </Link>
                    </div>
                )
            case "sequencememory":
                return (
                    <div style={{ display: "flex" }}>
                        <Link to="/gameleadorbord">
                            <button style={{padding:"4px 9px"}}  onClick={() => Ranckdata(key)} className="css-de05nr" >
                                Rank
                            </button>
                        </Link>
                        <Link to="">
                            <div style={{ marginLeft: "10px" }}><GridOnIcon /></div>
                        </Link>
                    </div>
                )
            // case "verbalmemory":


            //     return (
            //         <div style={{ display: "flex" }}>
            //             <Link to="/verbal-memory">
            //                 <div><PlayCircleFilledWhiteIcon /> Play</div>
            //             </Link>
            //             <Link to="">
            //                 <div style={{ marginLeft: "10px" }}><AbcIcon /></div>
            //             </Link>
            //         </div>
            //     )
            case "visualmemory":

                return (
                    <div style={{ display: "flex" }}>
                        <Link to="/memory">
                            <Link to="/gameleadorbord">
                                <button style={{padding:"4px 9px"}} onClick={() => Ranckdata(key)} className="css-de05nr" >
                                    Rank
                                </button>
                            </Link>
                        </Link>
                        <Link to="">
                            <div> <AcUnitIcon style={{ marginLeft: "10px" }}></AcUnitIcon></div>
                        </Link>
                    </div>
                )
            default:
                return (
                    <div>

                        <Link to="">
                            <div></div>
                        </Link>
                    </div>
                );
        }

    }
    const getdata = async (id) => {
        if (id) {
            const data = await Getallscore(id);
            if (data !== "User Does Not found") {
                dispatch(Scoredata(data));
                setLoding(false)

            } else if (data === "User Does Not found") {
                const Result = await Creatuser(id)
                if (Result == "Document Created") {
                    const data = await Getallscore(id);
                    if (data !== "User Does Not found") {
                        dispatch(Scoredata(data));
                        setLoding(false)
                        navigate("/login")
                    }
                } else {
                    setLoding(false)

                }
                setLoding(false)
            }
        } else {
            setUser(false)
            setLoding(false)


        }

    };

    const getdatauser = async () => {
        if (userid && userid.uid) {
            getdata(userid.uid);
            setLoding(false)

        } else {
            setLoding(false)
        }
    };

    useEffect(() => {
        getdatauser()

    }, []);




    useEffect(() => {
        const data = []
        if (userid) {
            setUser(true)

        } else {
            setUser(false)

        }
        Object.keys(State.productdata).forEach(key => {
            if (key !== "name" && key !== "id") {
                const newObj = {};
                newObj.name = key
                newObj.Action = makearoute(key)
                newObj.score = State.productdata[key];
                data.push(newObj);
            } else {
                setifo({
                    name: State.productdata["name"].toUpperCase(),
                    id: State.productdata["id"]
                })
            }

        });

        setdata(data)
        Makeatable()
    }, [State])



    const Ranckdata = async (name) => {
        if (userid.uid) {
            const data = await Getrankdata()
            const Maindata = {
                data: data,
                gamename: name
            }
            dispatch(Reactiotimerandk(Maindata));
        } else {
            return
        }
    }

    const Makeatable = () => {
        return (
            <>
                {
                    loading ?
                        <CircularIndeterminate />
                        : <Table sx={{ maxWidth: 500 }} size="larg" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left">Test</TableCell>
                                    <TableCell align="left">Score</TableCell>
                                    <TableCell align="left">Leaderboard <br />

                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data && data.map((row, y) => {
                                    return (<TableRow
                                        key={y}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell style={{ fontWeight: "bold" }}>{row.name.toUpperCase()} {row.Action}</TableCell>
                                        <TableCell style={{ fontSize: "16px", fontWeight: "bold" }} >{row.score || row.score === 0 ? row.score : "?"}</TableCell>
                                        <TableCell>
                                            <Link to={`/${(row.name == "sequencememory" ) ? "sequence" : (row.name == "visualmemory" ) ? "memory" :  row.name   }`}>
                                                <Button  style={{padding:"6px 22px"}} className="boxcolor" >
                                                    Play
                                                </Button>
                                            </Link>
                                        </TableCell>

                                    </TableRow>)
                                }



                                )}
                            </TableBody>
                        </Table>

                }





            </>
        )
    }
    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "10px", marginBottom: "-2px" }}>
            <div style={{ color: "black", marginBottom: "16px", fontSize: "30px", fontWeight: "bold" }}>

            </div>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", marginLeft: "31px", width: "100%" }}>
                {
                    user ?
                        <>
                            <span style={{ color: "black", fontSize: "19px", fontWeight: "400", textAlign: "start" }}>User Name</span>
                            <span style={{ color: "black" }}>:</span>
                            <div style={{ color: "black", marginLeft: "12px", fontSize: "18px", fontWeight: "bold" }}>
                                {(info.name && info.name.substring(0, 10) + "..")}
                            </div>

                        </>
                        :
                        <div style={{ color: "black", textAlign: "start" }} class="link"><Link to={"/login"}>Log in</Link> or <Link to={"/signup"}>sign up</Link> to save your results</div>
                }
            </div>

            {Makeatable()}
        </div>

    )
}

export default Dashborad;