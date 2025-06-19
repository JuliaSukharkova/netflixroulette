import styled from "styled-components";

export const Main = styled.main`
  padding: 20px 57px;
  background-color: ${(props) => props.theme.background.bgColor};

  @media ${(props) => props.theme.media.portraitTablets} {
    padding: 14px 32px;
  }
`;

export const MenuNav = styled.nav`
  display: flex;
  flex-direction: row;
  margin-bottom: 16px;
  font-size: ${(props) => props.theme.fontSize.fontSizeS};
  text-transform: uppercase;

  @media ${(props) => props.theme.media.portraitTablets} {
    margin-bottom: 8px;
    font-size: ${(props) => props.theme.fontSize.fontSizeXs};
  }
`;

export const NavDropdown = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  color: ${(props) => props.theme.colors.primaryColor};
  text-transform: uppercase;
  gap: 10px;

  @media ${(props) => props.theme.media.portraitTablets} {
    gap: 0;
  }
  @media ${(props) => props.theme.media.smallDesktops} {
    gap: 0;
    font-size: 15px;
  }

  p {
    opacity: 0.6;
  }
`;

export const ActiveLine = styled.div<{ left: number; width: number }>`
  position: absolute;
  bottom: 0;
  height: 3px;
  background-color: ${(props) => props.theme.colors.tertiaryColor};
  transition: all 0.3s ease;
  left: ${({ left }) => `${left}px`};
  width: ${({ width }) => `${width}px`};
  border-radius: 2px;
`;

export const Line = styled.div`
  position: relative;
  width: 100%;
  height: 4px;
  margin-top: -4px;
  border-radius: 2px;
  background-color: ${(props) => props.theme.colors.lineColor};

  @media ${(props) => props.theme.media.portraitTablets} {
    height: 2px;
  }
`;
