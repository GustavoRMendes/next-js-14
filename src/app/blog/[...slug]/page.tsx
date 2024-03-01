import React from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
interface BlogParam {
  params: {
    slug: string[]
  }
}
export default function BlogParams({params}:BlogParam) {
  return (
    <>
       <Header/>
    <div>
       {params.slug.join('/')}
    </div>
    </>
  )
}
