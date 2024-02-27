import React, { Suspense } from 'react'
export default function PagePerson() {
  return (
    <>
    <Suspense fallback={<p>Loading...</p>}>
      <div>
        Pastas organizadas
      </div>
    </Suspense>
    </>
    
  )
}
