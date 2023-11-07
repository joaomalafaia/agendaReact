class Contato {
  nome: string
  foto: string
  fone: string
  email: string
  id: number

  constructor(
    nome: string,
    foto: string,
    fone: string,
    email: string,
    id: number
  ) {
    this.nome = nome
    this.foto = foto
    this.fone = fone
    this.email = email
    this.id = id
  }
}

export default Contato
