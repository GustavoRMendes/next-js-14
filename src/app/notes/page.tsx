import React from 'react'
import Link from 'next/link'
export const metadata = {
  title: 'Notes',
};
export default function PageNotes () {

  return (
    <>
      <nav style={{ display: 'flex', gap: '2rem' }}>
        <Link href='/users'>User</Link>
        <Link href='/'>Home</Link>
      </nav>
      <h2>Notes</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam magnam temporibus tempora quis cum aliquam impedit, aspernatur esse corporis, asperiores optio cumque error quaerat ad, quasi voluptatum molestiae iure in?
      </p>
    </>
  )
}
