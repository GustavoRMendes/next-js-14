import React from 'react'
import { cursorTo } from 'readline'
interface CursoAulaProps {
  params: {
    curso: string
    aula: string
  }
}
export default function AulaPage({params}: CursoAulaProps) {
  return (
    <div>
      Aula {params.aula} do Curso {params.curso}
    </div>
  )
}
