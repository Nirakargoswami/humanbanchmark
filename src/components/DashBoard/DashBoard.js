import { useEffect, useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { Getallscore } from "../../Firebse/firebse"
import Table from '@mui/material/Table';
import { Scoredata } from "../../redux/actions/gamescore";

import { Link } from "react-router-dom"
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import AbcIcon from '@mui/icons-material/Abc';
import PinIcon from '@mui/icons-material/Pin';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { Reactiotimerandk } from "../../redux/actions/gamescore"
import { Getrankdata } from "../../Firebse/firebse"
import GridOnIcon from '@mui/icons-material/GridOn';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import AccessTimeIcon from '@mui/icons-material/AccessTime';





const makearoute = (key) => {
    switch (key) {
        case "numbermemory":
            return (
                <div style={{ display: "flex" }}>
                    <Link to="/number-memory">
                        <div style={{ marginRight: "10px" }}><PlayCircleFilledWhiteIcon /> Play</div>
                    </Link>
                    <Link to="">
                        <div> <PinIcon /></div>
                    </Link>
                </div>
            )
        case "reactiontime":
            return (
                <div style={{ display: "flex" }}>
                    <Link to="/reactiontime">
                        <div style={{ marginRight: "10px" }}><PlayCircleFilledWhiteIcon /> Play</div>
                    </Link>
                    <Link to="">
                        <div><AccessTimeIcon /></div>
                    </Link>
                </div>
            )
        case "sequencememory":
            return (
                <div style={{ display: "flex" }}>
                    <Link to="/sequence">
                        <div><PlayCircleFilledWhiteIcon /> Play</div>
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
                        <div><PlayCircleFilledWhiteIcon /> Play</div>
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
                        <div><PlayCircleFilledWhiteIcon /> Play</div>
                    </Link>
                    <Link to="">
                        <div></div>
                    </Link>
                </div>
            );
    }

}

const Dashborad = () => {
    const State = useSelector(state => state)
    const [data, setdata] = useState([])
    const [info, setifo] = useState({})
    const [user, setUser] = useState(false)
    const dispatch = useDispatch()


    const getdata = async () => {
        const userid = JSON.parse(localStorage.getItem("user"));
        if (userid) {
            const data = Getallscore(userid.uid);
            data
                .then((responce) => {
                    console.log(responce);
                    dispatch(Scoredata(responce));
                })
                .catch(() => { });
            if (data) {
            }
        }
    };

    useEffect(() => {
        getdata();
    }, []);




    useEffect(() => {
        console.log("dashboard")
        const data = []
        const userid = JSON.parse(localStorage.getItem("user"));

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

    }, [State])

    const Ranckdata = async (name) => {
        const userid = JSON.parse(localStorage.getItem("user"));
        if (userid) {
            console.log("Abc")
            const data = await Getrankdata()
            console.log(data)
            const Maindata = {
                data: data,
                gamename: name
            }
            dispatch(Reactiotimerandk(Maindata));
        } else {
            return
        }


    }


    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "10px", marginBottom: "-2px" }}>
            <div style={{ color: "black", marginTop: "16px", fontSize: "30px", fontWeight: "bold" }}>

            </div>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", marginLeft: "31px", width: "100%" }}>
                {
                    user ?
                        <>
                            <span style={{ color: "black", fontSize: "18px", fontWeight: "400", textAlign: "start" }}>User Name</span>
                            <span style={{ color: "black" }}>:</span>
                            <div style={{ color: "black", marginLeft: "12px", fontSize: "22px", fontWeight: "bold" }}>
                                {info.name}
                            </div>
                        </>
                        :
                        <div style={{ color: "black", textAlign: "start" }} class="link"><Link to={"/login"}>Log in</Link> or <Link to={"/signup"}>sign up</Link> to save your results</div>
                }
            </div>

            <Table sx={{ maxWidth: 500 }} size="larg" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Test</TableCell>
                        <TableCell align="left">Score</TableCell>
                        <TableCell align="left">Leader Bord</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row, y) => {
                        return (<TableRow
                            key={y}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="left">{row.name} {row.Action}</TableCell>
                            <TableCell style={{ fontSize: "16px", fontWeight: "bold" }} align="left">{row.score || row.score === 0 ? row.score : "?"}</TableCell>
                            <TableCell align="left">
                                <Link to="/gameleadorbord">
                                    <button onClick={() => Ranckdata(row.name)} className="css-de05nr" >
                                        Score
                                    </button>
                                </Link>
                            </TableCell>

                        </TableRow>)
                    }



                    )}
                </TableBody>
            </Table>
        </div>

    )
}

export default Dashborad;