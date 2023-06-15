import styled from "styled-components";

const ButtonContainer = styled.button`
    background-color: #FAFAFA;
    border: 1px solid #FAFAFA;
    border-radius: 10px;
    padding: 1.5rem 0;
    width: 80%;
    margin: 1.5rem;
    &:hover {
        background-color: #000;
        color: #fff;
        cursor: pointer;
    }
`

function Button({onClick}) {
  return (
    <ButtonContainer onClick={onClick}>
       Buscar
    </ButtonContainer>
  )
}

export default Button