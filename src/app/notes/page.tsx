import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
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
      <Image
        src='data:image/jpeg;base64,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' 
        alt='Foto' 
        width={200} 
        height={200}
        
      >
      </Image>
    </>
  )
}
