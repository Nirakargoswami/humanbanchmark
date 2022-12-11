



const Cuebmaekr = ({Arry}) => {
    <div className='Cubename'>
                            <div className='Cubesec'>

                                {
                                    Arry.map((x) => {

                                        return (<div key={x} style={{ backgroundColor: x === flashcount ? "white" : null }} onClick={() => Cubeclick(x)} className='Cube'>
                                            {x}
                                        </div>)
                                    })

                                }
                            </div>
                        </div>
}