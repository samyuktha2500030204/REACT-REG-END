
import React, { useState } from "react";

function App() {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [le, setLe] = useState("");
  const [lp, setLp] = useState("");
  const [msg, setMsg] = useState("");

  function register(e) {
    e.preventDefault();
    setUser({ name, email, password });
  }

  function login(e) {
    e.preventDefault();
    if (user && le === user.email && lp === user.password)
      setMsg("Login successful");
    else
      setMsg("Invalid email or password");
  }

  return (
    <div>
      <h2>Registration Form</h2>
      <form onSubmit={register}>
        <input placeholder="Name" onChange={e => setName(e.target.value)} required /><br/><br/>
        <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} required /><br/><br/>
        <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} required /><br/><br/>
        <button>Register</button>
      </form>

      <h3>Registered Details</h3>
      {user && <p>Name: {user.name}<br/>Email: {user.email}<br/>Password: {user.password}</p>}

      <hr/>

      <h2>Login Form</h2>
      <form onSubmit={login}>
        <input type="email" placeholder="Email" onChange={e => setLe(e.target.value)} required/><br/><br/>
        <input type="password" placeholder="Password" onChange={e => setLp(e.target.value)} required/><br/><br/>
        <button>Login</button>
      </form>

      <h3>{msg}</h3>
    </div>
  );
}

export default App;
