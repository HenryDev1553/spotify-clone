import React, { useState } from "react";
import { styled } from "styled-components";
import {
  StepBackwardOutlined,
  StepForwardOutlined,
  PauseCircleFilled,
  PlayCircleFilled,
} from "@ant-design/icons";
export const SideBarBottom = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const handlePlaying = () => {
    setIsPlaying((prev) => {
      return !prev;
    });
  };
  return (
    <>
      <BottomStyle>
        <div className="left flex w-1/3">
          <div className="body flex">
            <div className="img ml-4">
              <img
                src="https://i.scdn.co/image/ab67616d00004851424c67fc547ef8fcf2209127"
                alt=""
                className="w-full"
              />
            </div>
            <div className="music-detail ml-4 ">
              <div className="music_name mb-2 font-semibold text-lg">
                Cơn Mưa Ngang Qua
              </div>
              <div className="artis text-sm font-thin">Nguyễn Nam</div>
            </div>
          </div>
        </div>
        <div className="mid flex w-1/3 justify-center ">
          <div className="play-control flex w-full ">
            <div className="play-control-left w-1/3 text-3xl flex justify-center mt-2 items-start">
              <button>
                <StepBackwardOutlined />
              </button>
            </div>
            <div className="play-control-mid w-1/3 text-3xl flex justify-center mt-2 items-start">
              <button
                onClick={() => {
                  handlePlaying();
                }}
              >
                {isPlaying ? <PauseCircleFilled /> : <PlayCircleFilled />}
              </button>
            </div>
            <div className="play-control-right w-1/3 text-3xl flex justify-center mt-2 items-start">
              <button>
                <StepForwardOutlined />
              </button>
            </div>
          </div>
        </div>
        <div className="left flex w-1/3 justify-center">Hello</div>
      </BottomStyle>
    </>
  );
};

const BottomStyle = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  height: 90px;
  background: black;
  width: 100%;
  color: white;
`;
