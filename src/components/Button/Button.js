
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

export const Tryagin = ({Tryagin}) => {
    return (
        
            <button onClick={() => Tryagin()} className="Tryagain" >
            Tryagin
            </button>
        
    )
}