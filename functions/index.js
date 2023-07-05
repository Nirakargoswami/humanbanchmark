const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

const { onRequest } = require('firebase-functions/v2/https');
const logger = require('firebase-functions/logger');

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

exports.helloWorld = onRequest((request, response) => {
  logger.info('Hello logs!', { structuredData: true });
  response.send('Hello from Firebase!');
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
  const usersSnapshot = await db.collection('users').get();
  const users = usersSnapshot.docs.map((doc) => doc.data());
  // Sort users by their scores in descending order

  let numbermemory
  let reactiontime
  let sequencememory
  let visualmemory


  let gamedata = ["numbermemory", "reactiontime", "sequencememory", "visualmemory"]

  gamedata.map(x => {
    if (x === "numbermemory") {
      numbermemory = users.payload.data.sort((a, b) => b[x].score
        - a[x].score
      );
    } else if (x === "reactiontime") {
      reactiontime = users.sort((a, b) => b[x].score
        + a[x].score
      );
    } else if (x === "sequencememory") {
      sequencememory = users.payload.data.sort((a, b) => b[x].score
        - a[x].score
      );
    } else if (x === "visualmemory") {
      visualmemory = users.payload.data.sort((a, b) => b[x].score
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
  keys.map((x) => {
    const Soretd = [
      [],
      [],
      [],
      []
    ]

    let max = Math.max(point[x])
    let count = 0
    let rest
    point[x].map((x, y) => {
      if (count !== 2) {
        if (x === max) {
          f[count].push(x)
        } else {
          max = x
          f[count + 1].push(x)
          count++
        }
      } else {
        f[3].push(x)
      }
    })

  })

  return Soretd
}
  
const getcatorgay = Catotgary()

getcatorgay.map((x) => {
  
})


  // Calculate total coins to be distributed
  const totalCoins = 1500;

  // Create a new document with the current date as the ID
  const currentDate = new Date();
  const competitionResultsRef = db.collection('competition_results').doc(currentDate.toISOString());

  // Assign points and coins for each user based on their place
  const distributions = {};

  sortedUsers.forEach(async (user, index) => {
    const userRef = db.collection('users').doc(user.userId);

    let points;
    let coins;

    if (index === 0) {
      points = totalCoins;
      coins = Math.round(points / 10);
      if (!distributions['first']) {
        distributions['first'] = { coins, rupees: coins };
      } else {
        distributions['first'].coins += coins;
        distributions['first'].rupees += coins;
      }
    } else if (index === sortedUsers.length - 1) {
      points = 0;
      coins = 0;
      if (!distributions['last']) {
        distributions['last'] = { coins, rupees: coins };
      } else {
        distributions['last'].coins += coins;
        distributions['last'].rupees += coins;
      }
    } else {
      // Calculate points and coins for other users
      const remainingUsers = sortedUsers.length - 2; // Excluding first and last place users
      const remainingCoins = totalCoins - coins; // Remaining coins for distribution
      points = Math.round((remainingCoins / remainingUsers) * (remainingUsers - index));
      coins = Math.round(points / 10);
    }

    await userRef.update({ points, coins });
  });

  // Set the user scores and coin distributions in the document
  await competitionResultsRef.set({
    date: currentDate,
    users: sortedUsers,
    distributions: distributions
  });

  console.log('Competition results and point distribution updated successfully.');

  return null;
});

