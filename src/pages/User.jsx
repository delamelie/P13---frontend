import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Header from "../components/Header";
import ProfileInfo from "../components/ProfileInfo";
import Account from "../components/Account";
import Footer from "../components/Footer";

export default function User() {
  useEffect(() => {
    document.title = "ArgentBank - Profile";
  }, []);

  const { loading, error } = useSelector((state) => state.user);
  const { isLoggedIn } = useSelector((state) => state.auth);

  //if (loading) return <div>Loading</div>;

  return isLoggedIn ? (
    <div>
      <Header />
      {/* {error && <ErrorMessage>{error}</ErrorMessage>} */}
      <main className="main bg-dark">
        <ProfileInfo />
        <Account title={"Argent Bank Checking (x8349)"} amount="$ 2,082.79" />
        <Account title={"Argent Bank Savings (x6712)"} amount="$ 10,928.42" />
        <Account title={"Argent Bank Credit Card (x8349)"} amount="$ 184.30" />
      </main>
      <Footer />
    </div>
  ) : (
    <Navigate to="/login" replace />
  );
}

// import { displayUser } from "../api/displayUser";

// export default function User() {
//   useEffect(() => {
//     document.title = "ArgentBank - Profile";
//   }, []);

//   const dispatch = useDispatch();
//   const { loading, user } = useSelector((state) => state.user);
//   const { isLoggedIn } = useSelector((state) => state.auth);

//   useEffect(() => {
//     dispatch(displayUser());
//   }, [dispatch]);

//   //if (loading) return null;

//   return isLoggedIn ? (
//     <div>
//       <Header firstName={user && user.firstName} />

//       <main className="main bg-dark">
//         <ProfileInfo
//           firstName={user && user.firstName}
//           lastName={user && user.lastName}
//         />
//         <Account title={"Argent Bank Checking (x8349)"} amount="$ 2,082.79" />
//         <Account title={"Argent Bank Savings (x6712)"} amount="$ 10,928.42" />
//         <Account title={"Argent Bank Credit Card (x8349)"} amount="$ 184.30" />
//       </main>
//       <Footer />
//     </div>
//   ) : (
//     <Navigate to="/login" replace />
//   );
// }

const ErrorMessage = styled.div`
  color: red;
  margin-top: 15px;
`;
