

import "./idnex.css"

export  const Mainwraper = ({Header,Text,linktext,Img,link,setStart}) => {
    return (
      
                <div className="thirdwraper anim-slide-fade-in">
                    <div className="Logo">
                        {Img}
                    </div>
                    <div className="Text">
                        <h1>{Header}</h1>
                        <h2>{Text}</h2>
                    </div>
                    <div className="Button">

                    { linktext &&  <a onClick={() => setStart(false)} className="Link" >
                             {linktext}
                      </a>}
                    </div>
                </div>
         
    )
}



export  const Sesocnwraper = ({chidldren}) => {
    return (
        <div className="Maionpage">
          <div className="secondwraper">
{chidldren}
          </div>

        </div>
    )
}



