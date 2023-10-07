import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//     apiKey:import.meta.env.VITE_APIKEY,
//     authDomain:import.meta.env.VITE_AUTHDOMAIN,
//     projectId:import.meta.env.VITE_PROJECTID,
//     storageBucket:import.meta.env.VITE_STORAGEBUCKET,
//     messagingSenderId:import.meta.env.VITE_MESSAGINGSENDERID,
//     appId:import.meta.env.VITE_APPID
// };
const firebaseConfig = {
    apiKey: "AIzaSyDI3wBOPEOI03yJzvKwE4Dw4FoZfJtt9CU",
    authDomain: "birthday-28a91.firebaseapp.com",
    projectId: "birthday-28a91",
    storageBucket: "birthday-28a91.appspot.com",
    messagingSenderId: "223461655346",
    appId: "1:223461655346:web:45a467ba775fb7f2f60d2b"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;