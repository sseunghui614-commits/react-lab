import styled from "styled-components"
const Button = styled.button`
    background-color: tomato;
    color: #fff;
    border-radius: 1rem;
    border: 1px solid #222;
    padding: 0.5rem 1rem;
`;
const BigBtn = styled(Button)`
  font-size: 2rem;
`;
const TypeBtn = () => {
  return (
    <>
    <Button>작은사이즈</Button>
    <BigBtn>큰사이즈</BigBtn>
    </>
  )
}

export default TypeBtn
