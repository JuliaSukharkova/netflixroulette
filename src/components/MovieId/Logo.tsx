import styled from "styled-components";

export const Logo = styled.header`
  font-weight: 300;
  font-size: ${(props) => props.theme.fontSize.fontSizeL};
  line-height: 24px;
  color: ${(props) => props.theme.colors.secondaryColor};
`;
