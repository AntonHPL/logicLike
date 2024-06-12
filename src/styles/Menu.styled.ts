import styled from "styled-components"
import {
  stdRadius,
  menuWidth,
  fontSize,
  stdWeight,
  stdFont,
} from "./variables"

export const StyledMenu = styled.nav`
  border: 1px solid #CFCFE4;
  border-radius: ${stdRadius};
  padding: 12px;
  width: ${menuWidth};
  height: 234px;
  position: fixed;
`

export const StyledMenuItem = styled.p<{ $isActive: boolean }>`
  font-size: ${fontSize};
  font-weight: ${stdWeight};
  padding: 12px;
  border-radius: 12px;
  font-family: ${stdFont}, sans-serif;
  line-height: ${fontSize};
  width: 240px;
  cursor: pointer;
    
  ${({ $isActive }) => $isActive && `
    color: #FFF;
    background: #5FBF77;
  `}

  &:hover {
    text-decoration: underline;
  }
`