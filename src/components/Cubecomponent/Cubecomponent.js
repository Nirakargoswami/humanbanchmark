
import style from "./Cubecomponent.css"
const Cuebmaekr = (props) => {
   
    return (
        <div className='Cubename'>
            <div className='Cubesec'>

                {
                    props.children

                }
            </div>
        </div>
    )

}

export default Cuebmaekr;