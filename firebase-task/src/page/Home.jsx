import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Home() {

  const LoginLink = styled(Link)`
    text-decoration-line: none;
    color: #f7c3fc;
    transition: color 0.3s ease-in-out;
    &:hover{
        color: #42adff;
    }
    font-weight: 600;
  `;

  return (
    <div>
        <h2>Home</h2>
        <p>로그인에 실패하면 HOME으로 돌아옵니다</p>
        <LoginLink to="/login">로그인</LoginLink>
    </div>
  )
}
