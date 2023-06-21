import { useRef, useState, useEffect, useContext } from "react";
// import { AuthContext } from "../context/AuthProvider";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import axios from "../api.js";

export default function SignInModal() {
  // const { setAuth } = useContext(AuthContext);
  // const userRef = useRef();
  // const errRef = useRef();

  // const [user, setUser] = useState("");
  // const [pwd, setPwd] = useState("");
  // const [errorMessage, setErrorMessage] = useState("");
  // const [success, setSuccess] = useState("");

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post(
  //       "http://localhost:3001/api/v1/user/login",
  //       JSON.stringify({ email: user, password: pwd }),
  //       {
  //         headers: { "Content-Type": "application/json" },
  //         withCredentials: true,
  //       }
  //     );

  //     setUser("");
  //     setPwd("");
  //     setSuccess(true);
  //   } catch (error) {}
  // };

  return (
    <main className="main bg-dark">
      <SignInContent>
        <StyledFontAwesomeIcon icon={faCircleUser} />
        <h1>Sign In</h1>
        {/* <form onSubmit={handleSubmit}> */}
        <form>
          {/* <p
            ref={errRef}
            className={errorMessage ? "errormessage" : "offscreen"}
          >
            {errorMessage}
          </p> */}
          <InputWrapper>
            <InputWrapperLabel htmlFor="username">Username</InputWrapperLabel>
            <InputWrapperInput
              type="text"
              id="username"
              // ref={userRef}
              // onChange={(e) => setUser(e.target.value)}
              // value={user}
              required
            />
          </InputWrapper>
          <InputWrapper>
            <InputWrapperLabel htmlFor="password">Password</InputWrapperLabel>
            <InputWrapperInput
              type="password"
              id="password"
              // onChange={(e) => setPwd(e.target.value)}
              // value={pwd}
              required
            />
          </InputWrapper>
          <InputRemember>
            <input type="checkbox" id="remember-me" />
            <InputRememberLabel htmlFor="remember-me">
              Remember me
            </InputRememberLabel>
          </InputRemember>
          {/* <Link to="/profile">Sign In</Link> */}
          <SignInButton>Sign In</SignInButton>
        </form>
      </SignInContent>
    </main>
  );
}

const SignInContent = styled.section`
  box-sizing: border-box;
  background-color: white;
  width: 300px;
  margin: 0 auto;
  margin-top: 3rem;
  padding: 2rem;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 5rem;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 1rem;
`;

const InputWrapperLabel = styled.label`
  font-weight: bold;
`;

const InputWrapperInput = styled.input`
  padding: 5px;
  font-size: 1.2rem;
`;

const InputRemember = styled.div`
  display: flex;
`;

const InputRememberLabel = styled.label`
  margin-left: 0.25rem;
`;

const SignInButton = styled.button`
  display: block;
  width: 100%;
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1rem;
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
`;
