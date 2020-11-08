import Head from "next/head";
import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";

export default function Login() {
  const [input, setInput] = useState("");
  const { loginUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault()
    loginUser(input)
  }
  
  return (
    <div>
      <Head>
        <title>Login</title>
        <meta
          name="description"
          content="Login here to be able to purchase"
        />
      </Head>

      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="email"
          placeholder="Email address..."
        />
        <button type="submit">Log In</button>
      </form>

    </div>
  );
}
