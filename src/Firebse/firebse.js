// Import the functions you need from the SDKs you need
import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";


import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
  getDoc,
  updateDoc,
  doc,

} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9_5dTMJAwvA0RhqSbppnz-0um_IIHztI",
  authDomain: "wordle-99fb9.firebaseapp.com",
  databaseURL: "https://wordle-99fb9-default-rtdb.firebaseio.com",
  projectId: "wordle-99fb9",
  storageBucket: "wordle-99fb9.appspot.com",
  messagingSenderId: "543055598072",
  appId: "1:543055598072:web:e95f21e8554a006568460d",
  measurementId: "G-XLGRCQWH6V"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);




const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

const Creatuser = async (id, name) => {
  // console.log(name)
  const q = query(collection(db, "users"), where("id", "==", id));
  const querySnapshot = await getDocs(q);
  let user

  if (querySnapshot.size === 0) {
    user = {
      uid: id,
      name: name ? name : id,
      idlogin: true

    }
    const docRef = await addDoc(collection(db, "users"), {
      id: id,
      name: name ? name : id,

      reactiontime: {
        score: 0,
        coin: 0
      },
      numbermemory: {
        score: 0,
        coin: 0
      },
      sequencememory: {
        score: 0,
        coin: 0
      },
      visualmemory:
      {
        score: 0,
        coin: 0
      },

    })

    localStorage.setItem("user", JSON.stringify(user))
    return "Document Created"




  } else {
    return "Document Does not Created"




  }


  return true
}
window.addEventListener('message', (event) => {
  if (event.data === 'closePopup') {
    // Close the popup
    window.close();
  }
});
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    console.log(res)
    let user = res.user;
    var userId = user.uid;


    const q = query(collection(db, "users"), where("id", "==", userId));
    console.log(q)
    const querySnapshot = await getDocs(q);
    console.log(querySnapshot)
    if (querySnapshot.size === 0) {

      await addDoc(collection(db, "users"), {
        id: res.user.uid,
        name: user.displayName,
        idlogin: false,
        reactiontime: {
          score: 0,
          coin: 0
        },
        numbermemory: {
          score: 0,
          coin: 0
        },
        sequencememory: {
          score: 0,
          coin: 0
        },

        visualmemory:
        {
          score: 0,
          coin: 0
        },

      });
      return {
        loged: true
      }
    } else {
      const Newuser = {
        uid: user.uid,
        name: user.displayName,
        idlogin: false
      }
      localStorage.setItem("user", JSON.stringify(Newuser))
 

    }
    user.idlogin = false
    window.opener.postMessage('closePopup', '*');
  } catch (err) {
    console.log(err)
    return err
  }



};

const logInWithEmailAndPassword = async (email, password) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    console.log(result)
    const q = query(collection(db, "users"), where("id", "==", result.user.uid));
    const querySnapshot = await getDocs(q);

    if (querySnapshot) {
      querySnapshot.forEach((doc) => {
        const data = doc.data()
        const User = {
          id: data.uid,
          name: data.name,
          idlogin: false

        }
        localStorage.setItem("user", JSON.stringify(User))
      });
    }

    setTimeout(() => {
      window.location.href = "/"
    }, 2000)

    return {
      logged: true
    };
  } catch (error) {
    return error;
  }
};

const registerWithEmailAndPassword = async (displayName, email, password) => {
  console.log(displayName, email, password)
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password, displayName);
    console.log(res)
    // if(){

    // }
    await addDoc(collection(db, "users"),
      {
        id: res.user.uid,
        name: displayName,
        reactiontime: {
          score: 0,
          coin: 0
        },
        numbermemory: {
          score: 0,
          coin: 0
        },
        sequencememory: {
          score: 0,
          coin: 0
        },
        verbalmemory: {
          score: 0,
          coin: 0
        },
        visualmemory:
        {
          score: 0,
          coin: 0
        },
        wordmemory: {
          score: 0,
          coin: 0
        },
      }
    );
    console.log(res)
    res.user.idlogin = false

    localStorage.setItem("user", JSON.stringify(res.user))


    setTimeout(() => {
      window.location.href = "/"

    }, 1000)
    return res

  } catch (err) {
    console.error(err);
    return (err);
  }
};

