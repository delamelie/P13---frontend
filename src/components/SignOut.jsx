// import { Link } from "react-router-dom";
// import styled from "styled-components";
// import { useDispatch } from "react-redux";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faCircleUser,
//   faRightFromBracket,
// } from "@fortawesome/free-solid-svg-icons";
// import logOut from "../features/userSlice";

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

// const SignOutButton = styled(Link)`
//   text-decoration: none;
//   margin-right: 0.5rem;
//   font-weight: bold;
//   color: #2c3e50;
//   border: 8px solid, green;
//   &:hover {
//     text-decoration: underline;
//   }
// `;

// const Button = styled(Link)`
//   text-decoration: none;
//   margin-right: 0.5rem;
//   font-weight: bold;
//   color: #2c3e50;
//   border: 2px solid, pink;
//   &:hover {
//     text-decoration: underline;
//   }
// `;

// const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
//   font-weight: bold;
//   color: #2c3e50;
//   text-decoration: none;
//   margin-right: 0.5rem;
// `;

// //   .main-nav a.router-link-exact-active {
// //     color: #42b983;
// //   }

//Sans props
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import logOut from "../features/userSlice";

import { useEffect } from "react";
import { displayUser } from "../api/displayUser";

export default function Signout() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // function handleSignOut() {
  //   dispatch(logOut());
  // }

  useEffect(() => {
    dispatch(displayUser());
  }, [dispatch]);

  return (
    <div>
      <Button to="/profile">
        <StyledFontAwesomeIcon icon={faCircleUser} />
        {user && user.firstName}
      </Button>
      {/* <SignOutButton onClick={handleSignOut} to="/"> */}
      <SignOutButton onClick={() => dispatch(logOut())} to="/">
        <FontAwesomeIcon icon={faRightFromBracket} />
        Sign Out
      </SignOutButton>
    </div>
  );
}

const SignOutButton = styled(Link)`
  text-decoration: none;
  margin-right: 0.5rem;
  font-weight: bold;
  color: #2c3e50;
  border: 8px solid, green;
  &:hover {
    text-decoration: underline;
  }
`;

const Button = styled(Link)`
  text-decoration: none;
  margin-right: 0.5rem;
  font-weight: bold;
  color: #2c3e50;
  border: 2px solid, pink;
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
