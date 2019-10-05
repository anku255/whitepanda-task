import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { Avatar } from "@chakra-ui/core";
import Button from "../Button";

const StyledCard = styled.div`
  padding: 2rem 3rem;
  background: #fdfdfd;
  text-align: left;

  &:hover {
    background: #ffffff;
    box-shadow: 0 18px 18px #f0f1f2;

    .avatar {
      border-radius: 50%;
      background: ${props => props.theme.colors.brand["500"]};

      svg {
        display: none;
      }
    }

    .header__right__title {
      color: ${props => props.theme.colors.brand["500"]};
    }
  }

  .header {
    display: flex;

    &__right {
      margin-left: 1.5rem;
      &__title {
        font-weight: bold;
        font-size: 1.1rem;
      }
      &__subtitle {
        opacity: 0.8;
      }
    }
  }

  .body {
    margin: 1.2rem 0;
    color: #999999;
    font-size: 0.9rem;
  }
`;
const Card = props => {
  return (
    <StyledCard className="card" {...props}>
      <div className="header">
        <Avatar className="avatar"></Avatar>
        <div className="header__right">
          <div className="header__right__title">{props.title}</div>
          <div className="header__right__subtitle">from ₹{props.price}</div>
        </div>
      </div>
      <div className="body">{props.description}</div>
      <div className="footer">
        <Button>Order</Button>
      </div>
    </StyledCard>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number
};

export default Card;
