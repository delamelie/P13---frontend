import { useState, useEffect } from "react";
import axios from "../api.js";

import HeaderSignOut from "../components/HeaderSignOut";
import AccountHeader from "../components/AccountHeader";
import Account from "../components/Account";
import Footer from "../components/Footer";

export default function User() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    let token = localStorage.getItem("token");
    token = JSON.parse(token);
    console.log(token);

    async function getUser() {
      try {
        const response = await axios.post(
          "http://localhost:3001/api/v1/user/profile",

          { headers: { Authorization: `Bearer ${token}` } }
        );
        console.log(response.data);
        setUser(response.data);
        isMounted && setUser(response.data);
      } catch (error) {
        // if (!error?.response) {
        //   setErrorMessage("No server response");
        // } else if (error.message?.status === 400) {
        //   setErrorMessage("Missing email or password");
        // } else {
        //   setErrorMessage("Adresse email ou mot de passe incorrect");
        // }
      }
    }
    getUser();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  return (
    <div>
      <HeaderSignOut firstName={user.firstName} />

      <main className="main bg-dark">
        <AccountHeader />
        <Account title={"Argent Bank Checking (x8349)"} amount="$ 2,082.79" />
        <Account title={"Argent Bank Savings (x6712)"} amount="$ 10,928.42" />
        <Account title={"Argent Bank Credit Card (x8349)"} amount="$ 184.30" />
      </main>
      <Footer />
    </div>
  );
}
