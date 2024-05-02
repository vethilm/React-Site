import './App.css';
import LandingPage from './components/Landingpage';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import Header from './components/Header';
import { useAuthState } from 'react-firebase-hooks/auth';
import {Route, Routes } from 'react-router-dom';
import ExplorePage from './components/ExplorePage';
import About from './components/About'

firebase.initializeApp({
  apiKey: "AIzaSyDVPWay2Gc8lPznuSeIpoobRtT1LvUbeB0",
  authDomain: "frontend-project-cc828.firebaseapp.com",
  projectId: "frontend-project-cc828",
  storageBucket: "frontend-project-cc828.appspot.com",
  messagingSenderId: "155524317177",
  appId: "1:155524317177:web:0589b4d3d1ba9ca0170728",
  measurementId: "G-JSP65TH12X"
});

const auth = firebase.auth();

function App() {

  const [user] = useAuthState(auth);

  return (

    <div className="App">
           <section>
        {user ? <Header  /> : <SignIn />}
        <SignOut />
      </section>
      <Routes>
        <Route path ="/" element={<About/>}></Route>
        <Route path ="/explore" element={<ExplorePage/>}></Route>
      </Routes>
 

    </div>

  );
}

function SignIn() {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
  <>
    <button className='sign-in' onClick={signInWithGoogle}>Sign in with Google</button>
    </>
  )
}

function  SignOut() {
  return auth.currentUser && (
    <button className='sign-out' onClick={() => auth.signOut()}>Sign Out</button>
  )
}


export default App;
