import React from "react";
import "./rankbox.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Simplebox = ({ item, style }) => {

    return (
        <>
            <div style={{ top: style.top, left: style.left }} className="rankbox">
                <div className="">
                    {
                        item.src === true ?
                            <img src={item.src} />
                            :
                            <AccountCircleIcon className="Rankimage" />

                    }

                </div>
                <div  >
                    <h5 style={{ fontSize: "17px", margin: "0px" }} className="Rankname">No</h5>

                    <h4 style={{ fontSize: "26px", margin: "0px" }} className="Rankname">
                        {item.Rank + 1}
                    </h4>

                </div>
                <div>
                    <h4 style={{ fontSize: "17px", margin: "0px" }} className="Rankname">
                           
                      
                        {(item.name. substring(0, 6)+ "..")}

                    </h4>
                </div>
                <div>
                    <h5 style={{ fontSize: "10px", margin: "0px" }} className="Rankname">Score</h5>

                    <h4 style={{ fontSize: "17px", margin: "0px" }} className="Rankname">{item.score}</h4>
                </div>
                

            </div>
        </>
    )
}

const Rankbox = ({ data }) => {
    // console.log(data)
    const datas = data
    return (
        <>
            <div className="box">
                <Simplebox item={data[1]} style={{
                    top: "25px",


                }} />
                <Simplebox item={data[0]} style={{
                    top: "0px"


                }} />
                <Simplebox item={data[2]} style={{
                    top: "25px",



                }} />

            </div>
            <div style={{color:"black"}}>
                Game
                <br/>
                {data[0].gamename}
                <br/>
                Previous Day Result :   {data[0].date}
            </div>
        </>
    )
}

export default Rankbox