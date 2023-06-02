import react, { useEffect, useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { Getallscore } from "../../Firebse/firebse"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import AbcIcon from '@mui/icons-material/Abc';
import { Link } from "react-router-dom";
import PinIcon from '@mui/icons-material/Pin';
import AcUnitIcon from '@mui/icons-material/AcUnit';

import GridOnIcon from '@mui/icons-material/GridOn';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import { fabClasses } from "@mui/material";
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const makearoute = (key) => {
    console.log(key)
    switch (key) {
        case "numbermemory":
            return (
                <div style={{display:"flex"}}>
                    <Link to="/number-memory">
                        <div style={{marginRight:"10px"}}><PlayCircleFilledWhiteIcon /> Play</div>
                    </Link>
                    <Link to="">
                        <div> <PinIcon /></div>
                    </Link>
                </div>
            )
        case "reactiontime":
            return (
                <div style={{display:"flex"}}>
                    <Link to="/reactiontime">
                        <div style={{marginRight:"10px"}}><PlayCircleFilledWhiteIcon /> Play</div>
                    </Link>
                    <Link to="">
                        <div><AccessTimeIcon/></div>
                    </Link>
                </div>
            )
        case "sequencememory":
            return (
                <div style={{display:"flex"}}>
                    <Link to="/sequence">
                        <div><PlayCircleFilledWhiteIcon /> Play</div>
                    </Link>
                    <Link to="">
                        <div style={{marginLeft:"10px"}}><GridOnIcon/></div>
                    </Link>
                </div>
            )
        case "verbalmemory":


            return (
                <div style={{display:"flex"}}>
                    <Link to="/verbal-memory">
                        <div><PlayCircleFilledWhiteIcon /> Play</div>
                    </Link>
                    <Link to="">
                        <div style={{marginLeft:"10px"}}><AbcIcon/></div>
                    </Link>
                </div>
            )
        case "visualmemory":

            return (
                <div style={{display:"flex"}}>
                    <Link to="/memory">
                        <div><PlayCircleFilledWhiteIcon /> Play</div>
                    </Link>
                    <Link to="">
                        <div> <AcUnitIcon style={{marginLeft:"10px"}}></AcUnitIcon></div>
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
    const [id, setid] = useState("")
    const [data, setdata] = useState([])
    const [info, setifo] = useState({})
    const [user, setUser] = useState(false)
    useEffect(() => {
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

    console.log(data)
    return (
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "50px", marginBottom: "50px" }}>
            <div style={{ color: "black", marginTop: "50px", fontSize: "30px", fontWeight: "bold", color: "#007bff" }}>

            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ color: "black", fontSize: "20px", fontWeight: "bold", textAlign: "start" }}>User Name</span>

                <div style={{ color: "black", marginTop: "10px", fontSize: "30px", fontWeight: "bold", color: "#007bff" }}>
                    {info.name}
                </div>
                {!user && <div style={{color:"black"}} class="link"><Link to={"/login"}>Log in</Link> or <Link to={"/signup"}>sign up</Link> to save your results</div>
                }
            </div>

            <Table sx={{ maxWidth: 500 }} size="larg" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Test</TableCell>

                        <TableCell align="left">Score</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row, y) => {
                        return (<TableRow
                            key={y}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >

                            <TableCell align="left">{row.name} {row.Action}</TableCell>

                            <TableCell style={{ fontSize: "36px", fontWeight: "bold" }} align="left">{row.score || row.score === 0 ? row.score : "?"}</TableCell>




                        </TableRow>)
                    }



                    )}
                </TableBody>
            </Table>
        </div>

    )
}

export default Dashborad;