import styled from "styled-components";

export const MovieIdContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 58px;
  @media ${(props) => props.theme.media.portraitTablets} {
    gap: 38px;
  }
`;

export const MovieIdImg = styled.img`
  width: 324px;
  height: 486px;
  @media ${(props) => props.theme.media.portraitTablets} {
    width: 246px;
    height: auto;
  }
  @media ${(props) => props.theme.media.smallDesktops} {
    height: 404px;
  }
`;

export const MovieIdInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 25px;
  margin-bottom: 8px;
  @media ${(props) => props.theme.media.portraitTablets} {
    gap: 20px;
    line-height: 27px;
  }
`;

export const MovieIdTitle = styled.h1`
  margin: 0;
  font-weight: 300;
  font-size: 40px;
  line-height: 49px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.primaryColor};

  @media ${(props) => props.theme.media.portraitTablets} {
    font-size: 29px;
  }
  @media ${(props) => props.theme.media.smallDesktops} {
    font-size: 35px;
    line-height: 35px;
  }
`;

export const MovieIdVote = styled.p`
  font-weight: 300;
  font-size: ${(props) => props.theme.fontSize.fontSizeL};
  line-height: 24px;
  text-align: center;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.primaryColor};
  border: 2px solid;
  padding: 18px 18px;
  border-radius: 50%;

  @media ${(props) => props.theme.media.smallDesktops} {
    padding: 16px;
    font-size: 18px;
  }
  @media ${(props) => props.theme.media.portraitTablets} {
    padding: 10px;
    font-size: 17px;
  }
`;

export const MovieIdGenre = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  font-weight: 500;
  font-size: ${(props) => props.theme.fontSize.fontSizeXs};
  line-height: 17px;
  color: ${(props) => props.theme.colors.primaryColor};
  mix-blend-mode: normal;
  opacity: 0.5;
  margin-bottom: 30px;

  @media ${(props) => props.theme.media.portraitTablets} {
    margin-bottom: 20px;
  }

  p:not(:last-child):after {
    content: ", ";
  }
`;

export const MovieIdRelease = styled.div`
  display: flex;
  gap: 50px;
  font-weight: 300;
  font-size: 24px;
  line-height: 29px;
  color: ${(props) => props.theme.colors.secondaryColor};
  margin-bottom: 30px;

  @media ${(props) => props.theme.media.portraitTablets} {
    font-size: 20px;
    gap: 30px;
    margin-bottom: 20px;
  }
`;

export const MovieIdOverview = styled.div`
  width: 90%;
  font-weight: 300;
  font-size: ${(props) => props.theme.fontSize.fontSizeL};
  line-height: 24px;
  color: ${(props) => props.theme.colors.primaryColor};
  mix-blend-mode: normal;
  opacity: 0.5;
  @media ${(props) => props.theme.media.smallDesktops} {
    font-size: 15px;
  }
  @media ${(props) => props.theme.media.portraitTablets} {
    font-size: 14px;
  }
`;
