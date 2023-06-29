import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import HeaderSignOut from "../components/HeaderSignOut";
import ProfileInfo from "../components/ProfileInfo";
import Account from "../components/Account";
import Footer from "../components/Footer";
import { displayUser } from "../utils/userSlice.js";

export default function User() {
  useEffect(() => {
    document.title = "ArgentBank - Profile";
  });

  const [user, setUser] = useState({});
  const dispatch = useDispatch();

  // const { user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(displayUser()).then((result) => {
      if (result.payload) {
        setUser(result.payload.body);
      }
    });
  }, [dispatch]);

  return (
    <div>
      <HeaderSignOut firstName={user.firstName} />

      <main className="main bg-dark">
        <ProfileInfo firstName={user.firstName} lastName={user.lastName} />
        <Account title={"Argent Bank Checking (x8349)"} amount="$ 2,082.79" />
        <Account title={"Argent Bank Savings (x6712)"} amount="$ 10,928.42" />
        <Account title={"Argent Bank Credit Card (x8349)"} amount="$ 184.30" />
      </main>
      <Footer />
    </div>
  );
}
