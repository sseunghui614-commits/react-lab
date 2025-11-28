import styled from "styled-components";
const Box = styled.button`
/* background-color: tomato */
background-color: ${(props)=>{
    return props.color
}};
`;
const Component = ({color}) => {
  return (
    <Box color={color}>스타일 컴포넌트</Box>
  )
}

export default Component
