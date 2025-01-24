import React from "react";
import Home from "./front/home";
import { Container } from "./front/styles/GlobalStyles";
import Header from "./front/components/header";

function App() {
  return (
    <Container>
      <Header />
      <Home />
    </Container>
  );
}

export default App;
