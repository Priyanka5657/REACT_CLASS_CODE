import {useContext} from 'react';
import {myloginContext} from "./LoginContext";

const AuthApp = () => {
    const {user,logout}= useContext(myloginContext);
  return (
    <>
    <h1>Auth App Data </h1>
    welcome : {user.name}
    <button onClick={logout} logout></button>
      
    </>
  )
}

export default AuthApp;
