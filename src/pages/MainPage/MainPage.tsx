import React from "react";
import { styled } from "styled-components";
import { SideBarRight } from "./components/SideBarRight";
import { SideBarLeft } from "./components/SideBarLeft";
import { SideBarBottom } from "./components/SideBarBottom";

export const MainPage = () => {
  return (
    <>
      <MainPageStyle>
        <SideBarLeft />
        <SideBarRight />
      </MainPageStyle>
      <SideBarBottom />
    </>
  );
};
const MainPageStyle = styled.div`
  display: flex;
  background: white;
  height: 100vh;
`;
