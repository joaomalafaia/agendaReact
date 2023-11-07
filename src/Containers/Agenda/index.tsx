import { useSelector } from 'react-redux'

import Contatos from '../../components/contatos/index'
import Header from '../../components/header/index'
import { RootReducer } from '../../store'

import { Container } from '../../styles'
import { ContatoArea } from './styles'

const Agenda = () => {
  const contatos = useSelector((state: RootReducer) => state.contatos.itens) //a função tem como argumento o estado (o reducer importado pelo Root) e aplica um novo estado ao array do reducer
  return (
    <>
      <Header />
      <Container>
        <ContatoArea>
          {contatos.map((c) => (
            <li key={c.nome}>
              <Contatos
                nome={c.nome}
                foto={c.foto}
                fone={c.fone}
                email={c.email}
                id={c.id}
              />
            </li>
          ))}
        </ContatoArea>
      </Container>
    </>
  )
}

export default Agenda
