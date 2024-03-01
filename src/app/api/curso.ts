interface Curso {
  id: number,
  nome: string,
  slug: number,
  descricao: string,
}

interface Aula {
  id: number,
  nome: string,
  tempo: number,
  curso_id: number,
  descricao: string,
}

