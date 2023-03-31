import styled from "styled-components";

export const MovieIdHeader = styled.header`
  display: flex;
  flex-direction: column;
  height: 654px;
  padding: 35px 60px;
  background: ${props => props.theme.background.bgColor};
  gap: 30px;
  @media ${(props) => props.theme.media.medDesktops} {
    height: 620px;
  }
  @media ${(props) => props.theme.media.smallDesktops} {
    height: 552px;
  }
  @media ${(props) => props.theme.media.portraitTablets} {
    height: 510px;
  }
`;
