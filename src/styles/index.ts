import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Merriweather Sans', sans-serif;
    background-color: ${variaveis.fundo};
  }
`
export const Container = styled.div`
  max-width: 882px;
  width: 100%;
  margin: 0 auto;
`
export const Bloco = styled.div`
  margin-top: 120px;
  text-align: center;
  margin-bottom: 32px;
`
export const Titulo = styled.h1`
  margin-bottom: 16px;
  font-size: 24px;
  font-weight: bold;
  color: ${variaveis.titulo};
`
export default EstiloGlobal