function closePopup() {
  window.close();
}
const Getrankdata = async (name) => {
  const currentDate = new Date();

  const previousDate = new Date(currentDate.getTime() - (24 * 60 * 60 * 1000)); // Subtract one day (24 hours) from the current date
  let date
  const formattedPreviousDate = previousDate.toLocaleDateString();
  const competitionResultsRef = collection(db, 'competition_results');
  const queryRef = query(competitionResultsRef, where('date', '==', formattedPreviousDate));
  const querySnapshot = await getDocs(queryRef);

  const userDataArray = []; // Create an array to store the retrieved data
  querySnapshot.docs.forEach((doc) => {

    const userData = doc.data();
    date = userData.date
    const timestamp = userData.date; // Assuming the timestamp field is named "date"
    userData.users.map((x) => {
      userDataArray.push(x);
    })
    // Add the data to the array
    // You can access specific fields like userData.fieldName
  });

  const Maindata = {
    date: date,
    DataArrry: userDataArray
  }
  return Maindata;
}

const Savedata = async (id, updateitem, score) => {

  const userRef = query(collection(db, "users"), where("id", "==", id));
  const querySnapshot = await getDocs(userRef);
  if (querySnapshot.docs.length > 0) {

    const userRef = querySnapshot.docs[0].ref;
    const updateObj = {
      [updateitem]: {
        score: score,
        coin: 0
      }
    };
    await updateDoc(userRef, updateObj);

    return ("Document successfully updated!")
  } else {
    return ("Document not found!")
  }
}

const Getallscore = async (id) => {
  const userRef = query(collection(db, "users"), where("id", "==", id));
  const querySnapshot = await getDocs(userRef);
  if (querySnapshot.docs.length > 0) {
    const Data = querySnapshot.docs[0].data()
    return Data

  } else {
    return ("User Does Not found")
  }
}

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent!");
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

const Signout = () => {
  localStorage.clear();

  signOut(auth)
    .then(() => {
      // Perform some action after sign out
      // For example, you can navigate to a different page or reload the current page
      window.location.reload();
    })
    .catch((error) => {
      // Handle errors that occur during sign out
      console.error(error);
    });
};


// const Distrubutrcoin = async () => {
//   console.log("fasfa")
//   const userRef = query(collection(db, "users"));
//   const querySnapshot = await getDocs(userRef);
//   let users
//   if (querySnapshot.docs.length > 0) {
//     users = querySnapshot.docs.map((x) => x.data())
//   }

//   // Sort users by their scores in descending order
//   console.log(users)
//   let numbermemory
//   let reactiontime
//   let sequencememory
//   let visualmemory


//   let gamedata = ["numbermemory", "reactiontime", "sequencememory", "visualmemory"]
//   const Sortarry = (data, name) => {
//     const sortedArray = data.sort((a, b) => b[name].score
//       - a[name].score
//     );
//     return sortedArray
//   }
//   gamedata.forEach(x => {
//     const data = users.slice();
//     if (x === "numbermemory") {
//       numbermemory = data.sort((a, b) => b[x].score
//         - a[x].score
//       );
//     } else if (x === "reactiontime") {
//       reactiontime = data.sort((a, b) => a[x].score
//         - b[x].score
//       );
//     } else if (x === "sequencememory") {
//       sequencememory = data.sort((a, b) => b[x].score
//         - a[x].score
//       );
//     } else if (x === "visualmemory") {
//       visualmemory = data.sort((a, b) => b[x].score
//         - a[x].score
//       );
//     }
//   })

//   const point = {
//     numbermemory: numbermemory,
//     reactiontime: reactiontime,
//     sequencememory: sequencememory,
//     visualmemory: visualmemory

//   }
//   console.log(point)
//   const keys = Object.keys(point);

//   const Catotgary = () => {

//     console.log("fasdfasfda, 1")
//     const Substrekted = keys.map((X) => {
//       console.log("fasdfasfda, 2")
//       let Soretd = [
//         [],
//         [],
//         [],
//         []
//       ]
//       let count = 0
//         let max = point[X][0][X].score
//       point[X].map((x, y) => {

