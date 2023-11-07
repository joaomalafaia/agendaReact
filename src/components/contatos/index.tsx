import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { excluir, editar } from '../../store/reducers/contatos'
import ContatoClass from '../../models/Contato'

import * as S from './styles'

type Props = ContatoClass

const Contatos = ({
  nome,
  foto,
  fone: foneOriginal,
  email: emailOriginal,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [estaEditando, setEstaEditando] = useState(false)
  const [fone, setFone] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (foneOriginal.length > 0) {
      setFone(foneOriginal)
    }
  }, [foneOriginal])

  useEffect(() => {
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
  }, [emailOriginal])

  function cancelarEdicao() {
    setFone(String(foneOriginal))
    setEmail(emailOriginal)
    setEstaEditando(false)
  }

  return (
    <S.ContatoCard>
      <S.Nome>{nome}</S.Nome>
      <S.Foto src={foto} />
      {estaEditando ? (
        <>
          <S.Infos>
            <input
              type="string"
              value={fone}
              onChange={(evento) => setFone(evento.target.value)}
            />
            <input
              type="email"
              value={email}
              onChange={(evento) => setEmail(evento.target.value)}
            />
          </S.Infos>
          <S.Botoes>
            <S.BotaoEditar
              onClick={() => {
                dispatch(
                  editar({
                    nome,
                    foto,
                    fone,
                    email,
                    id
                  })
                )
                setEstaEditando(false)
              }}
            >
              salvar
            </S.BotaoEditar>
            <S.BotaoExcluir onClick={cancelarEdicao}>cancelar</S.BotaoExcluir>
          </S.Botoes>
        </>
      ) : (
        <>
          <S.Infos>
            <S.Info>{fone}</S.Info>
            <S.Info>{email}</S.Info>
          </S.Infos>
          <S.Botoes>
            <S.BotaoEditar onClick={() => setEstaEditando(true)}>
              editar
            </S.BotaoEditar>
            <S.BotaoExcluir onClick={() => dispatch(excluir(id))}>
              excluir
            </S.BotaoExcluir>
          </S.Botoes>
        </>
      )}
    </S.ContatoCard>
  )
}

export default Contatos
