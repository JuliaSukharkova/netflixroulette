import styled from "styled-components";

export const SuccessIcon = styled.div({
  width: "66px",
  height: "66px",
  background: "#f65261",
  borderRadius: "50%",
  border: "1px solid #f65261",

  "&::after": {
    content: "'\u2714'",
    width: "66px",
    height: "66px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bolder",
    fontSize: "43px",
  },
});
export const SuccessTitle = styled.div`
  font-weight: 300;
  font-size: 40px;
  line-height: 49px;
  letter-spacing: 1px;
  text-transform: uppercase;
`;
export const SuccessDesc = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  width: 302px;
  margin-bottom: 40px;
`;
export const ModalContent = styled.div`
  height: 372px;
  margin-top: 0;
`;
