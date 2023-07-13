import styled from "styled-components";
import spotify from "../../image/spotify.jpg";
import React from "react";


export default function Footer() {
  return (
    <FooterStyle>
      <LogoStyle>
        <img src={spotify} alt="" className="w-auto" />
      </LogoStyle>
      <AboutStyle>
        <div className="items w-1/3 flex flex-col text-white items-center">
          <p className="font-bold text-xl">COMPANY</p>
          <a href="">About</a>
          <a href="">Job</a>
          <a href="">For the Record</a>
        </div>
        <div className="items w-1/3 flex flex-col text-white items-center">
          <p className="font-bold text-xl">COMMUNITIES</p>
          <a href="">For Artists</a>
          <a href="">Developers</a>
          <a href="">Advertising</a>
          <a href="">Investors</a>
          <a href="">Vendors</a>
        </div>
        <div className="items w-1/3 flex flex-col text-white items-center">
          <p className="font-bold text-xl">USEFUL LINKS</p>
          <a href="">Support</a>
          <a href="">Web Player</a>
          <a href="">Mobile App</a>
        </div>
      </AboutStyle>
      <InfoStyle></InfoStyle>
    </FooterStyle>
  );
}

const FooterStyle = styled.div`
  padding: 3rem;
  height: 400px;
  background: black;
  display: flex;
  justify-content: space-around;
`;
const LogoStyle = styled.div`
  display: flex;
  justify-content: center;
  width: 30%;
  height: 80px;
`;

const AboutStyle = styled.div`
  display: flex;
  justify-content: space-around;
  width: 40%;
`;
const InfoStyle = styled.div`
  width: 30%;
`;