//         if (count !== 3) {
//            if (x[X].score == max) {
//             Soretd[count].push({ id: x.id, score: x[X].score, coin: x[X].coin ,gameName : X ,name : x.name })
//           } else {
//             max = x[X].score
//             Soretd[count + 1].push({ id: x.id, score: x[X].score, coin: x[X].coin ,gameName : X ,name : x.name })
//             count =  count + 1

//           }
//         } else {

//           Soretd[3].push({ id: x.id, score: x[X].score, coin: x[X].coin ,gameName : X ,name : x.name })
//         }

//       })
//       return Soretd
//     })

//     return Substrekted
//   }

//   const getcatorgay = Catotgary()
//   console.log(getcatorgay, ":::L")
//   let F1 = 500
//   let F2 = 300
//   let F3 = 200
//   let F4 = 1500

//   const VAlue = (value, Arry) => {
//     return Math.round(value / (Arry.length === 0 ? 0 : Arry.length))
//   }

//   const distribute = (OBJECT,Arry) => {
//     console.log("Dobe")
//     console.log(OBJECT,Arry)
//     const Max = Math.max(...Object.values(OBJECT).map((x) =>
//       x
//     ))
//     const Min = Math.min(...Object.values(OBJECT).map((x) =>
//       x
//     ))
//     console.log((OBJECT.Frist1 > OBJECT.Frist2 > OBJECT.Frist3 > OBJECT.Frist4))
//     if ((OBJECT.Frist1 > OBJECT.Frist2 > OBJECT.Frist3 > OBJECT.Frist4) == false) {

//       if ((OBJECT.Frist4 > (OBJECT.Frist3 || OBJECT.Frist2 || OBJECT.Frist1))) {
//         console.log((OBJECT.Frist4 > (OBJECT.Frist3 || OBJECT.Frist2 || OBJECT.Frist1)))
//         console.log("Run1")
//         const reduce = Min - 5

//         const remain = (F4 - (reduce * Arry[3].length))
//         console.log(remain)
//         F4 = (reduce * Arry[3].length)


//         const Constatnat = remain / (Arry[0].length + Arry[1].length + Arry[2].length)

//         F1 = (Arry[0].length * Constatnat) + F1
//         F2 = (Arry[1].length * Constatnat) + F2
//         F3 = (Arry[2].length * Constatnat) + F3
//         OBJECT.Frist1 = VAlue(F1, Arry[0])
//         OBJECT.Frist2 = VAlue(F2, Arry[1])
//         OBJECT.Frist3 = VAlue(F3, Arry[2])
//         OBJECT.Frist4 = VAlue(F4, Arry[3])
//         distribute(OBJECT,Arry)
//         console.log(OBJECT)
//       } else if ((OBJECT.Frist3 > (OBJECT.Frist2 || OBJECT.Frist1))) {
//         console.log(OBJECT)
//         console.log("Run2")
//         const reduce = Min - 5
//         const remain = (F3 - (reduce * Arry[2].length))
//         console.log(remain, "remain")
//         F3 = (reduce * Arry[2].length)


//         const Constatnat = remain / (Arry[0].length + Arry[1].length)
//         console.log(Constatnat, "conatr")
//         F1 = (Arry[0].length * Constatnat) + F1
//         F2 = (Arry[1].length * Constatnat) + F2

//         OBJECT.Frist1 = VAlue(F1, Arry[0])
//         OBJECT.Frist2 = VAlue(F2, Arry[1])
//         OBJECT.Frist3 = VAlue(F3, Arry[2])
//         distribute(OBJECT,Arry)
//         console.log(OBJECT)
//       } else if ((OBJECT.Frist2 > OBJECT.Frist1)) {
//         console.log(OBJECT)
//         console.log("Run3")
//         const reduce = Min - 5
//         const remain = (F2 - (reduce * Arry[1].length))
//         console.log(remain, "remain")
//         F2 = (reduce * Arry[1].length)
//         const Constatnat = remain / (Arry[0].length + Arry[1].length)
//         console.log(Constatnat, "conatr")
//         F1 = (Arry[0].length * Constatnat) + F1
//         F2 = (Arry[1].length * Constatnat) + F2

//         OBJECT.Frist1 = VAlue(F1, Arry[0])
//         OBJECT.Frist2 = VAlue(F2, Arry[1])
//         distribute(OBJECT,Arry)
//         console.log(OBJECT)
//       }
//       console.log(OBJECT)


