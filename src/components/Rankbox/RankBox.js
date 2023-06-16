import React from "react";
import "./rankbox.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { style } from "@mui/system";
const Simplebox = ({ item ,style}) => {

    return (
        <>
            <div style={{top:style.top,left:style.left}} className="rankbox">
                <div className="">
                    {
                        item.src ?
                            <img  src={item.src} />
                            :
                            <AccountCircleIcon className="Rankimage" />

                    }

                </div>
                <div  >
                    <h5 style={{fontSize:"17px",margin:"0px"}} className="Rankname">Rank</h5>
                    
                    <h4 style={{fontSize:"26px",margin:"0px"}} className="Rankname">
                        {item.Rank + 1}
                    </h4>

                </div>
                <div>
                    <h4 style={{fontSize:"17px",margin:"0px"}} className="Rankname">
                        {item.name}

                    </h4>
                </div>
                <div>
                <h5 style={{fontSize:"10px",margin:"0px"}} className="Rankname">Score</h5>

                    <h4 style={{fontSize:"17px",margin:"0px"}} className="Rankname">{item.score}</h4>
                </div>

            </div>
        </>
    )
}

const Rankbox = ({ data }) => {
    const datas = data
    console.log(datas)
    return (
        <>
            <div className="box">
                <Simplebox item={data[1]} style={{
                    top:"25px",
                    left:"5px"

                }} />
                <Simplebox item={data[0]} style={{
                    top:"-8px"
                   

                }} />
                <Simplebox item={data[2]}style={{
                     top:"25px",
                     left:"212px"
 

                }}  />
            </div>
        </>
    )
}

export default Rankbox