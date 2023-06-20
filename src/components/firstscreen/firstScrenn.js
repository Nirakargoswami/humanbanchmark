import React from "react"
import "./firstscreen.css"
import RouteContainer from "../../components/Test/Test"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import Dashborad from "../DashBoard/DashBoard";

const Firstscreen = () => {
    return (
        <div style={{ backgroundColor: "white" }}>
            <Dashborad />
            {/* <div style={{ backgroundColor: "rgb(43, 135, 209)" }} className="12ibl39">
                <div className="css-42wpoy">
                    <div className="anim-slide-fade-in">
                        <div>
                            <AcUnitIcon style={{ fontSize: "60px" }} />

                        </div>
                        <div className="css-1qvtbrk e19owgy78">

                        </div>
                        <div className="css-1qvtbrk  css-1qvtbrk">
                            <h1>Brain BenchMark</h1>
                            <h2>Measure your abilities with brain games and cognitive tests.</h2>


                        </div>
                        <div className="css-1qvtbrk  css-1qvtbrk">
                            <Link to={"/reactiontime"} className="css-de05nr e19owgy711">Get Started</Link>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="Gamenam">
                Brain Game Test
            </div>
            <RouteContainer />
        </div>
    )
}

const Secondscreen = () => {
    return (
        <div>
            <div style={{ backgroundColor: "rgb(43, 135, 209)" }} className="12ibl39">
                <div className="css-42wpoy">
                    <div className="anim-slide-fade-in">
                        <div>
                            <AcUnitIcon style={{ fontSize: "60px" }} />

                        </div>
                        <div className="css-1qvtbrk e19owgy78">

                        </div>
                        <div className="css-1qvtbrk  css-1qvtbrk">
                            <h1 >Human Benchmark</h1>
                            <h2>Measure your abilities with brain games and cognitive tests.</h2>


                        </div>
                        <div className="css-1qvtbrk  css-1qvtbrk">
                            <a className="css-de05nr e19owgy711">Get Started</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export { Firstscreen, Secondscreen };