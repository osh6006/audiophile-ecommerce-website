import React from "react";
import styled from "styled-components";
import logo from "../../src/assets/shared/desktop/logo.svg";
import cart from "../../src/assets/shared/desktop/icon-cart.svg";

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  color: white;
  margin-top: 1rem;
`;
const NavLogo = styled.img.attrs({
  src: `${logo}`,
})`
  width: 11rem;
  height: 2rem;
`;
const NavMenus = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  flex-basis: 85%;
  justify-content: center;
`;
const NavLink = styled.li`
  margin-right: 3rem;
  letter-spacing: 5px;
  cursor: pointer;
`;
const NavCart = styled.img.attrs({
  src: `${cart}`,
})`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

const NavHr = styled.hr`
  width: 100%;
  margin-top: 1em;
`;

function Navbar({ onMove }) {
  const handleNav = event => {
    const value = event.currentTarget.textContent;
    console.log(value);
    onMove(value);
  };
  const handleCart = event => {};
  return (
    <>
      <NavWrapper>
        <NavLogo />
        <NavMenus>
          <NavLink onClick={handleNav}>HOME</NavLink>
          <NavLink onClick={handleNav}>HEADPHONE</NavLink>
          <NavLink onClick={handleNav}>SPEAKERS</NavLink>
          <NavLink onClick={handleNav}>EARPHONES</NavLink>
        </NavMenus>
        <NavCart onClick={handleCart} />
      </NavWrapper>
      <NavHr />
    </>
  );
}

export default Navbar;
