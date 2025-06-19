import styled from "styled-components";

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

export const MovieIdContainer = styled.div`
  display: flex;
  gap: 40px;
  padding: 30px 0;
  @media ${(props) => props.theme.media.portraitTablets} {
    flex-direction: column;
    gap: 20px;
  }
`;

export const MovieIdImg = styled.img`
  width: 320px;
  border-radius: 12px;
  box-shadow: 0 12px 24px rgba(0,0,0,0.3);
  object-fit: cover;
  @media ${(props) => props.theme.media.portraitTablets} {
    width: 100%;
    height: auto;
  }
`;

export const MovieDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  color: ${(props) => props.theme.colors.primaryColor};
`;

export const MovieIdTitle = styled.h1`
  font-weight: 700;
  font-size: 42px;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  color: ${(props) => props.theme.colors.primaryColor};

  @media ${(props) => props.theme.media.portraitTablets} {
    font-size: 28px;
  }
`;

export const MovieIdVote = styled.div`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.colors.secondaryColor};
  color: #fff;
  width: fit-content;
  padding: 8px 14px;
  border-radius: 30px;
  font-weight: 600;
  font-size: 18px;
  gap: 6px;
  margin-bottom: 20px;

  svg {
    width: 18px;
    height: 18px;
    fill: #fff;
  }

  @media ${(props) => props.theme.media.portraitTablets} {
    font-size: 16px;
    padding: 6px 12px;
  }
`;

export const Genres = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 25px;
`;

export const GenreTag = styled.span`
  background: ${(props) => props.theme.colors.secondaryColor};
  color: #fff;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  text-transform: capitalize;
  user-select: none;
  transition: background 0.3s ease;

  &:hover {
    background: ${(props) => props.theme.colors.primaryColor};
    cursor: default;
  }
`;

export const ReleaseInfo = styled.div`
  display: flex;
  gap: 10px;
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 20px;
  color: ${(props) => props.theme.colors.secondaryColor};
  align-items: center;

  @media ${(props) => props.theme.media.portraitTablets} {
    font-size: 16px;
    gap: 20px;
  }
`;

export const Description = styled.p`
  font-weight: 300;
  font-size: 18px;
  line-height: 1.6;
  opacity: 0.7;
  max-width: 800px;

  @media ${(props) => props.theme.media.portraitTablets} {
    font-size: 16px;
  }
`;
