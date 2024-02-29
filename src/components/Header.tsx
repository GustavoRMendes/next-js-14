import Link from 'next/link'
import React from 'react'

export default function Header () {
  return (
    <>
      <nav style={{ display: 'flex', gap: '2rem',fontSize:'25px',padding: '2rem' }}>
        <Link href='/users' prefetch={true} scroll={true}>User</Link>
        <Link href='/' prefetch={true} scroll={true}>Home</Link>
        <Link href='/notes' prefetch={true} scroll={true}> Notes </Link>
      </nav>
    </>
  )
}
