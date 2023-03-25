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
    updateDoc,
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
        var userId = user.uid;
       
        try {
            const docRef = await addDoc(collection(db, "users"), {
                id: userId,
              name: user.displayName,
              reactiontime: 0,
              sequencememory:0,
               verbalmemory:0,
               visualmemory:0,
               wordmemory:0,
            });

        localStorage.setItem("user", JSON.stringify(docRef))

            console.log("Document written with ID: ", docRef);
          } catch (e) {
            console.error("Error adding document: ", e);
          }

        // const q = query(collection(db, "users"), where("uid", "==", user.uid));
        // console.log(q)
        // const querySnapshot = await getDocs(q);
        // console.log(querySnapshot)
        // if (querySnapshot) {
        //     querySnapshot.forEach((doc) => {
        //         // doc.data() is never undefined for query doc snapshots
        //         const data = doc.data()
        //         const User = {
        //             id: data.uid,

        //             name: data.name
        //         }
        //         localStorage.setItem("user", JSON.stringify(User))

        //     });
        // }

        setTimeout(() => {
            //   window.location.href = "../"

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
          sequencememory:0,
           verbalmemory:0,
           visualmemory:0,
           wordmemory:0,
        });

        // setTimeout(() => {
        //     window.location.href = "../login"

        // }, 1000)


    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const Savedata =async (id,updateitem ,score) => {
    const userRef =  query(collection(db, "users"), where("id", "==", id));
    const querySnapshot = await getDocs(userRef);
console.log(querySnapshot)
if (querySnapshot.docs.length > 0) {
    const userRef = querySnapshot.docs[0].ref;
    const updateObj = {
      [updateitem]: score
    };
    await updateDoc(userRef, updateObj);
    console.log("Document successfully updated!");
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
    Savedata
};
