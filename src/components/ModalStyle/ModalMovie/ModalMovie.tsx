import styled from "styled-components";

export const ModalSection = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 48px;
  gap: 30px;
  margin-bottom: 20px;
`;

export const ModalTitle = styled.h1`
  margin: 0;
  font-style: normal;
  font-weight: 300;
  font-size: 40px;
  line-height: 49px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.primaryColor};
`;

export const ModalForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const ModalItem = styled.label`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 6px;
`;
export const ModalName = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.888889px;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.secondaryColor};
  mix-blend-mode: normal;
  opacity: 0.8;
  margin: 0;
`;

export const ModalInput = styled.input`
  outline: none;
  border: none;
  color: ${(props) => props.theme.colors.primaryColor};
  padding-left: 18px;
  background: ${(props) => props.theme.background.bgInputModal};
  mix-blend-mode: normal;
  opacity: 0.8;
  border-radius: 4px;
  height: ${(props) => (props.height || "40") + "px"};
  width: ${(props) => props.width + "px"};

  &::placeholder {
    color: ${(props) => props.theme.colors.placeholderModalColor};
    position: absolute;
    top: 10px;
    left: 18px;
  }
  ::-webkit-calendar-picker-indicator {
    color: ${(props) => props.theme.colors.tertiaryColor};
    cursor: pointer;
    width: 30px;
    height: 30px;
    filter: invert(1);
  }
`;
type Btn = {
  background?: string;
};
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;
  gap: 6px;
`;
export const ModalButton = styled.button<Btn>`
  padding: 10px 48px;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  text-transform: uppercase;
  color: ${(props) => props.color || props.theme.colors.primaryColor};
  border: 1.5px solid ${(props) => props.theme.colors.secondaryColor};
  border-radius: 4px;
  box-sizing: border-box;
  background: ${(props) =>
    props.background || props.theme.colors.secondaryColor};
  cursor: pointer;
`;

export const ModalCheckbox = styled.div`
  position: relative;
  z-index: 11;
`;

export const CheckboxDropDown = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  width: 406px;
  height: 40px;
  background: ${(props) => props.theme.background.bgInputModal};
  color: ${(props) => props.theme.colors.primaryColor};
  opacity: 0.8;
  padding-left: 18px;
  mix-blend-mode: normal;
  border-radius: 4px;
  outline: none;
  user-select: none;
  border: none;
  cursor: pointer;
  &::after {
    content: "\u25BC";
    position: absolute;
    color: ${(props) => props.theme.colors.checkBoxModalColor};
    right: 10px;
    font-size: 12px;
  }
  &.is-active {
    &::after {
      transform: rotate(180deg);
    }
  }
  &.is-active:hover div {
    visibility: visible;
    opacity: 1;
    pointer-events: auto;
    cursor: pointer;
  }
`;

export const CheckboxList = styled.div`
  position: absolute;
  top: 100%;
  left: -1px;
  right: -1px;
  opacity: 0;
  transition: opacity 0.4s ease-in-out;
  height: 100px;
  pointer-events: none;
  text-align: initial;

  & label:hover::before,
  input:hover + label::before {
    background-color: ${(props) => props.theme.colors.secondaryColor};
  }
  & input:checked + label::before {
    content: "\u2714";
    color: ${(props) => props.theme.colors.primaryColor};
    text-align: center;
    background-color: ${(props) => props.theme.colors.secondaryColor};
  }
`;

export const CheckboxItem = styled.div`
  display: block;
  padding: 6px;
  transition: all 0.2s ease-out;
  background: ${(props) => props.theme.background.bgCheckBoxItem};
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1), 0px 2px 10px rgba(0, 0, 0, 0.1),
    0px 10px 20px rgba(0, 0, 0, 0.1), 0px 10px 50px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(13.5914px);
  border-radius: 4px;
`;

export const CheckboxInput = styled.input`
  cursor: pointer;
  opacity: 0;
  position: absolute;
`;
export const CheckboxTextArea = styled.textarea`
  outline: none;
  border: none;
  color: ${(props) => props.theme.colors.primaryColor};
  padding-left: 18px;
  padding-top: 10px;
  background: rgba(50, 50, 50, 0.948044);
  mix-blend-mode: normal;
  opacity: 0.8;
  border-radius: 4px;
  height: 160px;
  width: 630px;

  &::placeholder {
    color: rgb(159, 159, 159);
    position: absolute;
    top: 10px;
    left: 18px;
  }
`;
export const CheckboxLabel = styled.label`
  &::before {
    content: "";
    width: 16px;
    display: inline-block;
    height: 16px;
    margin-right: 6px;
    border-radius: 0.15em;
    outline: none;
    background: ${(props) => props.theme.colors.primaryColor};
  }
`;

export const Error = styled.p`
  position: absolute;
  bottom: -18px;
  font-size: 12px;
  color: ${(props) => props.theme.colors.secondaryColor};
`;
