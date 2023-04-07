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
    projectId: "wordle-99fb9",
    storageBucket: "wordle-99fb9.appspot.com",
    messagingSenderId: "543055598072",
    appId: "1:543055598072:web:83f1a768a753adc068460d",
    measurementId: "G-B33XG7DQLP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);




const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();


const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        var userId = user.uid;
        const q = query(collection(db, "users"), where("id", "==", userId));
        console.log(q)

        const querySnapshot = await getDocs(q);
        console.log(querySnapshot)
        if(querySnapshot.size === 0  ){
            
                const docRef = await addDoc(collection(db, "users"), {
                    id: userId,
                  name: user.displayName,
                  reactiontime: 0,
                  numbermemory:0,
                  sequencememory:0,
                   verbalmemory:0,
                   visualmemory:0,
                   wordmemory:0,
                });
    
            localStorage.setItem("user", JSON.stringify(user))
    
                console.log("Document written with ID: ", user);
                 return {
                    loged:true
                 }
        }else{
         
            localStorage.setItem("user", JSON.stringify(user))
            return {
                loged:true
             }
        }
      

     

        setTimeout(() => {
            //   window.location.href = "../"

        }, 2000)

    } catch (err) {
        return err
    }
};



const logInWithEmailAndPassword = async (email, password) => {
    console.log(email, password);
    try {
        const result = await signInWithEmailAndPassword(auth, email, password);

        const q = query(collection(db, "users"), where("id", "==", result.user.uid));
        const querySnapshot = await getDocs(q);

        if (querySnapshot) {
            querySnapshot.forEach((doc) => {
                const data = doc.data()
                console.log(doc.id, " => ",);
                const User = {
                    id: data.uid,
                    name: data.name
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
        console.log(error);
        return error;
    }
};


const registerWithEmailAndPassword = async (displayName, email, password) => {
    console.log(displayName)
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password,displayName);
        console.log(res)
        localStorage.setItem("user", JSON.stringify(res.user))

        const docRef = await addDoc(collection(db, "users"), {
            id: res.user.uid,
          name: displayName,
          reactiontime: 0,
          numbermemory:0,
          sequencememory:0,
           verbalmemory:0,
           visualmemory:0,
           wordmemory:0,
        });


         
        setTimeout(() => {
            window.location.href = "/"

        }, 1000)
     return res

    } catch (err) {
        console.error(err);
        return (err);
    }
};

const Savedata =async (id,updateitem ,score) => {
   
    const userRef =  query(collection(db, "users"), where("id", "==", id));
    const querySnapshot = await getDocs(userRef);
if (querySnapshot.docs.length > 0) {

    const userRef = querySnapshot.docs[0].ref;
    console.log(querySnapshot.docs[0].data())
    const updateObj = {
      [updateitem]: score
    };
    await updateDoc(userRef, updateObj);
    
    console.log("Document successfully updated!");
  } else {
    console.log("Document not found!");
  }
   }

   const Getallscore = async(id) => {
    const userRef =  query(collection(db, "users"), where("id", "==", id));
    const querySnapshot = await getDocs(userRef);
if (querySnapshot.docs.length > 0) {
    const Data = querySnapshot.docs[0].data()
    return Data
   
  } else {
    console.log("Document not found!");
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
    console.log("i")
    localStorage.clear();

    signOut(auth)
        .then(() => {
            // Perform some action after sign out
            console.log("User signed out successfully");
            // For example, you can navigate to a different page or reload the current page
            window.location.reload();
        })
        .catch((error) => {
            // Handle errors that occur during sign out
            console.error(error);
        });
};
export {
    auth,
    db,
    signInWithGoogle,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    sendPasswordReset,
    Signout,
    Savedata,
    onAuthStateChanged,
    Getallscore
};
