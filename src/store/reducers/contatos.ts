import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import Contato from '../../models/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      nome: 'Taylor Swift',
      foto: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Taylor_Swift_at_the_2023_MTV_Video_Music_Awards_%283%29.png/230px-Taylor_Swift_at_the_2023_MTV_Video_Music_Awards_%283%29.png',
      fone: '(13)13131313',
      email: 'ts@gmail.com',
      id: 1
    },
    {
      nome: 'Lorde',
      foto: 'https://i.scdn.co/image/ab6761610000e5ebc4902f080d3620b3e6da80c3',
      fone: '(11)00000000',
      email: 'lorde@gmail.com',
      id: 2
    },
    {
      nome: 'Phoebe Bridgers',
      foto: 'https://i.scdn.co/image/ab6761610000e5eb626686e362d30246e816cc5b',
      fone: '(11)00000050',
      email: 'phoebe@gmail.com',
      id: 3
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    excluir: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )
      if (indexContato >= 0) {
        state.itens[indexContato] = action.payload
      }
    },
    adicionar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoExiste = state.itens.find(
        (c) => c.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )
      const telefoneExiste = state.itens.find(
        (c) => c.fone === action.payload.fone
      )
      const emailExiste = state.itens.find(
        (c) => c.email === action.payload.email
      )
      if (contatoExiste || telefoneExiste || emailExiste) {
        alert('Contato já cadastrado com esses dados. Tentar novamente')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]
        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id++ : 1
        }
        state.itens.push(contatoNovo)
      }
    }
  }
})

export const { excluir, editar, adicionar } = contatosSlice.actions

export default contatosSlice.reducer
