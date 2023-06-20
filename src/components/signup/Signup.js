import React, {  useState } from 'react';
import { Link } from "react-router-dom"
import './signup.css'
import {registerWithEmailAndPassword,auth} from "../../Firebse/firebse"
import { useAuthState } from "react-firebase-hooks/auth";

function Signup() {


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  // const [validName, setvalidName] = useState(true)
  const [validEmail, setvalidEmail] = useState(true)
  const [validPassword, setvalidPassword] = useState(true)
  const [validConfirmPassword, setvalidConfirmPassword] = useState(true)
  const [toogle, settoogle] = useState(false)
  const [submit,setSubmit] = useState(false)
  // const [isAuthenticated, loading, error] = useAuthState(auth);

  const Toogle = () => {
    settoogle(!toogle)
  }

  // useEffect(() => {
  //   if (isAuthenticated) {
  //     // Redirect to Dashboard
  //     navigate("/")
  //   }
  // });
  // function Namevalidation() {
  //   if (name.length < 2 || password.length > 50) {
  //     setvalidName(false)
  //   } else {
  //     setvalidName(true)
  //   }
  // }
  function Emailvalidation(email) {
    var filter = /^([a-zA-Z0-9_+\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(email)) {
      setvalidEmail(false)
    } else {
      setvalidEmail(true)
    }
  }
  
  function Passwordvalidation(password) {
    var paswd=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,15}$/;
    if (!paswd.test(password)) {
      setvalidPassword(false)
    } else {
      setvalidPassword(true)
    }
    // if (password.length < 8 || password.length > 14) {
    //   setvalidPassword(false)
    // } else {
    //   setvalidPassword(true)
    // }
  }
  // function ConfirmPasswordvalidation(e) {
  //   if (e != password) {
  //     setvalidConfirmPassword(false)
  //   } else {
  //     setvalidConfirmPassword(true)
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
  //   var paswd=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
  //   if (!paswd.test(password)) {
  //     setvalidPassword(false)
  //   } else {
  //     setvalidPassword(true)
  //   }
    // if (confirmPassword != password) {
    //   setvalidConfirmPassword(false)
    //   valid = false
    // } else {
    //   setvalidConfirmPassword(true)
    // }
    // if (name.length < 2 || name.length > 50) {
    //   setvalidName(false)
    //   valid = false
    // } else {
    //   setvalidName(true)
    // }
  //   if(!toogle){
  //     valid = false
  //   }
  //   return valid
  // }
  function handleSignIn() {
    console.log("workaon")
    setSubmit(true)
    // let valid = validation()
    // if (!valid) {
    //   return
    // }
    // var myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");
    // var raw = JSON.stringify({
    //   "name": name,
    //   "email": email,
    //   "password": password,
    //   "referal_code": localStorage.getItem('referrar')
    // });
     registerWithEmailAndPassword(name,email,password).then((x) => {
      if(x.message){
      }else{
        alert()
      }
     })
    // fetch(API_URL + "/register", {
    //   method: 'POST',
    //   headers: myHeaders,
    //   body: raw,
    //   redirect: 'follow'
    // })
    //   .then(response => response.json())
    //   .then(result => {
    //     if (result.statusCode === "200") {
    //       localStorage.removeItem("referrar")
    //       toast.success("Registered successfully", {
    //         position: "bottom-right",
    //         autoClose: 1500,
    //       })

    //       setTimeout(() => {
    //         //navigate("/login")
    //         window.location.href = "../login"
    //       }, 3000)


    //     } else if (result.body === "Duplicate entry '" + email + "' for key 'users.email'") {
    //       toast.error("Email is already registered", {
    //         position: "top-right",
    //         autoClose: 5000,
    //       })
    //     } else {
    //       toast.error(result.body[0].message, {
    //         position: "bottom-right",
    //         autoClose: 5000,
    //       })
    //     }
    //   })
    //   .catch(error => console.log('error', error));

  }
  return (
    <>
      <div className="relative flex flex-col  min-h-screen overflow-hidden main_div">
      
        
        <div className='login_div'>
          
          <div className='loginbox'>

            <div className="w-full p-4 m-auto bg-white rounded-md shadow-md lg:max-w-xl main_div2 shadow-sm">
            <h1 style={{color:"rgb(43, 135, 209)"}} className="Logintext">
                <span style={{color:"white",marginRight:"5px"}} > Brain Banchmark</span >Signup
              </h1>
              <form className="mt-4">
                {/* <div className="mb-2">
                  <label

                    className="Emailtext"
                  >
                    Name
                  </label>
                  <input
                    value={name}
                    onChange={e => { setName(e.target.value); Namevalidation() }}
                    type="text"
                    className="Emailinput"
                  />
                  {
                    !validName ? <label className="block text-xs text-red-700 px-2">
                      Please enter valid name
                    </label> : ""
                  }
                </div> */}
                 <div className="mt-2 mb-6">
                  <label

                    className="Emailtext"
                  >
                    Name
                  </label>
                  <input
                    value={name}
                    defaultValue={name}

                    onChange={e => { setName(e.target.value) }}
                    type="text"
                    className="Emailinput"
                    style={{color:"white"}}
                  />
                 
                </div>
                <div className="mt-2 mb-6">
                  <label

                    className="Emailtext"
                  >
                    Personal Email
                  </label>
                  <input
                    value={email}
                    defaultValue={email}
                    style={{color:"white"}}
                    onChange={e => { setEmail(e.target.value); Emailvalidation(e.target.value) }}
                    type="email"
                    className="Emailinput"
                  />
                  {
                    !validEmail && submit ? <label className="block text-xs text-red-700 px-2">
                      Please enter valid email
                    </label> : ""
                  }
                </div>
                <div className="mb-2">
                  <label

                    className="block text-sm font-semibold Emailtext"
                  >
                    Password
                  </label>
                  <input
                  style={{color:"white"}}
                    value={password}
                    onChange={e => { setpassword(e.target.value); Passwordvalidation(e.target.value) }}
                    type="password"
                    defaultValue={password}

                    className="Emailinput"
                  />
                  {
                    !validPassword && submit ? <label className="block text-xs text-red-700 px-2">
                      Password must contain 7 to 15 characters which contain at least one numeric digit and a special character
                    </label> : ""
                  }
                </div>
                {/* <div className="mb-2">
                  <label

                    className="block text-sm font-semibold"
                  >
                    Confirm Password
                  </label>
                  <input
                    value={confirmPassword}
                    onChange={e => { setConfirmPassword(e.target.value); ConfirmPasswordvalidation(e.target.value) }}
                    type="password"
                    className="Emailinput"                  />
                  {
                    !validConfirmPassword ? <label className="block text-xs text-red-700 px-2">
                      Passwords doesn't match
                    </label> : ""
                  }
                </div> */}
               


                <div className='xvxpe5'>
                  <div className='hiy16i'>
                    <label

                      className="Labeleinput"
                    >


                      <div onClick={Toogle} style={{ border: toogle ? "1px solid  white" : "1px solid rgb(94, 102, 115)" ,backgroundColor : toogle ?  "" : "white" }} className='lablebox'>
                      </div>
                      {/* <div className='lebale'>
                        I have read and agree to wordy <a href='https://ktgamez.com/terms-conditions' target="_blank" style={{textDecoration: "underline"}}> Terms of Service </a> and <a target="_blank" href='https://ktgamez.com/privacy-policy' style={{textDecoration: "underline"}}> Privacy Policy</a>
                      </div> */}
                    </label>
                    {
                      !toogle && submit ? 
                    <label className="block text-xs text-red-700 px-2">Please accept terms and conditions</label>
                      :""
                    }
                  </div>

                </div>
                <div >

                  <button onClick={e => { e.preventDefault(); handleSignIn() }} className="w-full px-4 py-1  text-white  rounded-md login_button">
                  Create Personal Account                  </button>
                </div>
              </form>

              <p className="mt-5 text-xs font-light text-center" style={{ color: "white" }}>
                {" "}
                have an account?{" "}
                <button className="Loginbutton" style={{ color: "white" }}>
                 
                  <Link to={"/login"}>
                    Login
                  </Link>
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

export default Signup;