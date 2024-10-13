import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// //import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyABLTP-Jd-VnyBAjs8QKUmM9aM2UWWG34o",
//   authDomain: "senior-project-fall-2024.firebaseapp.com",
//   projectId: "senior-project-fall-2024",
//   storageBucket: "senior-project-fall-2024.appspot.com",
//   messagingSenderId: "1092320932801",
//   appId: "1:1092320932801:web:7e6b36c4074baac9173540",
//   measurementId: "G-2BE5RSWEK5"
// };

// // Initialize Firebase
// const yup = initializeApp(firebaseConfig);
// //const analytics = getAnalytics(yup);

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"

const app = createApp(App)

app.use(router);
app.mount('#app');

