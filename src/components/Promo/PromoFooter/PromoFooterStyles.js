import styled from '@emotion/styled'

import { Link } from "gatsby"


export const FooterLink = styled(Link)`
  &:hover {
      font-weight: bold;
    }
`

export const FooterItem = styled.span`
  cursor: pointer;
  &:hover {
      font-weight: bold;
    }
`


export const BlackButton = styled.button`
  background-color: black;
  color: white;
  padding: 12px;
  border-radius: 0.25rem;
  padding-top:4px;
  padding-bottom:4px;
  padding-left:16px;
  padding-right:16px;
  &:hover {
    background-color: #333;
  }
`;

export const CreamButton = styled.button`
  background-color: #d5cec7;
  color: black;
  padding: 12px;
  border-radius: 0.375rem;

  &:hover {
    background-color: #E6DFD9;
  }
`;