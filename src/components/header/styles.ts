import styled from 'styled-components'
import { Link } from 'react-router-dom'

import variaveis from '../../styles/variaveis'

export const BotaoAdd = styled(Link)`
  margin-bottom: 30px;
  padding: 12px 56px;
  background-color: ${variaveis.botao};
  border: none;
  border-radius: 5px;
  font-weight: bold;
  text-decoration: none;
  color: ${variaveis.fundo};
  cursor: pointer;
`
