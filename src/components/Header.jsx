import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";
import argentBankLogo from "../assets/argentBankLogo.png";
import SignIn from "../components/SignIn";
import SignOut from "../components/SignOut";

export default function Header() {
  const { isLoggedIn } = useSelector((state) => state.auth);

  return (
    <HeaderNav>
      <LogoNavLink to="/">
        <Logo src={argentBankLogo} alt="Argent Bank Logo" />

        <h1 className="sr-only">Argent Bank</h1>
      </LogoNavLink>

      {isLoggedIn ? <SignOut /> : <SignIn />}
    </HeaderNav>
  );
}

const HeaderNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

const LogoNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  max-width: 100%;
  width: 200px;
`;
