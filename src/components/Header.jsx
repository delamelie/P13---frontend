// import { NavLink } from "react-router-dom";
// import styled from "styled-components";
// import { useSelector } from "react-redux";
// import argentBankLogo from "../assets/argentBankLogo.png";
// import SignIn from "../components/SignIn";
// import SignOut from "../components/SignOut";

// export default function Header({ firstName }) {
//   const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

//   return (
//     <HeaderNav>
//       <LogoNavLink to="/">
//         <Logo src={argentBankLogo} alt="Argent Bank Logo" />

//         <h1 className="sr-only">Argent Bank</h1>
//       </LogoNavLink>

//       {isLoggedIn ? <SignOut firstName={firstName} /> : <SignIn />}
//     </HeaderNav>
//   );
// }

// const HeaderNav = styled.nav`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 5px 20px;
// `;

// const LogoNavLink = styled(NavLink)`
//   display: flex;
//   align-items: center;
//   //   font-weight: bold;
//   //   color: #2c3e50;
// `;

// const Logo = styled.img`
//   max-width: 100%;
//   width: 200px;
// `;

// // //   .main-nav a.router-link-exact-active {
// // //     color: #42b983;
// // //   }

//Sans props

import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";
import argentBankLogo from "../assets/argentBankLogo.png";
import SignIn from "../components/SignIn";
import SignOut from "../components/SignOut";

export default function Header() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

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
`;

const LogoNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  //   font-weight: bold;
  //   color: #2c3e50;
`;

const Logo = styled.img`
  max-width: 100%;
  width: 200px;
`;

// //   .main-nav a.router-link-exact-active {
// //     color: #42b983;
// //   }
