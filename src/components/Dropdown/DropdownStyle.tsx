import styled from "styled-components";

export const DropdownContainer = styled.div`
  position: relative;
  width: 160px;
  text-align: left;
  user-select: none;
`;

export const DropdownBtn = styled.button`
  width: 100%;
  padding: 10px 5px;
  background-color: ${(props) => props.theme.background.bgColorTransparent};
  border: 1px solid ${(props) => props.theme.colors.borderColor};
  color: ${(props) => props.theme.colors.primaryColor};
  text-transform: uppercase;
  font-size: ${(props) => props.theme.fontSize.fontSizeXs};
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border-radius: 4px;

  &::after {
    content: '▾';
    font-size: 12px;
    margin-left: 2px;
    color: ${(props) => props.theme.colors.secondaryColor};
  }
`;

export const DropdownMenu = styled.ul<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  width: 100%;
  background-color: ${(props) => props.theme.background.bgColorBtn};
  color: ${(props) => props.theme.colors.primaryColor};
  border-radius: 4px;
  box-shadow: 0 4px 8px ${(props) => props.theme.colors.boxShadowColor};
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
  visibility: ${(props) => (props.$isOpen ? "visible" : "hidden")};
  pointer-events: ${(props) => (props.$isOpen ? "auto" : "none")};
  transition: all 0.2s ease-in-out;
  z-index: 10;
`;

export const DropdownList = styled.li`
  padding: 10px 10px;
  font-size: ${(props) => props.theme.fontSize.fontSizeXs};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.background.bgHoverDrop};
    border-radius: 4px;
  }
`;
