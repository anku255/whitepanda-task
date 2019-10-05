import React from "react";
import styled from "@emotion/styled";
import { Avatar, Box, Badge } from "@chakra-ui/core";
import { FaRegBell } from "react-icons/fa";

import logo from "../../assets/whitepanda_logo.png";

const StyledHeader = styled.header`
  nav {
    display: flex;
    flex: 1;
    height: 60px;
    padding: 0.5rem 5rem;
    background: #ffffff;
    box-shadow: 0 2px 8px #f0f1f2;

    a {
      display: flex;
      height: 100%;
      align-items: center;
      .logo {
        max-width: 8rem;
      }
    }

    .grow {
      flex: 1;
    }

    .nav__right {
      display: flex;
      align-items: center;

      .notification {
        margin-right: 1.2rem;
        position: relative;

        div {
          position: absolute;
          right: -9px;
          top: -4px;
          width: 25px;
          height: 25px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          background: #f25c69;
        }
      }
    }
  }
`;
const Header = props => {
  return (
    <StyledHeader>
      <nav>
        <div className="nav__left">
          <a href="/" aria-label="WhitePanda">
            <img className="logo" src={logo} alt="" />
          </a>
        </div>
        <div className="grow"></div>
        <div className="nav__right">
          <div className="notification">
            <Box as={FaRegBell} size="32px" color="#A6A6A6" />
            <Badge style={{ borderRadius: "50%" }} fontSize="0.7em">
              699
            </Badge>
          </div>
          <div className="avatar">
            <Avatar
              style={{ background: "#B3E77F", color: "#FFF" }}
              size="sm"
              name="A B"
            />
          </div>
        </div>
      </nav>
    </StyledHeader>
  );
};

export default Header;
