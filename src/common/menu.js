import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Menu = () => {
  const location = useLocation();

  return (
    <MenuWrapper>
      <MenuItem to="/" className={location.pathname === "/" ? "active" : ""}>
        홈
      </MenuItem>
      <MenuItem
        to="/wordList"
        className={location.pathname === "/wordList" ? "active" : ""}
      >
        단어장
      </MenuItem>
      <MenuItem
        to="/statistics"
        className={location.pathname === "/statistics" ? "active" : ""}
      >
        학습기록
      </MenuItem>
      <MenuItem
        to="/character"
        className={location.pathname === "/character" ? "active" : ""}
      >
        캐릭터{" "}
      </MenuItem>
    </MenuWrapper>
  );
};

export default Menu;

const MenuWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 57px;
  background-color: #febf1a;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 1000;
  gap: 50px;
  padding: 9px 42px 24px 42px;
`;

const MenuItem = styled(Link)`
  background: none;
  border: none;
  font-family: NanumSquareRoundOTF;
  font-size: 12px;
  cursor: pointer;
  text-decoration: none;
  color: #ffdf8c;
  letter-spacing: -0.391px;

  &.active {
    color: #ffffff;
  }
`;
