import { useState, useEffect } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";

import Header from "../components/Header";

import ProfileInfo from "../components/ProfileInfo";
import Account from "../components/Account";
import Footer from "../components/Footer";
import { displayUser } from "../features/userSlice.js";

export default function User() {
  useEffect(() => {
    document.title = "ArgentBank - Profile";
  }, []);

  // const store = useStore();
  // useEffect(() => {
  //   displayUser(store);
  // }, [store]);

  // const selectUser = (state) => state.auth;
  // const user = useSelector(selectUser);
  // console.log(user);

  const [user, setUser] = useState({});
  const dispatch = useDispatch();

  // const { user } = useSelector((state) => state.user);
  // console.log(user);
  //const currentUser = useSelector((state) => state.auth.user);

  useEffect(() => {
    dispatch(displayUser()).then((result) => {
      if (result.payload) {
        setUser(result.payload.body);
      }
    });
  }, [dispatch]);

  return (
    <div>
      <Header firstName={user.firstName} />

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
