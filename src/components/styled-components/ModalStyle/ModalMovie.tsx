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
  background: rgba(50, 50, 50, 0.948044);
  mix-blend-mode: normal;
  opacity: 0.8;
  border-radius: 4px;
  height: ${(props) => (props.height || "40") + "px"};
  width: ${(props) => props.width + "px"};

  &::placeholder {
    color: rgb(159, 159, 159);
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
  border: 1.5px solid #f65261;
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

export const CheckboxDropDown = styled.div({
  position: "relative",
  margin: "0 auto",
  width: "406px",
  height: "40px",
  background: "rgba(50, 50, 50, 0.948044)",
  mixBlendMode: "normal",
  opacity: "0.8",
  borderRadius: "4px",
  outline: "none",
  userSelect: "none",
  "::after": {
    content: "''",
    height: "0",
    position: "absolute",
    width: "0",
    border: "6px solid transparent",
    borderTopColor: "#f38281",
    top: "50%",
    right: "10px",
    marginTop: "-3px",
  },
  "&.is-active": {
    "::after": {
      borderBottomColor: "#f38281",
      borderTopColor: "transparent",
      marginTop: "-9px",
    },
  },
  "&.is-active section": {
    opacity: "1",
    pointerEvents: "auto",
  },
});

export const CheckboxTitle = styled.p`
  margin: 0;
  color: ${(props) => props.theme.colors.primaryColor};
  mix-blend-mode: normal;
  opacity: 0.8;
  padding-top: 10px;
  padding-left: 18px;
`;

export const CheckboxList = styled.section({
  position: "absolute",
  top: "100%",
  left: "-1px",
  right: "-1px",
  opacity: "0",
  transition: "opacity 0.4s ease-in-out",
  height: "100px",
  pointerEvents: "none",

  "& label:hover::before, input:hover + label::before": {
    backgroundColor: "#f65261",
  },
  "& input:checked + label::before": {
    content:"'\u2714'",
    color: "white",
    textAlign: "center",
    backgroundColor: "#f65261",
  }
});

export const CheckboxItem = styled.div({
  display: "block",
  padding: "6px",
  transition: "all 0.2s ease-out",
  background: " rgb(35, 35, 35)",
  boxShadow:
    "0px 0px 2px rgba(0, 0, 0, 0.1), 0px 2px 10px rgba(0, 0, 0, 0.1), 0px 10px 20px rgba(0, 0, 0, 0.1), 0px 10px 50px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(13.5914px)",
  borderRadius: "4px",
});

export const CheckboxInput = styled.input`
  cursor: pointer;
  opacity: 0;
  position: absolute;
`;

export const CheckboxLabel =styled.label({
   "&::before": {
    content: "''",
      width: "16px",
      display: "inline-block",
      height: "16px",
      marginRight: "6px",
      borderRadius: "0.15em",
      outline: "none",
      background: "white",
   }
})