import React, { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import "./Gamebord.css"
import { useSelector, useDispatch } from 'react-redux'
import TableRow from '@mui/material/TableRow';
import { Link } from "react-router-dom"
const Gameleaderbord = () => {
    const [gamedata, setGamedata] = useState([])
    const State = useSelector(state => state)
    console.log(State)

    useEffect(() => {
        const userid = JSON.parse(localStorage.getItem("user"));
console.log(userid)
        if (userid) {
            setGamedata(State.raniking.resultArray)
            Makeatable()
        } else {
  return
        }
     
    }, [State])


    const data = [{
        name: "Nirakar",
        Rank: "1",
        Score: "20"
    },
    {
        name: "Nirakar",
        Rank: "1",
        Score: "20"
    },
    {
        name: "Vikas",
        Rank: "2",
        Score: "20"
    },
    {
        name: "Vidra",
        Rank: "3",
        Score: "20"
    },
    {
        name: "Nirakar",
        Rank: "3",
        Score: "21"
    },

    ]


    
    const Makeatable = () => {
        return (
            gamedata && gamedata.length > 0 && gamedata.map((row, y) => {
                return (<TableRow
                    key={y}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell align="center">
                        {row.Rank}
                    </TableCell>
                    <TableCell align="center">{row.name} </TableCell>
                    <TableCell align="center">
                        {row.score}
                    </TableCell>
                    

                </TableRow>)
            }



            )
        )
    }

    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "50px", marginBottom: "50px" }}>
                <div style={{ marginTop: "20px", width: "100%" }}>


                    <Table sx={{ maxWidth: 500 }} size="larg" aria-label="a dense table">
                        <TableHead className="Tablehead" >
                            <TableRow>
                                <TableCell align="center">Rank</TableCell>
                                <TableCell align="center">Name adn pic</TableCell>
                                <TableCell align="center">Score</TableCell>
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