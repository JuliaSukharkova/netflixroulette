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

export const NavItem = styled.li({
  display: "flex",
  position: "relative",

  "&.active": {
    "&::after": {
      content: "''",
      backgroundColor: "#f38281",
      height: "4px",
      display: "block",
      width: "36px",
      position: "absolute",
      marginTop: "44px",
      zIndex: "1",

      "@media ((max-width: 768px) and (min-width:425px))": {
        height: "2px",
        width: "32px",
        marginTop: "34px",
      },
    },
  },

 "&#documentary":{
  "::after": {
    width: "134px",
    "@media ((max-width: 768px) and (min-width:425px))": {
      width: "114px"
    },
    "@media ((min-width: 768px) and (max-width: 991px))": {
      width: "122px"
    }
 }},
 "&#horror":{
  "::after": {
    width: "82px",
    "@media ((max-width: 768px) and (min-width:425px))": {
      width: "64px"
    },
    "@media ((min-width: 768px) and (max-width: 991px))": {
      width: "70px"
    }
 }},
 "&#comedy":{
  "::after": {
    width: "82px",
    "@media ((max-width: 768px) and (min-width:425px))": {
      width: "64px"
    },
    "@media ((min-width: 768px) and (max-width: 991px))": {
      width: "70px"
    }
 }},
 "&#crime":{
  "::after": {
    width: "66px",
    "@media ((max-width: 768px) and (min-width:425px))": {
      width: "48px"
    },
    "@media ((min-width: 768px) and (max-width: 991px))": {
      width: "52px"
    }
 }}
});

export const NavElement = styled.a`
  color: ${props=> props.theme.colors.primaryColor};

  &:hover {
    color: ${props=> props.theme.colors.tertiaryColor};
  }
  @media ${(props) => props.theme.media.smallDesktops} {
    font-size: 15px;
  }
`;
