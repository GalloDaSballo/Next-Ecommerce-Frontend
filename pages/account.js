import { useContext } from "react";
import Link from 'next/link'
import AuthContext from "../context/AuthContext";


export default () => {

    const {user, logoutUser} = useContext(AuthContext)

    if(!user){
        return (
            <div>
                <p>Please Login or Register before accessing this page</p>
                <Link href="/"><a>Go Back</a></Link>
            </div>
        )
    }

    return (
        <div>
            <h2>Account Page</h2>
            <p>Logged in as {user.email}</p>
            <p><a href="#" onClick={logoutUser}>Logout</a></p>
        </div>
    )

}