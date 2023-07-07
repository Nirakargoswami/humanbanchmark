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
    console.log("fasfa")
    const usersSnapshot = await db.collection('users').get();
  let users = usersSnapshot.docs.map((doc) => doc.data());
    
   
  
    // Sort users by their scores in descending order
    console.log(users)
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
    console.log(point)
    const keys = Object.keys(point);
  
    const Catotgary = () => {
  
      console.log("fasdfasfda, 1")
      const Substrekted = keys.map((X) => {
        console.log("fasdfasfda, 2")
        let Soretd = [
          [],
          [],
          [],
          []
        ]
        point[X].map((x, y) => {
          let count = 0
          let max = point[X][0][X].score
  
          if (count !== 2) {
            if (x[X].score === max) {
              Soretd[count].push({ id: x.id, score: x[X].score, coin: x[X].coin ,gameName : X ,name : x.name })
            } else {
              max = x.score
              Soretd[count + 1].push({ id: x.id, score: x[X].score, coin: x[X].coin ,gameName : X ,name : x.name })
              count++
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
    console.log(getcatorgay, ":::L")
    let F1 = 300
    let F2 = 200
    let F3 = 100
    let F4 = 1000
  
    const VAlue = (value, Arry) => {
      return Math.round(value / (Arry.length === 0 ? 0 : Arry.length))
    }
  
    const distribute = (OBJECT,Arry) => {
      console.log("Dobe")
      console.log(OBJECT,Arry)
      const Max = Math.max(...Object.values(OBJECT).map((x) =>
        x
      ))
      const Min = Math.min(...Object.values(OBJECT).map((x) =>
        x
      ))
      console.log((OBJECT.Frist1 > OBJECT.Frist2 > OBJECT.Frist3 > OBJECT.Frist4))
      if ((OBJECT.Frist1 > OBJECT.Frist2 > OBJECT.Frist3 > OBJECT.Frist4) == false) {
  
        if ((OBJECT.Frist4 > (OBJECT.Frist3 || OBJECT.Frist2 || OBJECT.Frist1))) {
          console.log((OBJECT.Frist4 > (OBJECT.Frist3 || OBJECT.Frist2 || OBJECT.Frist1)))
          console.log("Run1")
          const reduce = Min - 5
  
          const remain = (F4 - (reduce * Arry[3].length))
          console.log(remain)
          F4 = (reduce * Arry[3].length)
  
  
          const Constatnat = remain / (Arry[0].length + Arry[1].length + Arry[2].length)
  
          F1 = (Arry[0].length * Constatnat) + F1
          F2 = (Arry[1].length * Constatnat) + F2
          F3 = (Arry[2].length * Constatnat) + F3
          OBJECT.Frist1 = VAlue(F1, Arry[0])
          OBJECT.Frist2 = VAlue(F2, Arry[1])
          OBJECT.Frist3 = VAlue(F3, Arry[2])
          OBJECT.Frist4 = VAlue(F4, Arry[3])
          distribute(OBJECT)
        } else if ((OBJECT.Frist3 > (OBJECT.Frist2 || OBJECT.Frist1))) {
          console.log("Run2")
          const reduce = Min - 5
          const remain = (F3 - (reduce * Arry[2].length))
          console.log(remain, "remain")
          F3 = (reduce * Arry[2].length)
  
  
          const Constatnat = remain / (Arry[0].length + Arry[1].length)
          console.log(Constatnat, "conatr")
          F1 = (Arry[0].length * Constatnat) + F1
          F2 = (Arry[1].length * Constatnat) + F2
  
          OBJECT.Frist1 = VAlue(F1, Arry[0])
          OBJECT.Frist2 = VAlue(F2, Arry[1])
          OBJECT.Frist3 = VAlue(F3, Arry[2])
          distribute(OBJECT)
        } else if ((OBJECT.Frist2 > OBJECT.Frist1)) {
          console.log("Run3")
          const reduce = Min - 5
          const remain = (F2 - (reduce * Arry[1].length))
          console.log(remain, "remain")
          F2 = (reduce * Arry[1].length)
          const Constatnat = remain / (Arry[0].length + Arry[1].length)
          console.log(Constatnat, "conatr")
          F1 = (Arry[0].length * Constatnat) + F1
          F2 = (Arry[1].length * Constatnat) + F2
  
          OBJECT.Frist1 = VAlue(F1, Arry[0])
          OBJECT.Frist2 = VAlue(F2, Arry[1])
          distribute(OBJECT)
        }
        console.log(OBJECT)
  
  
      } 
  
      return   OBJECT
    }
  
    const Redesign = (Resiisobj,Arry) => {
      console.log(Resiisobj)
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
      console.log(Constatnat)
      Resiisobj.Frist4 = VAlue(((Constatnat + (Resiisobj.Frist4 * Arry[3].length))), Arry[3])
       return Resiisobj
    }
  const Lastdistrubutiion  =() => {
    const Last = [];
    getcatorgay.forEach((x,y) => {
           console.log(y)
      let OBJECT = {
        Frist1: VAlue(F1, x[0])  === (Infinity || null || undefined || 0 )? 0 : VAlue(F1, x[0]),
        Frist2: VAlue(F2, x[1])  === (Infinity || null || undefined || 0 )? 0 : VAlue(F2, x[1]),
        Frist3: VAlue(F3, x[2])  === (Infinity || null || undefined || 0 )? 0 : VAlue(F3, x[2]) ,
        Frist4: VAlue(F4, x[3]) === (Infinity || null || undefined || 0 )? 0 : VAlue(F4, x[3])
      }
     const Coinfindout =  Redesign((distribute(OBJECT, x)),x)
     Last.push(Coinfindout);
     console.log(Coinfindout)
      Object.keys(Coinfindout).map((X,Y) => {
        const value = Coinfindout[X]
        console.log(value)
        x[Y].map((z) => {
          z.coin = value
          console.log(z) 
        })
         
      })
    })
    return Last
  }
  
  const Final = Lastdistrubutiion()
  console.log(Final)
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
  console.log(users)
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
      console.log("Document successfully updated!");
    } else {
      console.log("Document not found!");
    }
    })
  };
  
  SaveCoinData()
    //
    // Calculate total coins to be distributed
    // Create a new document with the current date as the ID
    const currentDate = new Date();
    const competitionResultsRef = db.collection('competition_results').doc(currentDate.toISOString());
  
    // Assign points and coins for each user based on their place
    const distributions = {};
    // Set the user scores and coin distributions in the document
    await competitionResultsRef.set({
      date: currentDate,
      users: users,
      distributions: distributions
    });
  
    console.log('Competition results and point distribution updated successfully.');
  
    return null;
  }
  
  Distrubutrcoin()


  // Set the user scores and coin distributions in the document
  await competitionResultsRef.set({
    date: currentDate,
    users: sortedUsers,
 
  });

  console.log('Competition results and point distribution updated successfully.');

  return null;
});

