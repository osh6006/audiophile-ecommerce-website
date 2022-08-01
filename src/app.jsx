import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/home";
import { color, size, weight } from "./utils/sources";

// 무조건 대문자로 설정해 줘야함!
const AppWrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <AppWrapper>
      <BrowserRouter>
        <ThemeProvider
          theme={{
            palette: color,
          }}
          size={size}
          weight={weight}
        >
          <Routes>
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path="/home">
              <Route path="" element={<Home />}></Route>
            </Route>
            <Route path="/headphones">
              <Route path="headphonesDetail"></Route>
            </Route>
            <Route path="/speakers">
              <Route path="speakersDetail"></Route>
            </Route>
            <Route path="/earphones">
              <Route path="earphonesDetail"></Route>
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </AppWrapper>
  );
}

export default App;
