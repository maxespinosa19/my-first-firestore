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

// // lets add a shirt to our clothing collection
// db.collection('clothing').add(hoodie)
//     .then(doc => {
//         console.log("Clothing added:" + doc.id);
//     })
//     .catch(console.error);

//now that we have some data let's read (get) them

db.collection('clothing').get()
    .then(collection => {
        const clothing = collection.docs.map(doc => {
            let item = doc.data()
            item.id = doc.id
            return item
        })    
        console.table(clothing)
    })
    .catch(console.error)