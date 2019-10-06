import React from "react";
import styled from "@emotion/styled";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn
} from "react-icons/fa";
import { Box } from "@chakra-ui/core";

const StyledFooter = styled.footer`
  color: #a6a6a6;
  text-align: center;
  .icons-group {
    display: flex;
    justify-content: center;

    svg:not(:last-child) {
      margin-right: 2.5rem;
    }

    svg:hover {
      transform: scale(1.1);
      fill: ${props => props.theme.colors.brand["300"]};
    }
  }

  .footer-text {
    margin-top: 1rem;
    span {
      display: block;
    }
  }

  .links-group {
    margin-top: 1.5rem;
    a {
      border-bottom: 1px solid #a6a6a6;
      margin: 0 0.5rem;

      &:hover {
        color: ${props => props.theme.colors.brand["500"]};
        border-bottom: 1px solid ${props => props.theme.colors.brand["500"]};
        margin: 0 0.5rem;
        transform: scale(1.1);
      }
    }
  }
`;

const Footer = props => {
  return (
    <StyledFooter>
      <div className="icons-group">
        <Box as={FaTwitter} size="40px" color="#A6A6A6" m={3} />
        <Box as={FaLinkedinIn} size="40px" color="#A6A6A6" m={3} />
        <Box as={FaInstagram} size="40px" color="#A6A6A6" m={3} />
        <Box as={FaFacebookF} size="40px" color="#A6A6A6" m={3} />
      </div>

      <div className="footer-text">
        Copyright @ 2019 White Panda Media Pvt. Ltd.
        <span>All rights reserved</span>
      </div>

      <div className="links-group">
        <a href="/" alt="Privacy Policy">
          Privacy Policy
        </a>
        <a href="/" alt="Terms of Service">
          Terms of Service
        </a>
        <a href="/" alt="Service Agreement">
          Service Agreement
        </a>
        <a href="/" alt="Contact Us">
          Contact Us
        </a>
      </div>
    </StyledFooter>
  );
};

export default Footer;
