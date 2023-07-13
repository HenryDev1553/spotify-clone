import React from "react";
import { styled } from "styled-components";

export const SideBarBottom = () => {
  return (
    <>
      <BottomStyle></BottomStyle>
    </>
  );
};

const BottomStyle = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  height: 72px;
  background: black;
  width: 100%;
`;
