import styled from "styled-components";

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