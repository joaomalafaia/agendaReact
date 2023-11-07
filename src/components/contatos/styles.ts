import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const ContatoCard = styled.div`
  width: 194px;
  height: 238px;
  padding: 18px;
  background-color: ${variaveis.card};
  text-align: center;
  border-radius: 5px;
`
export const Nome = styled.h2`
  font-size: 16px;
  font-weight: bold;
  color: ${variaveis.titulo};
  background-color: transparent;
`
export const Foto = styled.img`
  height: 88px;
  width: 88px;
  margin-top: 14px;
  border-radius: 50%;
  object-fit: cover;
`
export const Infos = styled.div`
  margin-top: 16px;
  margin-bottom: 12px;
  font-size: 12px;
  font-weight: 400;
  color: #000000;
  background-color: transparent;

  input {
    background-color: ${variaveis.fundo};
    border: none;
    border-radius: 3px;
    padding: 1px;
    font-size: 12px;
    text-align: center;
  }
`
export const Info = styled.p`
  background-color: transparent;
`
export const Botoes = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
`
export const Botao = styled.button`
  padding: 4px 14px;
  font-weight: bold;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`
export const BotaoEditar = styled(Botao)`
  background-color: ${variaveis.botao};
  color: ${variaveis.fundo};
`
export const BotaoExcluir = styled(Botao)`
  background-color: ${variaveis.fundo};
  color: ${variaveis.botao};
`
