import React from "react";
import styled from "styled-components";
import { color as HomeColor } from "../../utils/sources";
import { size as HomeSize } from "../../utils/sources";
import { weight as HomeWeight } from "../../utils/sources";
import Button from "../button";
import Navbar from "../nav";
import headset from "../../assets/home/desktop/image-hero.jpg";

const HeaderWrapper = styled.div`
  width: 100%;
  padding: 0 10rem;
  border-radius: 5px;
  background-image: url(${headset});
  background-size: cover;
`;

const HeaderContents = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const ContentsLeft = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  div:nth-of-type(1) {
    color: ${HomeColor.lightGray};
    font-size: ${HomeSize.h6};
    letter-spacing: 10px;
    font-weight: ${HomeWeight.small};
    opacity: 0.5;
    margin-top: 11rem;
  }
  div:nth-of-type(2) {
    color: ${HomeColor.white};
    font-size: ${HomeSize.h1};
    font-weight: ${HomeWeight.bold};
    line-height: 75px;
    margin-top: 2rem;
  }
  div:nth-of-type(3) {
    width: 60%;
    color: ${HomeColor.white};
    font-size: ${HomeSize.h6};
    font-weight: ${HomeWeight.small};
    line-height: 1.5rem;
    margin-top: 2rem;
    opacity: 0.8;
  }
  div:nth-of-type(4) {
    margin-top: 3rem;
    margin-bottom: 12.5rem;
  }
`;

function HomeHeader({ onMove }) {
  return (
    <HeaderWrapper>
      <Navbar onMove={onMove} />
      <HeaderContents>
        <ContentsLeft>
          <div>NEW PRODUCT</div>
          <div>
            XX99 MARK II <br />
            HEADPHONES
          </div>
          <div>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music <br /> enthusiast.
          </div>
          <div>
            <Button color="ocher" size="medium">
              SEE PRODUCT
            </Button>
          </div>
        </ContentsLeft>
      </HeaderContents>
    </HeaderWrapper>
  );
}

export default HomeHeader;
