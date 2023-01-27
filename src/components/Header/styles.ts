import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  background: #CFD8DC;
  height: 50px;
  align-items: center;
  justify-content: center;
  color: #212121;
`;

export const TitleContainer = styled.div`
  margin: auto;
  font-size: 18px;
`;

export const IconContainer = styled.div`
  padding: 10px;
  cursor: pointer;

  & svg {
    height: 30px;
  }
`;