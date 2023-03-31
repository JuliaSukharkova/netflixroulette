import styled from "styled-components";

export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: row;
  font-size: ${(props) => props.theme.fontSize.fontSizeL};
  line-height: 24px;
  border-radius: 4px;
  gap: 14px;

  @media ${(props) => props.theme.media.portraitTablets} {
    font-size: ${(props) => props.theme.fontSize.fontSizeM};
  }
`;

export const InputElement = styled.input`
  background: ${(props) => props.theme.background.bgColorInput};
  mix-blend-mode: normal;
  font-size: 20px;
  padding: 19px 16px;
  opacity: 0.7;
  font-weight: 400;
  width: 714px;
  border-radius: 4px;
  color: ${(props) => props.theme.colors.primaryColor};
  border-width: 0;
  &::placeholder{
    font-size: 20px;
  }
  @media ${(props) => props.theme.media.portraitTablets} {
    padding: 16px 12px;
    width: 384px;
  }
  @media ${(props) => props.theme.media.smallDesktops} {
    padding: 16px 14px;
    width: 500px;
  }
  @media ${(props) => props.theme.media.medDesktops} {
    padding: 16px 12px;
    width: 600px;
  }
`;

export const SearchBtn = styled.button`
  font-weight: 500;
  font-size: 20px;
  text-align: center;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.primaryColor};
  background: ${(props) => props.theme.colors.secondaryColor};
  padding: 16px 74px;
  border-radius: 4px;
  cursor: pointer;
  border-width: 0;
  @media ${(props) => props.theme.media.medDesktops} {
    padding: 14px 58px;
  }
  @media ${(props) => props.theme.media.smallDesktops} {
    padding: 12px 48px;
  }
  @media ${(props) => props.theme.media.portraitTablets} {
    padding: 12px 48px;
  }
`;
