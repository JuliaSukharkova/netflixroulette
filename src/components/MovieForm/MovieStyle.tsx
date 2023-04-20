import styled from "styled-components";

export const MovieSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin: 28px 0;
  gap: 34px;

  @media ${(props) => props.theme.media.portraitTablets} {
    gap: 42px;
    justify-content: center;
  }
  @media ${(props) => props.theme.media.smallDesktops} {
    gap: 24px;
  }
  @media ${(props) => props.theme.media.medDesktops} {
    gap: 28px;
  }
`;

export const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  line-height: 17px;
  width: 323px;
  gap: 10px;
  cursor: pointer;

  @media ${(props) => props.theme.media.portraitTablets} {
    line-height: 14px;
    width: 318px;
  }
  @media ${(props) => props.theme.media.smallDesktops} {
    line-height: 14px;
    width: 268px;
  }
  @media ${(props) => props.theme.media.medDesktops} {
    width: 296px;
  }

  a {
    color: ${(props) => props.theme.colors.primaryColor};
  }
`;

export const MovieImg = styled.div`
  height: 486px;
  background: url("https://i.ibb.co/6XjvCPv/Bitmap.png");

  @media ${(props) => props.theme.media.portraitTablets} {
    width: 318px;
    height: 468px;
  }
  @media ${(props) => props.theme.media.smallDesktops} {
    height: 414px;
    width: 268px;
  }
  @media ${(props) => props.theme.media.medDesktops} {
    height: 414px;
    width: 296px;
  }
  img {
    height: 486px;

    @media ${(props) => props.theme.media.portraitTablets} {
      height: 468px;
      width: 318px;
    }
    @media ${(props) => props.theme.media.smallDesktops} {
      height: 414px;
      width: 268px;
    }
    @media ${(props) => props.theme.media.medDesktops} {
      height: 414px;
      width: 296px;
    }
  }
`;

export const MovieTitle = styled.p`
  font-size: ${(props) => props.theme.fontSize.fontSizeM};
  line-height: 22px;
  opacity: 0.7;

  @media ${(props) => props.theme.media.smallDesktops} {
    font-size: 18px;
    line-height: 18px;
  }
`;
export const MovieYear = styled.p`
  margin-left: auto;
  padding: 4px 8px;
  border-radius: 4px;
  opacity: 0.5;
  border: 1px solid ${(props) => props.theme.colors.borderColor};
  text-align: center;
`;

export const MovieGenre = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  opacity: 0.5;

  p:not(:last-child):after {
    content: ", ";
  }
`;
