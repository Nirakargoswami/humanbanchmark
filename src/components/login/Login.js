import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from "react-router-dom"
import './login.css'

import { signInWithGoogle, logInWithEmailAndPassword ,auth} from "../../Firebse/firebse"


function Login(props) {
  let { referal } = useParams();
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [validEmail, setvalidEmail] = useState(true)
  const [validPassword, setvalidPassword] = useState(true)

  const isAuthenticated = auth

//   useEffect(() => {
//     auth.onAuthStateChanged(user => {
//  if(user){
//   window.location.href = "../"
//  }
//     })
//   },[isAuthenticated])
  
  

  

  function Emailvalidation() {
    var filter = /^([a-zA-Z0-9_+\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(email)) {
      setvalidEmail(false)
    } else {
      setvalidEmail(true)
    }
  }

  function Passwordvalidation() {
    if (password.length < 8 || password.length > 14) {
      setvalidPassword(false)
    } else {
      setvalidPassword(true)
    }
  }

  function validation() {
    let valid = true
    var filter = /^([a-zA-Z0-9_+\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email)) {
      setvalidEmail(false)
      valid = false
    } else {
      setvalidEmail(true)
    }
    if (password.length < 8 || password.length > 14) {
      setvalidPassword(false)
      valid = false
    } else {
      setvalidPassword(true)
    }
    return valid
  }


  function handleLogin() {
    let valid = validation()
    if (!valid) {
      return
    }
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "email": email,
      "password": password
    });
    logInWithEmailAndPassword(email, password)
    // fetch(API_URL + "/login", {
    //   method: 'POST',
    //   headers: myHeaders,
    //   body: raw,
    //   redirect: 'follow'
    // })
    //   .then(response => response.json())
    //   .then(result => {
    //     if (result.statusCode === "200") {

    //       signIn({
    //         token: result.body.accessToken,
    //         tokenType: "Bearer",
    //         expiresIn: 3600,
    //         authState: { user: result.body.user }
    //       })
    //       localStorage.setItem("id", result.body.user.id)
    //       localStorage.setItem("referrals", result.body.user.referrals)
    //       //navigate("/")
    //       window.location.href = "../"

    //     } else {
    //       toast.error(result.body, {
    //         position: "bottom-right",
    //         autoClose: 5000,
    //       })
    //     }
    //   })
    //   .catch(error => console.log('error', error));

  }
 

 

 


  const Setemial = (e) => {
    setEmail(e.target.value)
    // Emailvalidation()
  }
  return (
    <>

      <div className='navbars'>

      </div>
      <div className="relative flex flex-col  min-h-screen overflow-hidden main_div">

        <div className='login_div'>

          <div className='loginbox'>

            <div className="w-full padding m-auto bg-white rounded-md shadow-md lg:max-w-xl main_div2 shadow-sm login_card">
              <h1 className="Logintext">
                <span className='clor1'> WORDX</span> Login
              </h1>
              <form className="mt-6">
                <div className="mb-2">
                  <label

                    className="Emailtext"
                  >
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
                  {
                    !validEmail ? <label className="lable">
                      Please enter valid email
                    </label> : ""
                  }

                </div>
                <div className="mb-2">
                  <label

                    className="Emailtext"
                  >
                    Password
                  </label>
                  <input
                    value={password}
                    style={{ border: !validPassword ? "1px solid red" : "" }}

                    type="password"
                    name='password'
                    onChange={e => setpassword(e.target.value)}
                    className="Emailinput"
                  />
                  {
                    !validPassword ? <label className="lable">
                      Please enter valid password
                    </label> : ""
                  }
                </div>
                <Link
                  to="/"
                  className="text-xs hover:underline"
                >
                  Forget Password?
                </Link>
                <div className="mt-2">
                  <button
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
                  <div className='social_logins'>
                    <div onClick={signInWithGoogle}>
                      Login with goole
                    </div>

                    {/* <GoogleLogin
                   
                      clientId="873843703961-55jm6idv8jbnifp956prdtjr5as6alhl.apps.googleusercontent.com"
                      buttonText="Login With Google"
                      onSuccess={responseGoogle}
                      onFailure={responseGoogle}
                      cookiePolicy={'single_host_origin'}
                      className="googlebutton"

                   
                    /> */}
                  </div>
                </div>
              </form>

              <p className="mt-8 text-xs font-light text-center" style={{ color: "white" }}>
                {" "}
                Don't have an account?{" "}
                <button className="font-medium hover:underline" style={{ color: "white" }}>
                  <a href="../signup">
                    Sign Up
                  </a>
                </button>
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