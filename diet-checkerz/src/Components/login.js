import React from "react";
import "../Stylesheet/login.module.css";
//import css file for styling

function Login() {
  return (
    <div class="login">
      <form class="login-form">
        <input type="text" placeholder="username"/>
        <input type="password" placeholder="password"/>
        <button>login</button>
        </form>
    </div>
  );
}

export default Login;