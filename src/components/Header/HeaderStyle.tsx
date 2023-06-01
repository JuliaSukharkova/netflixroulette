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
export const TitleStyle = styled.h1`
  font-weight: 300;
  font-size: 40px;
  margin-left: 278px;
  @media ${(props) => props.theme.media.medDesktops} {
    margin-left: 192px;
  }
  @media ${(props) => props.theme.media.smallDesktops} {
    font-size: 38px;
    margin-left: 138px;
  }

  @media ${(props) => props.theme.media.portraitTablets} {
    font-size: 30px;
    margin-left: 76px;
    margin-top: 52px;
  }
`;
export const Button = styled.button` 
    margin-right: 60px;
    margin-left: auto;
    text-transform: uppercase;
    font-weight: 600;
    font-size: ${props=> props.theme.fontSize.fontSizeL};
    line-height: 24px;
    color: ${props=> props.theme.colors.secondaryColor};
    background: ${props=> props.theme.background.bgColorBtn};
    border-radius: 4px;
    cursor: pointer;
    padding: 12px 18px;
    border-width: 0;

    @media ${props=> props.theme.media.portraitTablets}{
      margin-right: 20px;
      font-size: ${props=> props.theme.fontSize.fontSizeM};
      padding: 8px 14px;
    }
  `;
