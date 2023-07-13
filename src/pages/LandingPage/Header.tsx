import React from "react";
import styled from "styled-components";
import spotify from "../../image/spotify.jpg";
import { Redirect } from "../../services/SpotifySer";
export const Header = () => {
  return (
    <>
      <StyleHeader>
        <div className="logo w-1/2 px-16">
          <img src={spotify} alt="Logo" className="w-40" />
        </div>
        <div className="menu_bar text-white text-end w-1/2 whitespace-pre-wrap text-lg font-bold flex justify-end justify-evenly items-center">
          <a href="">Premium</a>
          <a href="">Support</a>
          <a href="">Download</a>
          <a href="">Sign Up</a>
          <a href={Redirect}>Log In</a>
        </div>
      </StyleHeader>
    </>
  );
};

//css

const StyleHeader = styled.div`
  width: 100%;
  display: flex;
  background: black;
`;
