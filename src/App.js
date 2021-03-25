import React, { useState } from "react"
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from "./GlobalStyles"
import { Menu } from "./Components/Menu/Index"
import { Nav } from "./Components/Nav/Index"
import { Container } from './Components/Container/Index'

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const theme = {
    primary_color: "#000",
    secundary_color: "#fff",
    ternary_color: "#F5C32E",
    font_color: "#000",
    font_padrao: "Roboto, sans-serif",
    font_secundaria: "Abel, sans-serif",
  };


  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
        <Menu isOpen={isOpen} />
        <Container isOpen={isOpen}/>

      </ThemeProvider>
    </>
  );
}

export default App;
