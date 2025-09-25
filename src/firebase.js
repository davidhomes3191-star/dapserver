import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCU24G56-43jXKPvSBysrY2q3Vd5GKp0Ic",
  authDomain: "fkaywork1.firebaseapp.com",
  projectId: "fkaywork1",
  storageBucket: "fkaywork1.firebasestorage.app",
  messagingSenderId: "903651475271",
  appId: "1:903651475271:web:12b4454c40082bfc365662",
  measurementId: "G-262LQ16X0N"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;