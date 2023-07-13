import React from "react";
import { styled } from "styled-components";
export const SideBarLeft = () => {
  return (
    <>
      <LeftStyle>
        <HeaderStyle>
          <a href="" className="text-white ">
            Trang Chu
          </a>
          <a href="" className="text-white">
            Tim kiem
          </a>
        </HeaderStyle>
      </LeftStyle>
    </>
  );
};

const LeftStyle = styled.div`
  width: 25%;
  display: flex;
  background-color: #121212;
  margin: 10px;
  height: 809px;
  border-radius: 10px;
  flex-direction: column;
`;
const HeaderStyle = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
