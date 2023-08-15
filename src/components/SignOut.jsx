import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { displayUser } from "../features/user/userActions";
import { logoutUser } from "../features/auth/authActions";
import { isEmpty } from "./utils/isEmpty.js";

export default function Signout() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(displayUser());
  }, [dispatch]);

  return (
    <ButtonsWrapper>
      <Button to="/profile">
        <StyledFontAwesomeIcon icon={faCircleUser} />
        {!isEmpty(user) && user.firstName}
      </Button>
      <SignOutButton onClick={() => dispatch(logoutUser())} to="/">
        <FontAwesomeIcon icon={faRightFromBracket} />
        Sign Out
      </SignOutButton>
    </ButtonsWrapper>
  );
}

// export default function Signout({ firstName }) {
//   const dispatch = useDispatch();

//   function handleSignOut() {
//     dispatch(logOut());
//   }

//   return (
//     <div>
//       <Button to="/profile">
//         <StyledFontAwesomeIcon icon={faCircleUser} />
//         {firstName}
//       </Button>
//       {/* <SignOutButton onClick={handleSignOut} to="/"> */}
//       <SignOutButton onClick={() => dispatch(logOut())} to="/">
//         <FontAwesomeIcon icon={faRightFromBracket} />
//         Sign Out
//       </SignOutButton>
//     </div>
//   );
// }

const ButtonsWrapper = styled.div`
  @media (max-width: 450px) {
    display: flex;
    flex-direction: column;
  }
`;

const SignOutButton = styled(Link)`
  text-decoration: none;
  margin-right: 0.5rem;
  font-weight: bold;
  color: #2c3e50;
  &:hover {
    text-decoration: underline;
  }
`;

const Button = styled(Link)`
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
