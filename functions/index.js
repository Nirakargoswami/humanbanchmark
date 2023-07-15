const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

const { onRequest } = require('firebase-functions/v2/https');
const logger = require('firebase-functions/logger');

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

exports.helloWorld = onRequest( (request, response) => {

  logger.info('Hello logs!', { structuredData: true });


  response.send('Hello from !');
});

/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */


// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
exports.runCompetition = functions.pubsub.schedule('every 24 hours').onRun(async (context) => {
  const db = admin.firestore();

  // Get all users
 
  // Sort users by their scores in descending order
  const Distrubutrcoin = async () => {
    const userRef = query(collection(db, "users"));
    const querySnapshot = await getDocs(userRef);
    let users
    if (querySnapshot.docs.length > 0) {
      users = querySnapshot.docs.map((x) => x.data())
    }
  
    // Sort users by their scores in descending order
    let numbermemory
    let reactiontime
    let sequencememory
    let visualmemory
  
  
    let gamedata = ["numbermemory", "reactiontime", "sequencememory", "visualmemory"]
    const Sortarry = (data, name) => {
      const sortedArray = data.sort((a, b) => b[name].score
        - a[name].score
      );
      return sortedArray
    }
    gamedata.forEach(x => {
      const data = users.slice();
      if (x === "numbermemory") {
        numbermemory = data.sort((a, b) => b[x].score
          - a[x].score
        );
      } else if (x === "reactiontime") {
        reactiontime = data.sort((a, b) => b[x].score
          + a[x].score
        );
      } else if (x === "sequencememory") {
        sequencememory = data.sort((a, b) => b[x].score
          - a[x].score
        );
      } else if (x === "visualmemory") {
        visualmemory = data.sort((a, b) => b[x].score
          - a[x].score
        );
      }
    })
  
    const point = {
      numbermemory: numbermemory,
      reactiontime: reactiontime,
      sequencememory: sequencememory,
      visualmemory: visualmemory
  
    }
    const keys = Object.keys(point);
  
    const Catotgary = () => {
  
      const Substrekted = keys.map((X) => {
        let Soretd = [
          [],
          [],
          [],
          []
        ]
        let count = 0
          let max = point[X][0][X].score
        point[X].map((x, y) => {
          
          if (count !== 3) {
             if (x[X].score == max) {
              Soretd[count].push({ id: x.id, score: x[X].score, coin: x[X].coin ,gameName : X ,name : x.name })
            } else {
              max = x[X].score
              Soretd[count + 1].push({ id: x.id, score: x[X].score, coin: x[X].coin ,gameName : X ,name : x.name })
              count =  count + 1
             
            }
          } else {
      
            Soretd[3].push({ id: x.id, score: x[X].score, coin: x[X].coin ,gameName : X ,name : x.name })
          }
  
        })
        return Soretd
      })
  
      return Substrekted
    }
  
    const getcatorgay = Catotgary()
    // console.log(getcatorgay, ":::L")
    let F1 = 300
    let F2 = 200
    let F3 = 100
    let F4 = 1000
  
    const VAlue = (value, Arry) => {
      return Math.round(value / (Arry.length === 0 ? 0 : Arry.length))
    }
  
    const distribute = (OBJECT,Arry) => {
      const Max = Math.max(...Object.values(OBJECT).map((x) =>
        x
      ))
      const Min = Math.min(...Object.values(OBJECT).map((x) =>
        x
      ))
      if ((OBJECT.Frist1 > OBJECT.Frist2 > OBJECT.Frist3 > OBJECT.Frist4) == false) {
  
        if ((OBJECT.Frist4 > (OBJECT.Frist3 || OBJECT.Frist2 || OBJECT.Frist1))) {
          const reduce = Min - 5
          const remain = (F4 - (reduce * Arry[3].length))
          F4 = (reduce * Arry[3].length)
          const Constatnat = remain / (Arry[0].length + Arry[1].length + Arry[2].length)
          F1 = (Arry[0].length * Constatnat) + F1
          F2 = (Arry[1].length * Constatnat) + F2
          F3 = (Arry[2].length * Constatnat) + F3
          OBJECT.Frist1 = VAlue(F1, Arry[0])
          OBJECT.Frist2 = VAlue(F2, Arry[1])
          OBJECT.Frist3 = VAlue(F3, Arry[2])
          OBJECT.Frist4 = VAlue(F4, Arry[3])
          distribute(OBJECT,Arry)
        } else if ((OBJECT.Frist3 > (OBJECT.Frist2 || OBJECT.Frist1))) {
          const reduce = Min - 5
          const remain = (F3 - (reduce * Arry[2].length))
          F3 = (reduce * Arry[2].length)
          const Constatnat = remain / (Arry[0].length + Arry[1].length)
          F1 = (Arry[0].length * Constatnat) + F1
          F2 = (Arry[1].length * Constatnat) + F2
          OBJECT.Frist1 = VAlue(F1, Arry[0])
          OBJECT.Frist2 = VAlue(F2, Arry[1])
          OBJECT.Frist3 = VAlue(F3, Arry[2])
          distribute(OBJECT,Arry)
        } else if ((OBJECT.Frist2 > OBJECT.Frist1)) {
          const reduce = Min - 5
          const remain = (F2 - (reduce * Arry[1].length))
          F2 = (reduce * Arry[1].length)
          const Constatnat = remain / (Arry[0].length + Arry[1].length)
          F1 = (Arry[0].length * Constatnat) + F1
          F2 = (Arry[1].length * Constatnat) + F2
          OBJECT.Frist1 = VAlue(F1, Arry[0])
          OBJECT.Frist2 = VAlue(F2, Arry[1])
          distribute(OBJECT,Arry)
        }
      } 
  
      return   OBJECT
    }
  
    const Redesign = (Resiisobj,Arry) => {
      let Constatnat = 0
      if (Resiisobj["Frist1"] > 300) {
        Constatnat = (Resiisobj["Frist1"] - 300) + Constatnat
        Resiisobj.Frist1 = 300
      }
      else if (Resiisobj["Frist2"] > 200) {
        Constatnat = Constatnat + (Resiisobj["Frist2"] - 200)
        Resiisobj.Frist2 = 200
      }
      else if (Resiisobj["Frist3"] > 100) {
        Constatnat = Constatnat + (Resiisobj["Frist3"] - 100)
        Resiisobj.Frist3 = 100
      }
      Resiisobj.Frist4 = VAlue(((Constatnat + (Resiisobj.Frist4 * Arry[3].length))), Arry[3])
       return Resiisobj
    }
  
    
  const Lastdistrubutiion  =() => {
    const Last = [];
    getcatorgay.forEach((x,y) => {
      let OBJECT = {
        Frist1: VAlue(F1, x[0])  === (Infinity || null || undefined || 0 )? 0 : VAlue(F1, x[0]),
        Frist2: VAlue(F2, x[1])  === (Infinity || null || undefined || 0 )? 0 : VAlue(F2, x[1]),
        Frist3: VAlue(F3, x[2])  === (Infinity || null || undefined || 0 )? 0 : VAlue(F3, x[2]) ,
        Frist4: VAlue(F4, x[3]) === (Infinity || null || undefined || 0 )? 0 : VAlue(F4, x[3])
      }
     const Coinfindout =  Redesign((distribute(OBJECT, x)),x)
     Last.push(Coinfindout);
      Object.keys(Coinfindout).map((X,Y) => {
        const value = Coinfindout[X]
        x[Y].map((z) => {
          z.coin = value
                })
         
      })
    })
    return Last
  }
  
  const Final = Lastdistrubutiion()  
  const LevelUp = () => {
    const get = getcatorgay.forEach((x) => {
     return   [...x] 
       })
       
  }
  const extractedArray = getcatorgay.map(subArray => {
    const Minarry = []
    subArray.map((x) => {
      x.map((z) => {
        Minarry.push(z)
      })
    })
    return Minarry
  });
  
  
  
  users.map((x) => {
    const  id = x.id 
   
    extractedArray.map((Z) => {
      Z.map((Y) => {
       if( Y.id == id){
        const Gamenae =  Y.gameName
        if((  x[Gamenae].score) !== 0  ){
          x[Gamenae].coin = Y.coin
  
        }
  
       } 
      })
    })
  
  })
  Distrubutrcoin()
  const SaveCoinData = async () => {
  
    users.map(async (x) => {
      const userId = x.id;
    const userRef = collection(db, "users");
    const q = query(userRef, where("id", "==", userId));
    const querySnapshot = await getDocs(q);
  
    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      const docRef = doc.ref;
  
      const updatedData = x
  
      await updateDoc(docRef, updatedData);
      // console.log("Document successfully updated!");
    } else {
    }
    })
  };
  
 
  SaveCoinData()
  const currentDate = new Date();
const formattedDate = currentDate.toLocaleDateString();
const competitionResultsRef = collection(db, 'competition_results');
const distributions = {}
await addDoc(competitionResultsRef, {
  date: formattedDate,
  users: users,
  distributions: distributions
});

// console.log('Competition results and point distribution updated successfully.');
return null;
 
 
 
}


  // Set the user scores and coin distributions in the document


  return null;
});

