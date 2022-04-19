import React, { useEffect, useState } from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import 'firebase/auth'
const Signin = () => {
  const SigninFunc = () => {
    //   // Googleプロバイダオブジェクトのインスタンスを作成
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });

  }

  return (
    <div>
      <div className="login">
        <h1>ログインhehehhe</h1>
      </div>
      <div className="signin_button">
        <button onClick={() => SigninFunc()}
        />ajdlasjdlasjd
      </div>
    </div>
  );
}

export default Signin