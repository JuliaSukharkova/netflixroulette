import styled from "styled-components";

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  z-index: 2;
  text-transform: uppercase;
  width: 166px;
  text-align: right;

  @media ${(props) => props.theme.media.portraitTablets} {
    width: 150px;
  }
  &:hover ul {
    visibility: visible;
    opacity: 1;
    pointer-events: auto;
    cursor: pointer;
  }
`;


export const DropdownBtn = styled.button({
  display: "inline-block",
  padding: "10px",
  textTransform: "uppercase",
  backgroundColor: "rgba(0, 0, 0, 0)",
  border: "none",
  cursor: "pointer",
  color: "white",
  "::after": {
    content: "'\u25BC'",
    color: "#F65261",
    paddingLeft: "10px",
    fontSize: "12px",
  },
});

export const DropdownMenu = styled.ul`
  position: absolute;
  visibility: hidden;
  top: 100%;
  left: 0;
  padding: 0;
  margin: 0;
  width: 156px;
  background-color: ${(props) => props.theme.colors.secondaryColor};
  color: ${(props) => props.theme.colors.primaryColor};
  text-transform: uppercase;
  box-shadow: 0 3px 2px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  text-align: left;
  opacity: 0;
  pointer-events: none;
  transition: opacity 150ms ease-in-out;

  @media (max-width: $screen-md) {
    width: 138px;
  }
`;

export const DropdownList = styled.li`
  display: block;
  padding: 10px;
  text-decoration: none;
  border-width: 0;
  border-radius: 4px;
  color: ${(props) => props.theme.colors.primaryColor};

  &:hover {
    background: #888;
  }
`;
