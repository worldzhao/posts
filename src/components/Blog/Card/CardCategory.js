import React from "react";
import styled from "styled-components";

const StyledCategory = styled.div`
  display: inline-block;
  background: #009bbb;
  border-radius: 4px;
  padding: 4px 8px;
  font-size: 12px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 300;
  line-height: 16px;
  font-family: "Quicksand";
  margin-right: 10px;
  margin-bottom: 8px;
`;

export const CardCategory = ({ value }) => (
  <StyledCategory key={value.id} style={{ backgroundColor: `#${value.color}` }}>
    {value.name}
  </StyledCategory>
);
