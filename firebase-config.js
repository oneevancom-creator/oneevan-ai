// ==========================================
// OneEvan AI - Firebase Configuration
// ==========================================

// Firebase Project Configuration

const firebaseConfig = {

    apiKey: "AIzaSyDw-DTFJ-oYEPcde26VHeR1BLg2drKM3XY",

    authDomain:
        "oneevan-ai-admin.firebaseapp.com",

    projectId:
        "oneevan-ai-admin",

    storageBucket:
        "oneevan-ai-admin.firebasestorage.app",

    messagingSenderId:
        "54820542310",

    appId:
        "1:54820542310:web:dae00b8c4cdf6a23265aa7",

    measurementId:
        "G-3TQNP6VPPM"
};


// ==========================================
// Initialize Firebase
// ==========================================

const firebaseApp =
    firebase.initializeApp(firebaseConfig);


// ==========================================
// Firebase Authentication
// ==========================================

const auth =
    firebase.auth();


// ==========================================
// Firebase Firestore Database
// ==========================================

const db =
    firebase.firestore();


// ==========================================
// OneEvan AI Firebase Ready
// ==========================================

console.log(
    "🔥 OneEvan AI Firebase Connected Successfully!"
);

console.log(
    "📦 Firestore Database Ready"
);

console.log(
    "🔐 Authentication Ready"
);
