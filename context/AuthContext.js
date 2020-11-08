import { createContext, useState, useEffect } from "react";
import { Magic } from "magic-sdk";
import { MAGIC_PUBLIC_KEY } from "../utils/urls";
import { useRouter } from "next/router";

const AuthContext = createContext();

let magic

export const AuthProvider = (props) => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  /**
   * Log the user in
   * @param {string} email 
   */
  const loginUser = async (email) => {
    try {
    //   await magic.auth.loginWithMagicLink({ email });
      setUser({ email });
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  /**
   * Log the user out
   */
  const logoutUser = async () => {
    try {
    //   await magic.user.logout();
      setUser(null);
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };
  
  /**
   * If user is logged in, get data and display it
   */
  const checkUserLoggedIn = async () => {
    try {
        const isLoggedIn = await magic.user.isLoggedIn();

        if (isLoggedIn) {
            const { email } = await magic.user.getMetadata();
            setUser({ email });
        }
    } catch (err) {
        console.log(err);
    }
  };

//   //Add this last as this is not needed until we need to fetch orders
//   const getToken = async () => {
//     try{
//       const token = await magic.user.getIdToken()
//       return token
//     } catch (err) {
//       console.log(err)
//     }
//   }

  /**
   * Reload user login on app refresh
   */
  useEffect(() => {
        magic = new Magic(MAGIC_PUBLIC_KEY)
        
        // checkUserLoggedIn()
  }, []);

  return (
    <AuthContext.Provider value={{ user, logoutUser, loginUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};


export default AuthContext