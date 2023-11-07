import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { Container } from '../../styles'
import { Botao, Campo, Form } from './styles'
import { adicionar } from '../../store/reducers/contatos'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [nome, setNome] = useState('')
  const [fone, setFone] = useState('')
  const [email, setEmail] = useState('')
  const [foto, setFoto] = useState('')

  const adicionarContato = (e: FormEvent) => {
    e.preventDefault()

    dispatch(
      adicionar({
        nome,
        foto,
        fone,
        email
      })
    )
    navigate('/')
  }

  return (
    <Container>
      <Form onSubmit={adicionarContato}>
        <Campo
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          type="text"
          placeholder="Nome"
        />
        <Campo
          value={fone}
          onChange={(e) => setFone(e.target.value)}
          type="tel"
          placeholder="Telefone"
        />
        <Campo
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="E-mail"
        />
        <Campo
          value={foto}
          onChange={(e) => setFoto(e.target.value)}
          type="url"
          placeholder="Foto (link)"
        />
        <Botao>adicionar contato</Botao>
      </Form>
    </Container>
  )
}

export default Formulario
