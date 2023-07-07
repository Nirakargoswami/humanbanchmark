import React, { useEffect } from "react"
import "./firstscreen.css"
import RouteContainer from "../../components/Test/Test"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import Dashborad from "../DashBoard/DashBoard";
import Offerbox from "../Offrebox/Offerbox"
import {Creatuser} from "../../Firebse/firebse"
import {
    
    useParams
  
  } from "react-router-dom";
const Firstscreen = () => {
    const params = useParams();
    const [open, setOpen] = React.useState(true);


    useEffect(() => {
      
        setTimeout(() => {
            setOpen(false)
        }, 3000);
        console.log(params)
        if(params.userId){
            Creatuser(params.userId)
        }
    },[])
    
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };


//       const Arry = [
//         [30],
//         [25,25,23,45,23,34],
//         [23],
//         [12,12,12,12,12,23,23,23,23,23,23,23,23,23,23,23] 
        
//         ]
//         //{Frist1: 389, Frist2: 123, Frist3: 107, Frist4: 23}
//   //{Frist1: 300, Frist2: 83, Frist3: 58, Frist4: 3}
// //{Frist1: 146, Frist2: 104, Frist3: 92, Frist4: 2}
// //{Frist1: 300, Frist2: 85, Frist3: 60, Frist4: 11}
// //{Frist1: 300, Frist2: 101, Frist3: 92, Frist4: 7}
//         let F1 = 300 
//         let F2 = 200 
//         let F3 = 100 
//         let F4 = 1000 
    
//     const VAlue = (value,Arry) => {
//       return Math.round(value / Arry.length)
//     }
//         const OBJECT = {
//            Frist1 : VAlue(F1 ,Arry[0]), 
//          Frist2 : VAlue(F2 ,Arry[1]), 
//          Frist3 : VAlue(F3 ,Arry[2]), 
//          Frist4 : VAlue(F4 ,Arry[3])  
//         }
      
        
//         const distribute = (OBJECT) => {
//             console.log("Dobe")
//             const Max = Math.max(...Object.values(OBJECT).map((x) => 
//             x
//         ))
//         const Min =  Math.min(...Object.values(OBJECT).map((x) =>
//             x
//         ))
//             console.log((OBJECT.Frist1 > OBJECT.Frist2 > OBJECT.Frist3 > OBJECT.Frist4 ) )
//             if((OBJECT.Frist1 > OBJECT.Frist2 > OBJECT.Frist3 > OBJECT.Frist4 ) == false){
            
//                  if ( (OBJECT.Frist4 > (OBJECT.Frist3  || OBJECT.Frist2  || OBJECT.Frist1))){
//                     console.log(( OBJECT.Frist4 > (OBJECT.Frist3  || OBJECT.Frist2  || OBJECT.Frist1)))
//                     console.log("Run1")
//                       const reduce = Min - 5

//                     const remain = (F4 - (reduce * Arry[3].length))
                                
//                     F4 = (reduce * Arry[3].length)
                 
                  
//                      const Constatnat =  remain / (Arry[0].length + Arry[1].length+Arry[2].length)
                      
//                       F1 =  (Arry[0].length* Constatnat)+ F1
//                       F2 = (Arry[1].length* Constatnat)+ F2
//                       F3 = (Arry[2].length* Constatnat)+ F3
//                    OBJECT.Frist1 = VAlue(F1 ,Arry[0])
//                    OBJECT.Frist2 = VAlue(F2 ,Arry[1])
//                    OBJECT.Frist3 = VAlue(F3 ,Arry[2])
//                    OBJECT.Frist4 = VAlue(F4 ,Arry[3])
//                    distribute(OBJECT)
//                  }else if ( (OBJECT.Frist3 > (OBJECT.Frist2 || OBJECT.Frist1) ) ){
//                     console.log("Run2")
//                     const reduce = Min - 5
//                     const remain = (F3 - (reduce * Arry[2].length))
//                     console.log(remain,"remain")               
//                     F3 = (reduce * Arry[2].length)
                  
                  
//                      const Constatnat =  remain / (Arry[0].length + Arry[1].length)
//                       console.log(Constatnat , "conatr")
//                       F1 =  (Arry[0].length* Constatnat)+ F1
//                       F2 = (Arry[1].length* Constatnat)+ F2
                      
//                    OBJECT.Frist1 = VAlue(F1 ,Arry[0])
//                    OBJECT.Frist2 = VAlue(F2 ,Arry[1])
//                    OBJECT.Frist3 = VAlue(F3 ,Arry[2])
//                    distribute(OBJECT)
//                  }else if (( OBJECT.Frist2 > OBJECT.Frist1)){
//                     console.log("Run3")
//                     const reduce = Min - 5
//                     const remain = (F2 - (reduce * Arry[1].length))
//                     console.log(remain,"remain")               
//                     F2 = (reduce * Arry[1].length)
                  
//                      const Constatnat =  remain / (Arry[0].length + Arry[1].length)
//                       console.log(Constatnat , "conatr")
//                       F1 =  (Arry[0].length* Constatnat)+ F1
//                       F2 = (Arry[1].length* Constatnat)+ F2
                      
//                    OBJECT.Frist1 = VAlue(F1 ,Arry[0])
//                    OBJECT.Frist2 = VAlue(F2 ,Arry[1])
//                    distribute(OBJECT)
//                  }
//                  console.log(OBJECT)
                
               
//             }else{

                
//             }

//             return OBJECT
//         }

//         const Redesign = (Resiisobj) => {
//             let Constatnat  = 0
//            if(Resiisobj["Frist1"] > 300  ){
//             Constatnat  =   (Resiisobj["Frist1"]  - 300 ) + Constatnat 

//             Resiisobj.Frist1 = 300 
//            }
//            else if(Resiisobj["Frist2"] > 200  ){
//             Constatnat  = Constatnat +  (Resiisobj["Frist2"] - 200 )
//             Resiisobj.Frist2 = 200 
//            }
//            else if(Resiisobj["Frist3"] > 100  ){
//             Constatnat  =  Constatnat + (Resiisobj["Frist3"] - 100 )
//             Resiisobj.Frist3 = 100 
//            }
//            console.log(Constatnat)
//            Resiisobj.Frist4 = VAlue(((Constatnat + (Resiisobj.Frist4 * Arry[3].length) )),Arry[3])
//            return Resiisobj
//         }
//         //
         
//        console.log(Redesign(distribute(OBJECT))) 
    
   
//     console.log(F1 + F2 + F3 + F4 , "fasdfasdf")
    return (
        <div style={{ backgroundColor: "white"  ,paddingBottom:"30px"}}>
            <Offerbox handleClose={handleClose} handleClickOpen={handleClickOpen} open={open}/>
            
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
            <RouteContainer  />
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