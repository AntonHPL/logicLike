import styled from "styled-components";
import { stdIndent } from "./variables";

export const StyledAppContainer = styled.div`
  padding: ${stdIndent};
  padding-right: calc(${stdIndent} - 8px);
  height: 100vh;
  scrollbar-gutter: stable;
  overflow: auto;
`
