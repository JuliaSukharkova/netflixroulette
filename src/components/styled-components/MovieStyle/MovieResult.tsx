import styled from "styled-components";

export const MovieResults = styled.p`
  font-size: ${(props) => props.theme.fontSize.fontSizeL};
  line-height: 24px;
  margin-top: 24px;
  @media ${(props) => props.theme.media.portraitTablets}{
    font-size: ${(props) => props.theme.fontSize.fontSizeM};
    line-height: 20px;
  }
  span {
    font-weight: 700;
    @media ${(props) => props.theme.media.portraitTablets}{
      font-weight: 600;
    }
  }
`;
