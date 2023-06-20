import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function SignInModal() {
  return (
    <main class="main bg-dark">
      <SignInContent>
        <StyledFontAwesomeIcon icon={faCircleUser} />
        <h1>Sign In</h1>
        <form>
          <InputWrapper>
            <InputWrapperLabel for="username">Username</InputWrapperLabel>
            <InputWrapperInput type="text" id="username" />
          </InputWrapper>
          <InputWrapper>
            <InputWrapperLabel for="password">Password</InputWrapperLabel>
            <InputWrapperInput type="password" id="password" />
          </InputWrapper>
          <InputRemember>
            <input type="checkbox" id="remember-me" />
            <InputRememberLabel for="remember-me">
              Remember me
            </InputRememberLabel>
          </InputRemember>
          <Link to="/user">Sign In</Link>
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
