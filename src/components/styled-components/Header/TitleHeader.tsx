import styled from "styled-components";

export const TitleStyle = styled.h1`
  font-weight: 300;
  font-size: 40px;
  margin-left: 278px;
  @media ${(props) => props.theme.media.medDesktops} {
    margin-left: 192px;
  }
  @media ${(props) => props.theme.media.smallDesktops} {
    font-size: 38px;
    margin-left: 138px;
  }

  @media ${(props) => props.theme.media.portraitTablets} {
    font-size: 30px;
    margin-left: 76px;
    margin-top: 52px;
  }
`;
