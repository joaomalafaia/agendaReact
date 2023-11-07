import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Form = styled.form`
  display: block;
`

export const Campo = styled.input`
  width: 548px;
  height: 32px;
  margin-bottom: 16px;
  padding-left: 8px;
  background-color: ${variaveis.card};
  border: none;
  border-radius: 5px;
  font-size: 12px;
  color: #1e1e1e;

  &:focus {
    outline: 2.5px solid ${variaveis.botao};
    border: none;
  }
`
export const Botao = styled.button`
  margin: 16px auto 0;
  display: block;
  padding: 12px 56px;
  background-color: ${variaveis.botao};
  border: none;
  border-radius: 5px;
  font-weight: bold;
  text-decoration: none;
  color: ${variaveis.fundo};
  cursor: pointer;
`
