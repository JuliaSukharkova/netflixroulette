import styled from "styled-components";

export const MovieIdHeader = styled.header`
  display: flex;
  flex-direction: column;
  padding: 35px 35px;
  background: ${(props) => props.theme.background.bgColor};
  gap: 30px;

  @media ${(props) => props.theme.media.medDesktops} {
    padding: 30px 50px;
  }

  @media ${(props) => props.theme.media.smallDesktops} {
    padding: 25px 40px;
  }

  @media ${(props) => props.theme.media.portraitTablets} {
    padding: 20px 20px;
  }
`;
