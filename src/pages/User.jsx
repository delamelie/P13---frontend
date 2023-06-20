import Header from "../components/Header";
import AccountHeader from "../components/AccountHeader";
import Account from "../components/Account";
import Footer from "../components/Footer";

export default function User() {
  return (
    <div>
      <Header />
      <nav class="main-nav">
        <div>
          <a class="main-nav-item" href="./user.html">
            <i class="fa fa-user-circle"></i>
            Tony
          </a>
          <a class="main-nav-item" href="./index.html">
            <i class="fa fa-sign-out"></i>
            Sign Out
          </a>
        </div>
      </nav>
      <main class="main bg-dark">
        <AccountHeader />
        <Account title={"Argent Bank Checking (x8349)"} amount="$ {2,082.79}" />
        <Account title={"Argent Bank Savings (x6712)"} amount="$ {10,928.42}" />
        <Account
          title={"Argent Bank Credit Card (x8349)"}
          amount="$ {184.30}"
        />
      </main>
      <Footer />
    </div>
  );
}
