import { useState, useEffect } from "react";
import { useParams, Navigate, Link } from "react-router-dom";

import HeaderSignOut from "../components/HeaderSignOut";
import AccountHeader from "../components/AccountHeader";
import Account from "../components/Account";
import Footer from "../components/Footer";
import displayProfile from "../api.js";

export default function User() {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   // fetch(`http://localhost:3001/api/v1/user/profile`)
  //   //   .then((response) => response.json())
  //   //   .then((data) => {
  //   //     setData(data);
  //   //     console.log(data);
  //   //   })
  //   //   .catch((error) => console.log(error));
  // }, []);
  // // const [userData, setUserData] = useState(null);

  // // console.log("data");

  useEffect(() => {
    async function getData() {
      const { data } = await displayProfile();
      setData(data);
      console.log("data");
    }
    getData();
  }, []);

  // if (error) {
  //   return (
  //     <div>
  //       <Navigate to="/404" replace={true} />
  //     </div>
  //   );
  // }

  return (
    <div>
      <HeaderSignOut />

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
