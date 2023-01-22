import React, { useEffect, useState } from "react"
import Flagedata from "../Data/flagedata"
import randomIntFromInterval from "../Lib/lib"
import AppsIcon from '@mui/icons-material/Apps';
import "./GuessFlage.css"
import { Mainwraper } from "../../components/inexpage/index"

const GuessFlage = () => {
    const [flage, setflage] = useState("")
    const [Start, setStart] = useState(true)
    const [flagedata,setflagedata] = useState([])
    const [value,setvalue] = useState(0)
    const [id,setid] = useState()



    var varCounter = 0;
    var varName = function(){

         if(value <= 5) {
              setvalue(varCounter++)
              /* your code goes here */
         }
    };



    function shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }
    function getRandom5(arr) {
        // Get a random start index between 0 and the length of the array minus 5
        const startIndex = Math.floor(Math.random() * (arr.length - 5));
        // Get the 5 items starting from the random index
        const Data = arr.slice(startIndex, startIndex + 5);

        if (Data.length < 5) {
            const Newdata = shuffleArray(Flagedata)
            getRandom5(Newdata)
        } else {
            return Data
        }

    }

    useEffect(() => {
        flage &&  flage.map((x) => {
            console.log("flage")
            console.log(x)
            const url = 'https://restcountries.com/v3.1/name/'+x
           fetch(url)
            .then(res => res.json())
            .then(
              (result) => {
                const Data= result[0]
                const flage = Data.flags
                flagedata.push(flage.png)
                

              },
              // Note: it's important to handle errors here
              // instead of a catch() block so that we don't swallow
              // exceptions from actual bugs in components.
              (error) => {
                this.setState({
                  isLoaded: true,
                  error
                });
              }
            )
        })
       
    },[])

 let time 
    // const Showflage = () => {
    //       time =  setInterval(() => {
    //         setvalue((x) => x + 1)
    //     }, 1000);

        
      

    // }

  

useEffect(() => {
    
    console.log(value)
    if(value > 4){
        clearInterval(id)
    }else{
        Flagemachine()
    }
},[value])

const Flagemachine = () => {
    console.log(flagedata)
    return(
<div >

<img  src={flagedata[value]} />
</div>
    )
}

console.log(flagedata)

    return (
        <div>
         
         {Start &&
                <Mainwraper setStart={setStart} Img={<AppsIcon />} linktext={"Start"} Text={"Memorize the pattern"} Header={"Visual  Memory Test"} />
            }

            {
              !Start &&  
              <Flagemachine/>
            }
        </div>
    )
}




export default GuessFlage
