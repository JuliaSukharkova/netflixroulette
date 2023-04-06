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

export const Line = styled.div`
  position: relative;
  width: 100%;
  border-top: 4px solid #424242;

  @media ${(props) => props.theme.media.portraitTablets} {
    border-top: 2px solid #424242;
  }
`;
