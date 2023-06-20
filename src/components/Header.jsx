import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";
import argentBankLogo from "../assets/argentBankLogo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <HeaderNav>
      <LogoNavLink to="/" class="main-nav-logo">
        <Logo src={argentBankLogo} alt="Argent Bank Logo" />
        <h1 class="sr-only">Argent Bank</h1>
      </LogoNavLink>
      <div>
        <SignInButton to="/login">
          <StyledFontAwesomeIcon icon={faCircleUser} />
          Sign In
        </SignInButton>
      </div>
    </HeaderNav>
  );
}

const HeaderNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
`;

const LogoNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  //   font-weight: bold;
  //   color: #2c3e50;
  //
`;

const Logo = styled.img`
  max-width: 100%;
  width: 200px;
`;

const SignInButton = styled(Link)`
  text-decoration: none;
  margin-right: 0.5rem;
  font-weight: bold;
  color: #2c3e50;
  &:hover {
    text-decoration: underline;
  }
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin-right: 0.5rem;
`;

//   .main-nav a.router-link-exact-active {
//     color: #42b983;
//   }
