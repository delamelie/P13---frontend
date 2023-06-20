import styled from "styled-components";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import Footer from "../components/Footer";

import iconChat from "../assets/icon-chat.png";
import iconMoney from "../assets/icon-money.png";
import iconSecurity from "../assets/icon-security.png";

export default function Home() {
  return (
    <div>
      <Header />
      <MainWrapper>
        <Hero />
        <Features>
          <h2 class="sr-only">Features</h2>
          <Feature
            icon={iconChat}
            title={"You are our #1 priority"}
            text={
              "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
            }
          />
          <Feature
            icon={iconMoney}
            title={"More savings means higher rates"}
            text={
              "The more you save with us, the higher your interest rate will be!"
            }
          />
          <Feature
            icon={iconSecurity}
            title={"Security you can trust"}
            text={
              "We use top of the line encryption to make sure your data and money is always safe"
            }
          />
        </Features>
      </MainWrapper>
      <Footer />
    </div>
  );
}

const MainWrapper = styled.main`
  flex: 1;
`;

const Features = styled.section`
  display: flex;
  flex-direction: column;

  @media (min-width: 920px) {
    flex-direction: row;
  }
`;
