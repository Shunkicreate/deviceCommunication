// // import socialMediaAuth from './service/auth';
// // import { googleProvider } from './config/authMethods';
// // const authLogin = () => {
// //   const handleOnClick = async (provider) => {
// //     const res = await socialMediaAuth(provider);
// //     console.log(res);
// //   }
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <button onClick={() => handleOnClick(googleProvider)}>google</button>
// //       </header>
// //     </div>
// //   );
// // }
// // export default authLogin;
// import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

// const clickButton = () => {
//   const provider = new GoogleAuthProvider()

//   const auth = getAuth()
//   signInWithPopup(auth, provider)
//     .then((result) => {
//       console.log('Googleアカウントでログインしました。')
//     }).catch((error) => {
//       console.error(error)
//     })
// }

// export const AuthLogin = () => {
//   return (
//     <div>
//       <button onClick={clickButton}>Googleアカウントでログイン</button>
//     </div>
//   );
// }

// export default AuthLogin;