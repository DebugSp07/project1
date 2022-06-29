import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyCAmKr60xsecHd2NiHvNPSw_0VUw_kh--I",
    authDomain: "webl-c5e9a.firebaseapp.com",
    projectId: "webl-c5e9a",
    storageBucket: "webl-c5e9a.appspot.com",
    messagingSenderId: "160910243243",
    appId: "1:160910243243:web:de42f0b0075692fe4b4eee",
    measurementId: "G-6LWQ19Y3JD"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
