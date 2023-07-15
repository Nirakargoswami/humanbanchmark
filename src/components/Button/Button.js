
import style from "./Button.css"

export const Custombutton = ({Click,Text,styles}) => {
    return (
        <div   onClick={Click}>
            <button className={`${styles}`} >
                {Text}
            </button>
        </div>
    )
}

export const Savebutton = ({Score}) => {
    return (
        
            <button onClick={() => Score()} className="Savescore" >
            Save score
            </button>
       
    )
}

export const Tryagin = ({Tryagin,disable}) => {
    return (
        
            <button disabled={disable} style={{backgroundColor: disable ?  "rgba(255, 255, 255, 0.5)" : "rgb(255, 209, 84)" }} onClick={() => Tryagin()} className="Tryagain" >
            Tryagain
            </button>
        
    )
}