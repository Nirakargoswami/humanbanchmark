
import  "./Cubecomponent.css"
const Cuebmaekr = (props) => {
   
    return (
        <div className='Cubename Cubemargin'>
            <div className='Cubesec'>

                {
                    props.children

                }
            </div>
        </div>
    )

}

export default Cuebmaekr;