import styled from "styled-components";

export const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? ({theme}) => theme.dark200 : ({theme}) => theme.white100T)};
  color: ${(props) => (props.primary ? ({theme}) => theme.white100 : ({theme}) => theme.dark200)};
  width: ${(props) => (props.large ? "130px" : " 120px")};
  height: 45px;
  font-size: 1em;
  border: 2px solid ${({theme}) => theme.dark300};
  border-radius: 1px;
  &:hover{
    cursor:pointer;
  }
`;
