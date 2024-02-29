import React from 'react'
interface CursoProps {
  params: {
    curso: string
  }
}
export default function CursoPage({params}: CursoProps) {
  return (
    <div>
      Curso {params.curso}
    </div>
  )
}
