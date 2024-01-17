/* === Imports === */
import { initializeApp } from "firebase/app"

/* === Firebase Setup === */
const firebaseConfig = {
    apiKey: "AIzaSyBM1JtWaj4B_RyDqfnl9yqULGf3U0L33Sk",
    authDomain: "moody-8f7be.firebaseapp.com",
    projectId: "moody-8f7be",
    storageBucket: "moody-8f7be.appspot.com"
}

const app = initializeApp(firebaseConfig)

/* Challenge: Console log the projectId by using app.options.projectId */

/* === UI === */

/* == UI - Elements == */

const viewLoggedOut = document.getElementById("logged-out-view")
const viewLoggedIn = document.getElementById("logged-in-view")

const signInWithGoogleButtonEl = document.getElementById("sign-in-with-google-btn")

const emailInputEl = document.getElementById("email-input")
const passwordInputEl = document.getElementById("password-input")

const signInButtonEl = document.getElementById("sign-in-btn")
const createAccountButtonEl = document.getElementById("create-account-btn")

/* == UI - Event Listeners == */

signInWithGoogleButtonEl.addEventListener("click", authSignInWithGoogle)

signInButtonEl.addEventListener("click", authSignInWithEmail)
createAccountButtonEl.addEventListener("click", authCreateAccountWithEmail)

/* === Main Code === */

showLoggedOutView()

/* === Functions === */

/* = Functions - Firebase - Authentication = */

function authSignInWithGoogle() {
    console.log("Sign in with Google")
}

function authSignInWithEmail() {
    console.log("Sign in with email and password")
}

function authCreateAccountWithEmail() {
    console.log("Sign up with email and password")
}

/* == Functions - UI Functions == */

function showLoggedOutView() {
    hideElement(viewLoggedIn)
    showElement(viewLoggedOut)
}

function showLoggedInView() {
    hideElement(viewLoggedOut)
    showElement(viewLoggedIn)
}

function showElement(element) {
    element.style.display = "flex"
}

function hideElement(element) {
    element.style.display = "none"
}
import { initializeAppCheck, getToken } from 'firebase/app-check';

const appCheck = initializeAppCheck(
    app,
    { provider: provider } // ReCaptchaV3Provider or CustomProvider
);

const callApiWithAppCheckExample = async () => {
  let appCheckTokenResponse;
  try {
      appCheckTokenResponse = await getToken(appCheck, /* forceRefresh= */ false);
  } catch (err) {
      // Handle any errors if the token was not retrieved.
      return;
  }

  // Include the App Check token with requests to your server.
  const apiResponse = await fetch('https://yourbackend.example.com/yourApiEndpoint', {
      headers: {
          'X-Firebase-AppCheck': appCheckTokenResponse.token,
      }
  });

  // Handle response from your backend.
};{
    "hosting": {
      "public": "public",
      "ignore": [
        "firebase.json",
        "**/.*",
        "**/node_modules/**"
      ]
    },
    "firestore": {
        "rules": "firestore.rules",
        "indexes": "firestore.indexes.json"
    },
    "functions": {
      "predeploy": [
        "npm --prefix \"$RESOURCE_DIR\" run lint",
        "npm --prefix \"$RESOURCE_DIR\" run build"
      ]
    }
  }