import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { Button } from "@chakra-ui/core";

const StyledButton = styled(Button)`
  padding: ${props => props.padding};
  width: auto;
  height: auto;
  border-radius: ${props => props.borderRadius};
`;

const CustomButtom = props => {
  return (
    <StyledButton variantColor="brand" variant="outline" {...props}>
      {props.children}
    </StyledButton>
  );
};

export default CustomButtom;

CustomButtom.propTypes = {
  padding: PropTypes.string,
  borderRadius: PropTypes.string
};

CustomButtom.defaultProps = {
  padding: "5px 35px",
  borderRadius: "0"
};
