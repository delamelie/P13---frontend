import { useEffect, Navigate } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "../components/Header";
import ProfileInfo from "../components/ProfileInfo";
import Account from "../components/Account";
import Footer from "../components/Footer";
import { displayUser } from "../api/displayUser";

export default function User() {
  useEffect(() => {
    document.title = "ArgentBank - Profile";
  }, []);

  const dispatch = useDispatch();
  const { loading, user } = useSelector((state) => state.user);
  const { isLoggedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(displayUser());
  }, []);

  if (loading) return null;

  return isLoggedIn ? (
    <div>
      <Header firstName={user && user.firstName} />

      <main className="main bg-dark">
        <ProfileInfo
          firstName={user && user.firstName}
          lastName={user && user.lastName}
        />
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
