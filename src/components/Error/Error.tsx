import styled from "styled-components";

export const Error = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: ${(props) => props.theme.colors.secondaryColor};
`;
