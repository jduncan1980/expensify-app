import * as firebase from "firebase";

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// // child removed
// database.ref("expenses").on("child_removed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// //child changed
// database.ref("expenses").on("child_changed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// //child added
// database.ref("expenses").on("child_added", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });
// database
//   .ref("expenses")
//   .once("value")
//   .then(snapshot => {
//     const expenses = [];
//     snapshot.forEach(childSnapshot => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });

// database.ref("expenses").on("value", snapshot => {
//   const expenses = [];
//   snapshot.forEach(childSnapshot => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// });

// database.ref("expenses").push({
//   description: "Rent",
//   note: "",
//   amount: 150000,
//   createdAt: 100
// });

// database.ref("notes/-LlnvauGLQYOrjlvH92k").update({
//   body: "Buy food"
// });

// database.ref("notes").push({
//   title: "Course Topic",
//   body: "Angular"
// });

// const firebaseNotes = {
//   notes: {
//     fasfsafadf: {
//       title: "First Note!",
//       body: "this is my note"
//     },
//     fsdafsafagg: {
//       title: "another Note!",
//       body: "this is my note"
//     }
//   }
// };

// const notes = [
//   {
//     id: "12",
//     title: "First Note!",
//     body: "this is my note"
//   },
//   {
//     id: "761ase",
//     title: "another Note!",
//     body: "this is my note"
//   }
// ];

// database.ref("notes").set(notes);

// database.ref().on("value", snapshot => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
// });

// database
//   .ref()
//   .once("value")
//   .then(snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(e => {
//     console.log(e);
//   });

// database
//   .ref()
//   .set({
//     name: "Jason Duncan",
//     age: 39,
//     stressLevel: 6,
//     job: {
//       title: "Software Developer",
//       company: "Google"
//     },
//     location: {
//       city: "Brooklyn",
//       country: "United States"
//     }
//   })
//   .then(() => {
//     console.log("Data is saved");
//   })
//   .catch(e => {
//     console.log("this failed", e);
//   });

// database.ref().update({
//   stressLevel: 9,
//   "job/company": "Amazon",
//   "location/city": "Seattle"
// });

// database.ref("isSingle").remove()
// .then (() => {
//   console.log('Data was removed.')
// })
// .catch(() => {
//   console.log('Data not removed.')
// })
