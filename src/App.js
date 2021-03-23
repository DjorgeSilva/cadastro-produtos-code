import React, { useState } from "react"
import { ThemeProvider } from 'styled-components';
import { Form } from "./Components/Form/Form";
import { GlobalStyle } from "./GlobalStyles"


function App() {

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
        <Form/>
      </ThemeProvider>


    </>
  );
}

export default App;
