import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderStyle = styled.header`
  width: 100%;
  height: 396px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 35px;
  color: ${(props) => props.theme.colors.primaryColor};
  background: url("https://i.ibb.co/6XjvCPv/Bitmap.png") no-repeat center/cover;
  background-color: ${(props) => props.theme.background.bgColorOpacity};
  padding: 0 20px;      
  box-sizing: border-box;

  @media ${(props) => props.theme.media.portraitTablets} {
    height: auto;
    padding: 0 10px;
    margin-bottom: 8px;
  }
`;

export const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 auto;   
  box-sizing: border-box;
  padding-top: 20px;

  @media ${(props) => props.theme.media.portraitTablets} {
    max-width: 100%;
  }
`;

export const LogoLink = styled(Link)`
  display: block;
  img {
    max-width: 150px;
    height: auto;
    display: block;
  }
`;

export const TitleAndSearch = styled.div`
  width: 820px; 
  margin-left: 60px; 
  display: flex;
  align-items: center;
  height: 200px;

  @media ${(props) => props.theme.media.portraitTablets} {
    width: 420px;  
    margin-left: 20px;
  }
`;

