import React from "react";
import styled from "@emotion/styled";
import { Heading } from "@chakra-ui/core";

import Button from "../Button";

const StyledHero = styled.header`
  text-align: left;

  h1 {
    font-weight: 400;
  }

  section {
    margin: 2rem 0;
    padding: 1rem;
    background: ${props => props.theme.colors.gray["50"]};

    .primary-text {
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
      color: ${props => props.theme.colors.brand["500"]};
    }

    .details {
      font-size: 0.9rem;
      margin-bottom: 1rem;
      color: #777;
      max-width: 70%;

      a {
        text-decoration: underline;
      }
    }
  }
`;

const Hero = props => {
  return (
    <StyledHero>
      <Heading as="h1" size="xl">
        Content Store
      </Heading>

      <section>
        <div className="primary-text">
          Got bulk orders or almost similar orders ? Fill the order brief in an
          excel sheet
        </div>
        <div className="details">
          If you're wondering about an easy way to place orders in large
          numbers, we provide a way customized just for that. Download our excel
          sheet, and fill the order brief in the prescribed format and submit.
          In case you need any help,{" "}
          <a href="/" alt="place order">
            we are just a click away to assist you in placing your order
          </a>
        </div>

        <Button borderRadius="2px">Order via Excel Sheet</Button>
      </section>
    </StyledHero>
  );
};

export default Hero;
