// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
  getDoc,
  doc
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
    console.log(user)

    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const querySnapshot = await getDocs(q);

    if (querySnapshot) {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        const data = doc.data()
        const User = {
          id: data.uid,

          name: data.name
        }
        localStorage.setItem("user", JSON.stringify(User))

      });
    }

    setTimeout(() => {
      window.location.href = "../"

    }, 2000)
    
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};


const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password).then(async (result) => {
      if (result) {

        const q = query(collection(db, "users"), where("uid", "==", result.user.uid));

        const querySnapshot = await getDocs(q);

        if (querySnapshot) {
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
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
          window.location.href = "../"

        }, 2000)

      } else {
        // toast.error(result.body, {
        //   position: "bottom-right",
        //   autoClose: 5000,
        // })
      }
    })
      .catch(error => console.log('error', error));
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    setTimeout(() => {
      window.location.href = "../login"

    }, 1000)
    

  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const sendPasswordReset = async (email ) => {
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

  signOut(auth);
};
export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  Signout,
};
