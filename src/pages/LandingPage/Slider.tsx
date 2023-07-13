import React from "react";
import styled from "styled-components";
import henry from "../../image/henry.jpg";
export default function Slider() {
  return (
    <>
      <SliderStyle>
        <div className="content w-1/2 flex flex-col justify-center pl-20">
          <div className="content-item flex items-center">
            <div className="circle w-40 h-40 rounded-full bg-green-600 flex  ">
              <div className="text-2xl font-semibold text-white text-center self-center">
                Spotify Premium
              </div>
            </div>
            <div className=" text-white font-extrabold text-4xl pl-3">
              Get 3 months of Premium for free
            </div>
          </div>
          <div className="text-white font-bold text-4xl pl-10 pt-10">
            Enjoy ad-free music listening, offline playback, and more. Cancel
            anytime.
          </div>
        </div>
        <div className="banner w-1/2 flex justify-center">
          <div className="banner-img w-1/2 flex items-center ">
            <img
              src={henry}
              alt=""
              className="w-auto border-dashed border-4 border-white-600 rounded-full"
            />
          </div>
        </div>
      </SliderStyle>
    </>
  );
}

const SliderStyle = styled.div`
  display: flex;
  background: #d3571e;
  height: 500px;
  position: relative;
`;
