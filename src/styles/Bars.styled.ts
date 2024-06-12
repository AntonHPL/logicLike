import styled from "styled-components";
import {
  stdRadius,
  stdFont,
  fontSize,
  stdWeight,
  stdIndent,
  menuWidth,
} from "./variables";

export const StyledBar = styled.div`
  border-radius: ${stdRadius};
  overflow: hidden;
  box-shadow: 0 0 13px -4px rgba(35, 35, 95, 0.19);
  display: flex;
  flex-direction: column;
`

export const StyledImageContainer = styled.div<{ $bgColor: string }>`
  background: ${({ $bgColor }) => ` ${$bgColor}`};
  width: 100%;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const StyledText = styled.p`
  font-family: ${stdFont}, sans-serif;
  font-size: ${fontSize};
  line-height: ${fontSize};
  font-weight: ${stdWeight};
  padding: 12px 18px 18px;
  height: fit-content;

  @media screen and (max-width: 1024px) {
    height: 66px;
  }
`

export const StyledDataContainer = styled.div<{ $rowsNumber: number, $isLast: boolean }>`
  flex-grow: 1;
  display: grid;
  grid-template-columns: repeat(3, calc(100% / 3 - ${stdIndent} / 2));
  grid-template-rows: repeat(${({ $rowsNumber }) => $rowsNumber}, calc(100% / 2 - 9px));
  grid-gap: 18px;
  margin-bottom: ${({ $isLast }) => $isLast ? 0 : stdIndent};
  height: 100%;
  width: calc(100% - ${menuWidth} - ${stdIndent});
  margin-left: auto;
`

export const StyledImage = styled.img`
  width: 144px;
  height: 144px;
`