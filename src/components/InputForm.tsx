"use client"
import React from "react"
import { usePathname } from "next/navigation";
import { useState } from "react"
import { useRouter } from "next/navigation";
export default function InputForm() {
  const [inputValue,setInputValue] = useState("")
  const pathname = usePathname()
  const router = useRouter()
  return (
    <>
      <p>
        Caminho Atual: {pathname}
      </p>
      <form>
        <label>E-mail: </label>
        <input type="email" value={inputValue} onChange={(ev) => setInputValue(ev.target.value)} />
        <button type="submit">Inscrever-se</button>
      </form>
      <br/>
      <nav>
        <button onClick={() => router.push('/')} type="button">
          Voltar para o Início
        </button>
      </nav>
    </>

  )
}
