import React, { useState } from 'react';
import { auth } from '../database/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

import styled from 'styled-components';

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [user, setUser] = useState(null);

  const onEmailLogin = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        setUser(
            {
                id: user.uid,
                email: user.email,
                displayName: user.displayName,
            }
        ); 
        alert('회원가입에 성공하였습니다');
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
        // 회원가입 실패 시 home 페이지로 이동
        window.location.href = '/';
    });
};

  const onClickLogin = async () => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        setUser({
            id: user.uid,
            email: user.email,  
            displayName: user.displayName,
        });
        window.location.href = '/main';
    } catch (error) {
        console.error(error);
        if (error.code == "auth/user-not-found" || error.code == "auth/wrong-password") {
            alert("없는 이메일이거나 비밀번호가 잘못되었습니다")
        }
        window.location.href = '/';
    }
  }

  const Input = styled.input`
    padding: 5px 7px;
    color: #fff;
    background-color: #99e3cc;
    border-radius: 5px;
    border: 1px solid #99e3cc;
    display: inline-block;
    margin-top: 10px;
    cursor: pointer;
    margin-right: 10px;
  `

  const Button = styled.button`
    padding: 5px 7px;
    color: #fff;
    background-color: #92c6ff;
    border-radius: 5px;
    border: 1px solid #92c6ff;
    display: inline-block;
    margin-top: 10px;
    cursor: pointer;
    `;

  return (
    <div>
        <h2>로그인 또는 회원가입페이지 입니다</h2>
        <form onSubmit={onEmailLogin}>
            <label htmlFor="">이메일</label>
            <input
                type="email"
                required
                onChange={(e) => {
                    setEmail(e.target.value)
                }}
                value={email}
                />
            <br />
            <label htmlFor="">비밀번호</label>
            <input
                type="password"
                required
                onChange={(e) => {
                    setPassword(e.target.value)
                }}
                value={password}
                />
            <br />
            <Input type="submit" value="회원가입" />
            <Button type="button" onClick={() => onClickLogin()}>로그인</Button>
        </form>
    </div>
  );
}