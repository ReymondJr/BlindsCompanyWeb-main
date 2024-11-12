import styled from "@emotion/styled";

export const ItemsContainer = styled.div`
  padding-top: 6px;
  padding-bottom: 6px;
  font-size: 15px;
  background-color: #d5cec7;
`;

export const PhoneNumbersContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 30px;
  font-size: 16px;
`;

export const IconText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  cursor: pointer;

  &:hover {
    color: black;
  }
`;

export const HeaderItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  left: 0px;
  top: 0px;
  z-index: 100;
  background: white;
  padding: 20px 102px;
`;

export const ContactText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

export const ClickIcon = styled.div`
  cursor: pointer;
  &:hover {
    color: black;
  }
`;
