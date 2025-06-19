import styled from "styled-components";

export const MovieSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 34px;
  margin: 28px 0;
  justify-content: center;

  @media ${(props) => props.theme.media.portraitTablets} {
    gap: 24px;
  }
`;

export const MovieCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  border-radius: 16px;
  overflow: hidden;
  background-color: ${(props) => props.theme.background.card};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
  }

  @media ${(props) => props.theme.media.portraitTablets} {
    width: 100%;
    max-width: 300px;
  }
`;

export const MovieImageWrapper = styled.div`
  height: 420px;
  background-color: #1c1c1c;
  border-radius: 16px 16px 0 0;
  overflow: hidden;

  @media ${(props) => props.theme.media.smallDesktops} {
    height: 380px;
  }
`;

export const PosterImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const MovieInfo = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const TitleYear = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 8px;
`;
export const MovieYear = styled.span`
  padding: 2px 6px;
  font-size: 12px;
  border: 1px solid ${(props) => props.theme.colors.borderColor};
  border-radius: 4px;
  opacity: 0.6;
`;

export const MovieTitle = styled.h3`
  font-size: ${(props) => props.theme.fontSize.fontSizeM};
  color: ${(props) => props.theme.colors.primaryColor};
  font-weight: 600;
  margin: 0;
`;

export const GenreList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  font-size: 14px;
  opacity: 0.7;

  span:not(:last-child)::after {
    content: ",";
    margin-right: 4px;
  }
`;
