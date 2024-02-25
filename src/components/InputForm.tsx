"use client"
import { useState } from "react"
export default function InputForm() {
  const [inputValue,setInputValue] = useState("")
  return (
    <>
      <form>
        <label>E-mail:</label>
        <input type="email" value={inputValue} onChange={(ev) => setInputValue(ev.target.value)} />
        <button type="submit">Inscrever-se</button>
        <div>
          {inputValue}
        </div>
      </form>
    </>

  )
}
