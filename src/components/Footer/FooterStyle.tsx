import styled from "styled-components";

export const FooterComponent = styled.footer`
  left: 0;
  bottom: 0;
  height: 40px;
  width: 100%;
  padding: 10px 0;
  background: #424242;
  z-index: 10;

  @media ${(props) => props.theme.media.portraitTablets} {
    padding: 5px 0;
  }
`;

export const FooterImg = styled.img`
  display: block;
  margin: 0 auto;
`;
