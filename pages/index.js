import React from "react";
import home from "./front/home";
import { Container } from "./front/styles/GlobalStyles";
import Header from "./front/components/header";

function Home() {
  return (
    <Container>
      <Header />
      <home />
    </Container>
  );
}

export default Home;
