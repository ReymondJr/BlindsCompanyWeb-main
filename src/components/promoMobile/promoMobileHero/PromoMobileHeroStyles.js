import styled from '@emotion/styled'

export const ImgWrapper = styled.div`
  position: relative;
  text-align: center;
`;



export const ContentWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
`;

export const Title = styled.h1`
  font-size: 45px;
  color: white;
  font-weight:bold;
  margin-bottom: 50px;
`;

export const BlackButton = styled.button`
  background-color: black;
  color:white;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 16px;
  padding-bottom: 16px;
  border-radius: 0.25rem;
  width: 100%;

  &:hover {
    background-color: #333;
  }

`

export const CreamButton = styled.button`
  background-color: #d5cec7;
  color:black;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 16px;
  padding-bottom: 16px;
  border-radius: 0.375rem;
  width: 100%;
  &:hover {
    background-color: #E6DFD9;
  }

`