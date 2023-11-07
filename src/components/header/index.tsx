import { BotaoAdd } from './styles'
import { Bloco, Titulo } from '../../styles'

const Header = () => (
  <Bloco>
    <Titulo>Minha Agenda</Titulo>
    <BotaoAdd to="/add">+ novo contato</BotaoAdd>
  </Bloco>
)

export default Header
