// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { ref, child, get, set } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD1FDJLZy_VfKaJznawAWbc9tTBJjjvO18",
    authDomain: "testeeng-6d68e.firebaseapp.com",
    databaseURL: "https://testeeng-6d68e-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "testeeng-6d68e",
    storageBucket: "testeeng-6d68e.appspot.com",
    messagingSenderId: "93592455855",
    appId: "1:93592455855:web:fe69ebc50265d25937225a"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);

//Write to db

function writePostData(database, postId, content, imgsrc) {
    
    set(ref(database, 'posts/' + postId), {
      content: content,
      imgsrc: imgsrc,
    });
  }

writePostData(database, 3, "some content", "https://www.google.com")

//Read from database

// Change "posts" and "1" for the data and the index (its index)

//You can put a curly bracket to use a variable instead of a string in  "{1}"

const dbRef = ref(getDatabase());
get(child(dbRef, `posts/${1}`)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});