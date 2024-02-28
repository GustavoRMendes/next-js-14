"use client"

import { useEffect } from "react"

interface ErrorProps {
  error : Error & { digest?: string}
  reset: () => void
}

export default function PageError({error,reset} : ErrorProps) {
  useEffect(() => {
    console.log(error)
  },[error])
  
  return (
    <>
      Um erro ocorreu {error.message}
      <button type="button" onClick={() => reset()}>Tente Novamente!</button>
    </>
  )
}
