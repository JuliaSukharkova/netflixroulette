import styled from "styled-components";

export const HeaderStyle = styled.header`
  width: 100%;
  height: 396px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 35px;
  color: ${(props) => props.theme.colors.primaryColor};
  background: url("https://i.ibb.co/6XjvCPv/Bitmap.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${(props) => props.theme.background.bgColorOpacity};

  @media ${(props) => props.theme.media.portraitTablets} {
    margin-bottom: 8px;
  }
`;
