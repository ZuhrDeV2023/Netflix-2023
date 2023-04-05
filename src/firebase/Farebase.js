import firebase from "firebase/app"
import "firebase/auth";

const config = firebase.initializeApp({
    apiKey: "AIzaSyAapEh4C9pvtBsCOdaCndpG_3JTMF5CXwM",
    authDomain: "zuhrdev-netflix-clone-10ee4.firebaseapp.com",
    projectId: "zuhrdev-netflix-clone-10ee4",
    storageBucket: "zuhrdev-netflix-clone-10ee4.appspot.com",
    messagingSenderId: "223282710939",
    appId: "1:223282710939:web:45df6562b9730570e5b93e"
});

export const auth = firebase.auth()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default config;