import React from 'react'
import { Parallax } from "react-parallax";
import { LoginContainer } from './style';
import Link from 'next/link';



export const LoginScreen = () => {
  return (
    <LoginContainer>
      <div className="box">
        <h1>Login</h1>
        <form action="">
          <input type="text" placeholder='E-mail' />
          <input type="password" placeholder='password' />
          <div className="btn">Login</div>
        </form>
        <div className="footer">

        <p>New customer?</p>
        <Link href="/register"><span>Register</span></Link>
        </div>
     </div>
    </LoginContainer>
  );
}

