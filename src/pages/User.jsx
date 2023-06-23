import { useState, useEffect } from "react";
import axios from "../api.js";

import HeaderSignOut from "../components/HeaderSignOut";
import AccountHeader from "../components/AccountHeader";
import Account from "../components/Account";
import Footer from "../components/Footer";

import { PROFILE_URL } from "../api.js";

export default function User() {
  useEffect(() => {
    document.title = "ArgentBank - Profile";
  });

  const [user, setUser] = useState({});

  useEffect(() => {
    let token = localStorage.getItem("token");
    token = JSON.parse(token);

    async function getUser() {
      try {
        const response = await axios.post(
          PROFILE_URL,
          {},
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setUser(response.data.body);
      } catch (error) {}
    }
    getUser();
  }, []);

  return (
    <div>
      <HeaderSignOut firstName={user.firstName} />

      <main className="main bg-dark">
        <AccountHeader firstName={user.firstName} lastName={user.lastName} />
        <Account title={"Argent Bank Checking (x8349)"} amount="$ 2,082.79" />
        <Account title={"Argent Bank Savings (x6712)"} amount="$ 10,928.42" />
        <Account title={"Argent Bank Credit Card (x8349)"} amount="$ 184.30" />
      </main>
      <Footer />
    </div>
  );
}
