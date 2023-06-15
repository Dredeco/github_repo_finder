import styled from "styled-components";

export const InputContainer = styled.div`
    border: 1px solid #FAFAFA;
    border-radius: 10px;
    height: 5rem;
    width: 80%;
    margin-top: 2rem;
    
    input {
        background: transparent;
        border: 0;
        width: 100%;
        height: 100%;
        padding: 0 20px;
        color: #FFFFFF;
        font-size: 1.6rem;
        border-radius: 10px;
    }
`

function Input({value, onChange}) {
    return (
      <InputContainer>
          <input placeholder="Nome do usuário" value={value} onChange={onChange}/>
      </InputContainer>
    )
  }
  
export default Input