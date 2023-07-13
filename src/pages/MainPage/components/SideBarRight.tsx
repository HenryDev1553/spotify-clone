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
  width: 75%;
  display: flex;
  background-color: #121212;
  margin: 10px;
  height: 809px;
  border-radius: 10px;
`;
