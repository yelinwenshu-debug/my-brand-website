import { db } from '../firebase';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';

export const saveUserToFirestore = async (user) => {
  if (!user) return;

  const userRef = doc(db, 'users', user.uid);
  
  // Save or update user data
  try {
    await setDoc(userRef, {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      lastLoginAt: serverTimestamp()
    }, { merge: true });
    console.log('User data saved to Firestore successfully');
  } catch (error) {
    console.error('Error saving user to Firestore:', error);
  }
};
