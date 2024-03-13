import { useState } from 'react';
import { Link, redirect } from "react-router-dom"
import './login.css'
import { Scoredata } from "../../redux/actions/gamescore"

import { signInWithGoogle, logInWithEmailAndPassword } from "../../Firebse/firebse"
import { Getallscore } from "../../Firebse/firebse"
import { useDispatch } from "react-redux";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  // const [validEmail, setvalidEmail] = useState(true)
  // const [validPassword, setvalidPassword] = useState(true)
  const [usercreated, setusercreated] = useState(false)
  const dipatch = useDispatch()





  // function Emailvalidation() {
  //   var filter = /^([a-zA-Z0-9_+\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  //   if (!filter.test(email)) {
  //     setvalidEmail(false)
  //   } else {
  //     setvalidEmail(true)
  //   }
  // }

  // function Passwordvalidation() {
  //   if (password.length < 8 || password.length > 14) {
  //     setvalidPassword(false)
  //   } else {
  //     setvalidPassword(true)
  //   }
  // }

  // function validation() {
  //   let valid = true
  //   var filter = /^([a-zA-Z0-9_+\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  //   if (!filter.test(email)) {
  //     setvalidEmail(false)
  //     valid = false
  //   } else {
  //     setvalidEmail(true)
  //   }
  //   if (password.length < 8 || password.length > 14) {
  //     setvalidPassword(false)
  //     valid = false
  //   } else {
  //     setvalidPassword(true)
  //   }
  //   return valid
  // }


  async function handleLogin() {

    await logInWithEmailAndPassword(email, password)
      .then((x) => {
        if (x.logged) {
          window.location.href = "/";

        } else {
          setusercreated(x.message)

        }
        setTimeout(() => {
          setusercreated(false)
        }, 2000)
      })

  }

  const getdata = async () => {
    const userid = JSON.parse(localStorage.getItem("user"))
    console.log("Logout ")
    const data = Getallscore(userid.uid)
    await data.then((responce) => {
      dipatch(Scoredata(responce))
      console.log("redirect")


    }).catch(() => {

    })
    if (data) {
    }
  }

  const Goolelogin = async () => {
    await signInWithGoogle().then((x) => {
      console.log(x)
      if (x) {
        window.location.href = "/";
      }
    })

  }


  const Setemial = (e) => {
    setEmail(e.target.value)
    // Emailvalidation()
  }
  return (
    <>



      <div style={{ height: "760px" }} className="relative flex flex-col  min-h-screen overflow-hidden main_div">

        <div className='login_div'>

          <div className='loginbox'>

            {usercreated ?
              <h1 style={{ color: "rgb(43, 135, 209)" }} className="Logintext">
                <span style={{ color: "white" }} ></span>
              </h1>
              :

              null
            }
            <div className="Extra w-full padding m-auto bg-white rounded-md shadow-md lg:max-w-xl main_div2 shadow-sm login_card">
              <h1 style={{ color: "rgb(43, 135, 209)", marginTop: "6px" }} className="Logintext">
                <span style={{ color: "white", marginRight: "5px" }} > Brain Banchmark</span>
                Login
              </h1>
              <button
                type='button'
                style={{ marginBottom: "0px" }}
                className="Loginbutton">
                <div onClick={() => Goolelogin()}>
                  Login with Google
                </div>
              </button>
              <div style={{ color: "rgb(43, 135, 209)", fontSize: "24px", marginBottom: "3px" }}  > or</div>
              <h1 style={{ color: "rgb(43, 135, 209)", marginTop: "0px" }} className="Logintext">
                Login
                <span style={{ color: "white", marginRight: "5px" }} > With Email and Password</span>

              </h1>

              <form>
                <div className='social_logins'>



                  {/* <GoogleLogin
           
              clientId="873843703961-55jm6idv8jbnifp956prdtjr5as6alhl.apps.googleusercontent.com"
              buttonText="Login With Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
              className="googlebutton"

           
            /> */}
                </div>
                <div className="Paddi mb-12 mt-13">
                  <label className="Emailtext">
                    Email
                  </label>
                  <input
                    value={email && email}
                    type="email"

                    name='email'
                    autoComplete='on'
                    onChange={e => Setemial(e)}
                    className="Emailinput"

                  // style={{border :!validEmail ? "1px solid red" : "" }}
                  />
                  {/* {
            !validEmail ? <label className="lable">
              Please enter valid email
            </label> : ""
          } */}

                </div>
                <div className="Paddi mb-2">
                  <label

                    className="Emailtext"
                  >
                    Password
                  </label>
                  <input
                    value={password}
                    // style={{ border: !validPassword ? "1px solid red" : "" }}

                    type="password"
                    name='password'
                    onChange={e => setpassword(e.target.value)}
                    className="Emailinput"
                  />
                  {/* {
            !validPassword ? <label className="lable">
              Please enter valid password
            </label> : ""
          } */}
                </div>

                <div className="Paddi mt-2">
                  <button
                    style={{ marginTop: "16px" }}
                    onClick={e => { e.preventDefault(); handleLogin() }}
                    className="Loginbutton">
                    Login
                  </button>
                  <div className='social_login'>
                    {/* <FacebookLogin
              textButton='Login With Facebook'
              appId="348712449773241"
              autoLoad={false}
              fields="name,email,picture"
              callback={responseFacebook}
              cssClass="Facebookbutto"
              icon={<FaFacebookF className='facebokicon' />}
            /> */}

                  </div>

                </div>
              </form>

              <p className="mt-8 text-xs font-light text-center" style={{ color: "white", marginBottom: "27px" }}>
                {" "}
                Don't have an account?{" "}
                <Link
                  style={{ color: "rgb(43, 135, 209)", textDecoration: "none" }}
                  to="/signup"
                  className="text-xs hover:underline"
                >                    Sign Up
                </Link>
              </p>
            </div>

          </div>

        </div>
        {/* <div className='login_second_banner_ad'>
    <ins data-revive-zoneid="2" data-revive-id="00885bcd5807a6fdf17d7982d17956a2"></ins> 
    <img src='https://via.placeholder.com/600x100?text=600x100+Full +Banner' />
 </div> */}
      </div>
    </>
  );
}

export default Login;