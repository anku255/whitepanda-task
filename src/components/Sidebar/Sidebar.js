import React from "react";
import styled from "@emotion/styled";
import { Box } from "@chakra-ui/core";
import { FaStore } from "react-icons/fa";
import { MdBorderAll, MdSearch } from "react-icons/md";

const StyledSidebar = styled.div`
  background: #fff;
  min-height: 100vh;
  padding-top: 7rem;
  width: 60px;
  box-shadow: 0 2px 8px #f0f1f2;

  ul li {
    display: flex;
    justify-content: center;
    padding: 1rem 0;
    width: 100%;

    &.active {
      border-right: 3px solid ${props => props.theme.colors.brand["500"]};
    }
  }
`;

const Sidebar = props => {
  return (
    <StyledSidebar>
      <nav>
        <ul>
          <li className="active">
            <Box as={MdBorderAll} size="26px" color="brand.300" />
          </li>
          <li>
            <Box as={MdSearch} size="26px" color="#A6A6A6" />
          </li>
          <li>
            <Box as={FaStore} size="26px" color="#A6A6A6" />
          </li>
        </ul>
      </nav>
    </StyledSidebar>
  );
};

export default Sidebar;
