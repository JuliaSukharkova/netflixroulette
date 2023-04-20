import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  cursor: pointer;
`;

export const NavList = styled.ul`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0;
  gap: 30px;
  cursor: pointer;

  @media ${(props) => props.theme.media.portraitTablets} {
    gap: 10px;
  }
  @media ${(props) => props.theme.media.smallDesktops} {
    gap: 12px;
  }
`;

export const NavItem = styled.li`
  display: flex;
  position: relative;

  &.active {
    &::after {
      content: "";
      background-color: ${(props) => props.theme.colors.tertiaryColor};
      height: 4px;
      display: block;
      width: 36px;
      position: absolute;
      margin-top: 44px;
      z-index: 1;

      @media ${(props) => props.theme.media.portraitTablets}{
        height: 2px;
        width: 32px;
        margin-top: 34px;
      }
    }
  }

  &#documentary {
    ::after {
      width: 134px;
      @media ${(props) => props.theme.media.portraitTablets}{
        width: 114px;
      }
      @media ${(props) => props.theme.media.smallDesktops} {
        width: 122px;
      }
    }
  }
  &#horror {
    ::after {
      width: 82px;
      @media ${(props) => props.theme.media.portraitTablets} {
        width: 64px;
      }
      @media ${(props) => props.theme.media.smallDesktops} {
        width: 70px;
      }
    }
  }
  &#comedy {
    ::after {
      width: 82px;
      @media ${(props) => props.theme.media.portraitTablets} {
        width: 64px;
      }
      @media ${(props) => props.theme.media.smallDesktops} {
        width: 70px;
      }
    }
  }
  &#crime {
    ::after {
      width: 66px;
      @media ${(props) => props.theme.media.portraitTablets}{
        width: 48px;
      }
      @media ${(props) => props.theme.media.smallDesktops}  {
        width: "52px";
      }
    }
  }
`;

export const NavElement = styled.a`
  color: ${(props) => props.theme.colors.primaryColor};

  &:hover {
    color: ${(props) => props.theme.colors.tertiaryColor};
  }
  @media ${(props) => props.theme.media.smallDesktops} {
    font-size: 15px;
  }
`;
