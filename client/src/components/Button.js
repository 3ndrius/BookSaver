
import styled from 'styled-components' 

export const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  width: ${props => props.large ? "130px" : " 120px"};
  height: 45px;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 1px;
`;
