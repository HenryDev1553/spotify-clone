import React, { useState } from "react";
import { styled } from "styled-components";
import {
  HomeOutlined,
  SearchOutlined,
  ReadOutlined,
  PlusOutlined,
  UnorderedListOutlined,
  ArrowRightOutlined,
  CaretUpOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";
export const SideBarLeft = () => {
  const [display, setDisplay] = useState(false);
  const handleDisplay = () => {
    setDisplay((prev) => {
      return !prev;
    });
  };
  return (
    <>
      <LeftStyle>
        <HeaderStyle>
          <div className="Home p-2 flex items-center mx-5">
            <HomeOutlined
              style={{ color: "white" }}
              className="text-2xl flex items-center "
            />
            <a
              href=""
              className="text-white px-5 font-sans text-lg font-semibold text-center"
            >
              Trang Chủ
            </a>
          </div>
          <div className="search p-2 flex items-center mx-5">
            <SearchOutlined
              style={{ color: "white" }}
              className="text-2xl flex items-center "
            />
            <a
              href=""
              className="text-white px-5 font-sans text-lg font-semibold text-center"
            >
              Tìm Kiếm
            </a>
          </div>
        </HeaderStyle>
        <BodyStyle>
          <div className="libary flex w-full ">
            <div className="item-left p-2 flex items-center mx-5 w-full">
              <ReadOutlined className="text-2xl flex items-center " />
              <h1 className="px-2 font-sans text-lg font-semibold text-center ">
                Thư Viện
              </h1>
            </div>
            <div className="item-right p-2 flex items-center mx-5 w-96 justify-end space-x-3.5">
              <button>
                <PlusOutlined />
              </button>
              <button>
                <UnorderedListOutlined />
              </button>
              <button>
                <ArrowRightOutlined />
              </button>
            </div>
          </div>
          <div className="type-bar p-2 flex items-start mx-5 flex-col ">
            <div className="left-bar ">
              <button className="rounded-2xl bg-gray-700 p-1 mx-1 text-sm my-2">
                Danh Sách Phát
              </button>
              <button className="rounded-xl bg-gray-700 p-1 mx-1 text-sm my-2">
                Nghệ Sĩ
              </button>
              <button className="rounded-2xl bg-gray-700 p-1 mx-1 text-sm my-2">
                Podcast và chương trình
              </button>
            </div>
            <button className="right-bar mx-1 my-2 flex flex-row w-full">
              <SearchOutlined
                style={{ color: "white" }}
                className="text-lg flex items-center "
              />
              <p className="px-2 font-sans text-md font-semibold text-center flex justify-end w-full ">
                Gần Đây
              </p>
              <button
                onClick={() => {
                  handleDisplay();
                }}
              >
                {display ? <CaretUpOutlined /> : <CaretDownOutlined />}
              </button>
            </button>
          </div>
          <div className="playlist p-2 flex items-start mx-5 ">
            <div className="list_item flex-row w-full flex">
              <div className="img_item">
                <img
                  src="https://i.scdn.co/image/ab67706f00000002434c54adfec2f67bc37f95e8"
                  alt=""
                  className="w-16"
                />
              </div>
              <button className="content flex px-4 text-center flex-col">
                <div className="content_name text-lg font-sm">
                  <p>Thiên Hạ Nghe Gì</p>
                </div>
                <div className="content-type text-sm my-1 ">
                  Danh Sách Phát Spotify
                </div>
              </button>
            </div>
          </div>
        </BodyStyle>
      </LeftStyle>
    </>
  );
};

const LeftStyle = styled.div`
  width: 30%;
  display: flex;
  margin: 10px 10px 10px 10px;
  height: 809px;
  flex-direction: column;
`;
const HeaderStyle = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: #121212;
  border-radius: 10px;
`;
const BodyStyle = styled.div`
  display: flex;
  width: 100%;
  background-color: #121212;
  border-radius: 10px;
  flex-direction: column;

  margin-top: 10px;
  color: white;
`;
