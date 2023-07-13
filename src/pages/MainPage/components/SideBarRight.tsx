import React from "react";
import { styled } from "styled-components";

export const SideBarRight = () => {
  return (
    <>
      <RightStyle></RightStyle>
    </>
  );
};

const RightStyle = styled.div`
  width: 70%;
  display: flex;
  background-color: #121212;
  margin: 10px 10px 10px 0;
  height: 809px;
  border-radius: 10px;
`;
