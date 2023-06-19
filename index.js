// import tools we need from firebase admin library
import { initializeApp, cert } from "firebase-admin/app";
import {getFirestore} from "firebase-admin/firestore"

// import our credentials from secrets.js
import { creds } from "./secrets.js";

// connect to our Firebase project (need credentials)
initializeApp({
    credential: cert(creds),
});

// connect to the Firestore database (just ask)
const db = getFirestore();
// CRUD

// const hoodie = {
//     brand: "Adidas" ,
//     style: 'hoodie',
//     color: 'pink',
//     size: 'L',
//     price: 59.99

// }

// // lets add a shirt to our clothing collection // CREATE
// db.collection('clothing').add(hoodie)
//     .then(doc => {
//         console.log("Clothing added:" + doc.id);
//     })
//     .catch(console.error);

//now that we have some data let's read (get) them // READ ALL

// db.collection('clothing').get()
//     .then(collection => {
//         const clothing = collection.docs.map(doc => {
//             let item = doc.data()
//             item.id = doc.id
//             return item
//         })    
//         console.table(clothing)
//     })
//     .catch(console.error)

// // lets say i want to find all of the clothing items that are >= 49.99 // READ SOME
// db.collection('clothing')
// .where('price','>=', 49.99)
// .get()

// .then(collection => {
//     const clothing = collection.docs.map(doc => ({...doc.data(), id: doc.id}))
//     console.table(clothing);
// })
// .catch(console.error)

//now lets get a single document by id (we will use await just to show) // READ ONE
// const doc= await db.collection('clothing').doc('OOB9l6OfBOXDMS7wF7sN').get()
// .catch(console.error)
// const clothingItem = {...doc.data(), id:doc.id};
// console.table(clothingItem);

// lets update a single document : // UPDATE
// db.collection('clothing').doc('OOB9l6OfBOXDMS7wF7sN')
// .update({ color: 'red', rating: 4.9})
// .then(doc => console.log('updated doc:' + doc.id))
// .catch(console.error)

// even though we rarely delete, heres how: // DELETE

// db.collection('clothing').doc('OOB9l6OfBOXDMS7wF7sN')
// .delete()

