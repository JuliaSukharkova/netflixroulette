import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  margin-left: auto;
`;

export const InputSearch = styled.input`
  position: absolute;
  right: 4px;
  width: 219px;
  height: 30px;
  padding-left: 5px;
  outline: none;
  border: none;
  transition: all 1s;
  opacity: 0;
  z-index: 5;
  letter-spacing: 0.1em;
  border-radius: 4px;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    width: 300px;
    background-color: ${(props) => props.theme.background.bgColorInput};
    color: ${(props) => props.theme.colors.inputFocusColor};
    opacity: 1;
    cursor: text;
  }
  &:focus ~ .search {
    right: -250px;
    background: ${(props) => props.theme.background.bgColorInput};
    z-index: 6;
    &::before {
      top: 0;
      left: 0;
      width: 25px;
    }
    &::after {
      top: 0;
      left: 0;
      width: 25px;
      height: 2px;
      border: none;
      background: ${(props) => props.theme.colors.primaryColor};
      border-radius: 0%;
      transform: rotate(-45deg);
    }
  }
  &::placeholder {
    color: ${(props) => props.theme.colors.primaryColor};
    opacity: 0.5;
  }
`;

export const SearchDiv = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  transition: all 1s;
  position: relative;
  z-index: 4;
  &:hover {
    cursor: pointer;
  }

  &::before {
    content: "";
    width: 14px;
    height: 2px;
    top: 22px;
    right: 24px;
    position: absolute;
    background: ${(props) => props.theme.colors.secondaryColor};
    transform: rotate(139deg);
    transition: all 0.5s;
  }

  &::after {
    content: "";
    position: absolute;
    width: 21px;
    height: 21px;
    border-radius: 50%;
    border: 2px solid ${(props) => props.theme.colors.secondaryColor};
    transition: all 0.5s;
  }
`;