//     } 

//     return   OBJECT
//   }

//   const Redesign = (Resiisobj,Arry) => {
//     console.log(Resiisobj)
//     let Constatnat = 0
//     if (Resiisobj["Frist1"] > 500) {
//       Constatnat = (Resiisobj["Frist1"] - 500) + Constatnat

//       Resiisobj.Frist1 = 500
//     }
//     else if (Resiisobj["Frist2"] > 300) {
//       Constatnat = Constatnat + (Resiisobj["Frist2"] - 300)
//       Resiisobj.Frist2 = 300
//     }
//     else if (Resiisobj["Frist3"] > 200) {
//       Constatnat = Constatnat + (Resiisobj["Frist3"] - 200)
//       Resiisobj.Frist3 = 200
//     }
//     console.log(Constatnat)
//     Resiisobj.Frist4 = VAlue(((Constatnat + (Resiisobj.Frist4 * Arry[3].length))), Arry[3])
//      return Resiisobj

//   }


// const Lastdistrubutiion  =() => {
//   const Last = [];
//   getcatorgay.forEach((x,y) => {
//          console.log(y)
//     let OBJECT = {
//       Frist1: VAlue(F1, x[0])  === (Infinity || null || undefined || 0 )? 0 : VAlue(F1, x[0]),
//       Frist2: VAlue(F2, x[1])  === (Infinity || null || undefined || 0 )? 0 : VAlue(F2, x[1]),
//       Frist3: VAlue(F3, x[2])  === (Infinity || null || undefined || 0 )? 0 : VAlue(F3, x[2]) ,
//       Frist4: VAlue(F4, x[3]) === (Infinity || null || undefined || 0 )? 0 : VAlue(F4, x[3])
//     }
//    const Coinfindout =  Redesign((distribute(OBJECT, x)),x)
//    Last.push(Coinfindout);
//    console.log(Coinfindout)
//     Object.keys(Coinfindout).map((X,Y) => {
//       const value = Coinfindout[X]
//       console.log(value)
//       x[Y].map((z) => {
//         z.coin = value
//         console.log(z) 
//       })

//     })
//   })
//   return Last
// }

// const Final = Lastdistrubutiion()
// console.log(Final)

// const LevelUp = () => {
//   const get = getcatorgay.forEach((x) => {
//    return   [...x] 
//      })

// }
// const extractedArray = getcatorgay.map(subArray => {
//   const Minarry = []
//   subArray.map((x) => {
//     x.map((z) => {
//       Minarry.push(z)
//     })
//   })
//   return Minarry
// });



// users.map((x) => {
//   const  id = x.id 

//   extractedArray.map((Z) => {
//     Z.map((Y) => {
//      if( Y.id == id){
//       const Gamenae =  Y.gameName
//       if((  x[Gamenae].score) !== 0  ){
//         x[Gamenae].coin = Y.coin

//       }

//      } 
//     })
//   })

// })
// console.log(users)
// const SaveCoinData = async () => {

//   users.map(async (x) => {
//     const userId = x.id;
//   const userRef = collection(db, "users");
//   const q = query(userRef, where("id", "==", userId));
//   const querySnapshot = await getDocs(q);

//   if (!querySnapshot.empty) {
//     const doc = querySnapshot.docs[0];
//     const docRef = doc.ref;

//     const updatedData = x

//     await updateDoc(docRef, updatedData);
//     console.log("Document successfully updated!");
//   } else {
//     console.log("Document not found!");
//   }
//   })
// };


// SaveCoinData()


//   //






//   // Calculate total coins to be distributed


//   // Create a new document with the current date as the ID
// const currentDate = new Date();
// const formattedDate = currentDate.toLocaleDateString();
// const competitionResultsRef = collection(db, 'competition_results');
// const distributions = {}
// await addDoc(competitionResultsRef, {
//   date: formattedDate,
//   users: users,
//   distributions: distributions
// });
//   console.log('Competition results and point distribution updated successfully.');

//   return null;
// }

export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  Signout,
  Savedata,
  // Distrubutrcoin,
  Getrankdata,
  onAuthStateChanged,
  Getallscore,
  Creatuser
};
