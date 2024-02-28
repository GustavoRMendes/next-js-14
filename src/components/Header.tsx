import Link from 'next/link'
import React from 'react'

export default function Header () {
  return (
    <>
      <nav style={{ display: 'flex', gap: '2rem' }}>
        <Link href='/users'>User</Link>
        <Link href='/'>Home</Link>
        <Link href='/notes'> Notes </Link>
      </nav>
    </>
  )
}
