import styled from '@emotion/styled'



export const Card = styled.div`
  border:1px solid rgba(0,0,0,.125);
  padding:24px;
  border-radius: 0.25rem;

`
export const BlackButton = styled.button`
  background-color: black;
  color: white;
  padding: 12px;
  border-radius: 0.25rem;
  width: 238px;

  &:hover {
    background-color: #333;
  }
`;

export const CreamButton = styled.button`
  background-color: #d5cec7;
  color: black;
  padding: 12px;
  border-radius: 0.375rem;
  width: 238px;

  &:hover {
    background-color: #E6DFD9;
  }
`;