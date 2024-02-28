import InputForm from "../../components/InputForm";
import type { Metadata, NextPage } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: 'Usuário'
}
const Page: NextPage = () => {
  
  return (
    <>
      <Link href='/'> Home </Link>
      <Link href='/notes'> Notes </Link>
    
      <h1>Gustavo Mendes</h1>
      <h2>Desenvolvedor Full Stack</h2>
      <p>
        Sou estudante de sistemas de informação.
        Amo ajudar pessoas, resolver problemas e principalmente programar.
      </p>
        <InputForm />
    </>
  )
}

export default Page;