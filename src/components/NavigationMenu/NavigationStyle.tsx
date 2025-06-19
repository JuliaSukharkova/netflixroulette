import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  cursor: pointer;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 24px;
  padding: 0;
  margin: 0;
  list-style: none;

  @media ${(props) => props.theme.media.portraitTablets} {
    gap: 12px;
  }
`;

export const NavWrapper = styled.div`
  display: flex;
  flex: 1; 
`;

export const NavItem = styled.li`
  position: relative;
  padding-bottom: 8px;

  &.active a {
    font-weight: 600;
  }

  a {
    color: ${(props) => props.theme.colors.primaryColor};
    font-size: ${(props) => props.theme.fontSize.fontSizeS};
    text-transform: uppercase;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: ${(props) => props.theme.colors.secondaryColor};
    }
  }
`;

export const NavElement = styled.a`
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
  transition: color 0.2s ease;

  color: ${(props) => props.theme.colors.primaryColor};
  font-size: ${(props) => props.theme.fontSize.fontSizeS};
  text-transform: uppercase;

  &:hover {
    color: ${(props) => props.theme.colors.secondaryColor};
  }
`;
