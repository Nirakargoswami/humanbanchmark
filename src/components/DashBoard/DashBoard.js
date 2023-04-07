import react, { useEffect, useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { Getallscore } from "../../Firebse/firebse"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Key } from "@mui/icons-material";
import { Link } from "react-router-dom";
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
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
                <div>
                    <Link to="/number-memory">
                        <div><PlayCircleFilledWhiteIcon/> Play</div>
                    </Link>
                    <Link to="">
                        <div></div>
                    </Link>
                </div>
            )
        case "reactiontime":
            return (
                <div>
                    <Link to="/reactiontime">
                    <div><PlayCircleFilledWhiteIcon/> Play</div>
                    </Link>
                    <Link to="">
                        <div></div>
                    </Link>
                </div>
            )
        case "sequencememory":
            return (
                <div>
                    <Link to="/sequence">
                    <div><PlayCircleFilledWhiteIcon/> Play</div>
                    </Link>
                    <Link to="">
                        <div></div>
                    </Link>
                </div>
            )
        case "verbalmemory":


            return (
                <div>
                    <Link to="/verbal-memory">
                    <div><PlayCircleFilledWhiteIcon/> Play</div>
                    </Link>
                    <Link to="">
                        <div></div>
                    </Link>
                </div>
            )
        case "visualmemory":

            return (
                <div>
                    <Link to="/memory">
                    <div><PlayCircleFilledWhiteIcon/> Play</div>
                    </Link>
                    <Link to="">
                        <div></div>
                    </Link>
                </div>
            )
        default:
            return (
                <div>
                    <Link to="">
                    <div><PlayCircleFilledWhiteIcon/> Play</div>
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
    const[info,setifo] = useState({})

    useEffect(() => {
        const data = []

        Object.keys(State.productdata).forEach(key => {
            if (key !== "name" && key !== "id") {
                const newObj = {};
                newObj.name = key

                newObj.Action = makearoute(key)



                newObj.score = State.productdata[key];
                data.push(newObj);
            }else{
                setifo({
                    name:State.productdata["name"].toUpperCase(),
                    id:State.productdata["id"]
                })
            }

        });

        setdata(data)

    }, [State])

    console.log(data)
    return (
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginTop:"50px",marginBottom:"50px"}}>

            <div style={{color:"black",marginTop:"50px",fontSize:"30px",fontWeight:"bold",color:"#007bff"}}>
                 { info.name}
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

                                <TableCell style={{fontSize:"36px",fontWeight:"bold"}} align="left">{row.score || row.score === 0 ? row.score  : "?" }</TableCell>




                            </TableRow>)
                        }



                        )}
                    </TableBody>
                </Table>
        </div>

    )
}

export default Dashborad;