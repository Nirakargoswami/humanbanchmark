import React, { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import "./Gamebord.css"
import { useSelector } from 'react-redux'
import TableRow from '@mui/material/TableRow';
import Rankbox from "../Rankbox/RankBox";

const Gameleaderbord = () => {
    const [gamedata, setGamedata] = useState([])
    const [gamename,setGamename] = useState("")
    const State = useSelector(state => state)

    useEffect(() => {
        const userid = JSON.parse(localStorage.getItem("user"));
        if (userid) {
            setGamedata(State.raniking.resultArray)
            Makeatable()
        } else {
            return
        }
    }, [State])


   


    const Makeatable = () => {
        return (

            gamedata && gamedata.length > 0 && gamedata.map((row, y) => {
                return (<TableRow
                    key={y}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell align="center">
                        {row.Rank + 1}
                    </TableCell>
                    <TableCell align="center">{(row.name.substring(0, 6)+ "..")} </TableCell>
                    <TableCell style={{color:"rgb(0, 123, 255)"}} align="center">
                        {row.score}
                    </TableCell>
                    <TableCell style={{color:"rgb(0, 123, 255)"}} align="center">
                        {row.coin}
                    </TableCell>

                </TableRow>)
            }



            )
        )
    }

    const RankBox = () => {
            return (
            gamedata && gamedata.length > 0 && <Rankbox data={gamedata} />
        )
    }


    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "50px", marginBottom: "50px" }}>
                <div style={{ display: "flex", marginTop: "20px", justifyContent: "center", width: "100%" ,flexDirection:"column",alignItems:"center"}}>

                    {RankBox()}
                    <Table sx={{ maxWidth: 500 ,marginTop:"20px"}} size="larg" aria-label="a dense table">
                        <TableHead className="Tablehead" >
                            <TableRow>
                                <TableCell align="center">No</TableCell>
                                <TableCell align="center">Name </TableCell>
                                <TableCell align="center">Score</TableCell>
                                <TableCell align="center">Coin</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {Makeatable()}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </>
    )
}

export default Gameleaderbord;