import React, { useEffect, useState } from "react"
import "./firstscreen.css"
import RouteContainer from "../../components/Test/Test"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import Matchinput from "../MathDisplay";
import { Link } from "react-router-dom";

// import { Distrubutrcoin } from "../../Firebse/firebse";
import { Quizdata } from "../Constatant/constatn";

const Firstscreen = () => {
    const [open, setOpen] = React.useState(true);
    const [quizzess, setQuizzess] = useState([]);

    const mathExpression = '\\frac{2x}{3x^2}';


    useEffect(() => {
        setQuizzess(Quizdata);

    }, []);

    // Show the current time (in minutes) in a 24-hour format



    // const getdata = async () => {
    //   console.log(params.userId)
    //   console.log( !params.userId   )
    //   if((userid &&  userid.uid === null || undefined || "") && !params.userId ){
    //       const user = {
    //         uid : null,
    //         idlogin:false,
    //         name : null


    //         }
    //     localStorage.setItem("user", JSON.stringify(user))

    //   }else if ((params.userId ==  null || undefined || "") && !userid.uid){
    //     const user = {
    //         uid : null,
    //         idlogin:false,
    //         name : null
    //         }
    //     localStorage.setItem("user", JSON.stringify(user))
    //   }else if (params.userId){

    //    const Created = await Creatuser(params.userId)
    //    console.log(Created)
    //    if(Created){
    //     console.log(Created)

    //    return  showDshborad()
    //    }

    //   }



    // };

    useEffect(() => {

        // Distrubutrcoin()
        setTimeout(() => {
            setOpen(false)
        }, 3000);

    }, [])

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div style={{ backgroundColor: "white", paddingBottom: "30px" }}>
            {/* <Offerbox handleClose={handleClose} handleClickOpen={handleClickOpen} open={open}/>


            <Dashborad/> */}


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

            
            {/* <div>
                <h1>MathJax in React</h1>
                <Matchinput/>
            </div> */}

            <RouteContainer />
            <div>
            {/* <Thirdscreen/> */}
            </div>
            
        </div>
    )
}


const Thirdscreen = () => {
return (    <div className="classMainBox" style={{margin:"auto",width:"284px"}}>

                {Quizdata.map((x, y) => (
                    <Link to={`/gamepage/${x.id}`}  className=" css-1ur49oz" style={{ cursor: "pointer", textAlign: "center", position: "relative" }} key={x.id}>
                        <div className="QuizBoxmiansecond">
                            <div>
                                {x.Poster}
                            </div>
                            <h2>
                                Part : {y + 1} {x.slang}
                            </h2>
                            <div style={{ display: "flex" }}>
                               
                            </div>
                            <button className="css-1q1iwm8">
                                Play Now
                            </button>
                        </div>
                    </Link>
                ))}
            </div>)
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
export { Firstscreen, Secondscreen ,Thirdscreen};