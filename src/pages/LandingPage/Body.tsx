import React from "react";
import styled from "styled-components";

export default function Body() {
  return (
    <>
      <BodyStyle></BodyStyle>
    </>
  );
}

const BodyStyle = styled.div`
  background: url("https://content-tooling.spotifycdn.com/images/b236bf87-bfd5-4bcb-b51a-77881073039c_lie_circles.svg");
  background-color: blue;
  height: 800px;
  width: 100%;
  background-size: cover;
`;
