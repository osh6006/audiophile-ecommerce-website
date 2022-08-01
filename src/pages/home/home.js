import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Counter from "../../components/count";
import HomeHeader from "../../components/home/header";
import Input from "../../components/input";
import InputRadio from "../../components/inputRadio";
import Navbar from "../../components/nav";
import { color as inputColor } from "../../utils/sources";
import { size as inputSize } from "../../utils/sources";

function Home() {
  // 라디오 버튼 컴포넌트
  // const [select, setSelect] = useState(null);
  // const onSelect = value => {
  //   setSelect(value);
  // };
  // <InputRadio size={"20"} select={select} onSelect={onSelect}></InputRadio>;

  // 카운터 버튼 컴포넌트
  // const [count, setCount] = useState(0);

  // const onPlus = () => {
  //   setCount(count + 1);
  // };
  // const onMinus = () => {
  //   if (count === 0) return;
  //   setCount(count - 1);
  // };
  // <Counter onPlus={onPlus} onMinus={onMinus} count={count} />;

  // onMove 함수로  이동시키기...

  return (
    <>
      <HomeHeader></HomeHeader>
    </>
  );
}

export default Home;
