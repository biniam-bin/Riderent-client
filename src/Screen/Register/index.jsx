import React from 'react'
import { Parallax } from "react-parallax";
import { RegisterContainer } from './style';
import Link from 'next/link';



export const RegisterScreen = () => {
  return (
    <RegisterContainer>
      <div className="box">
        <h1>Register</h1>
        <form action="">
          <input type="text" placeholder='E-mail' />
          <input type="password" placeholder='password' />
          <input type="password" placeholder='password(again)' />
          <div className="btn">Login</div>
        </form>
        <div className="footer">

        <p>already a customer?</p>
        <Link href="/login"><span>Register</span></Link>
        </div>
     </div>
    </RegisterContainer>
  );
}

