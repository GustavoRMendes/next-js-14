import React from 'react'
interface BlogParam {
  params: {
    slug: string[]
  }
}
export default function BlogParams({params}:BlogParam) {
  return (
    <div>
       {params.slug.join('/')}
    </div>
  )
}
