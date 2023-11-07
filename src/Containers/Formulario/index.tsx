import { Container } from '../../styles'
import { Botao, Campo, Form } from './styles'

const Formulario = () => (
  <Container>
    <Form>
      <Campo type="text" placeholder="Nome" />
      <Campo type="tel" placeholder="Telefone" />
      <Campo type="email" placeholder="E-mail" />
      <Botao>adicionar contato</Botao>
    </Form>
  </Container>
)

export default Formulario
