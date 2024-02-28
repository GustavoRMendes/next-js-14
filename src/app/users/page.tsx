import InputForm from "../../components/InputForm";
import type { Metadata, NextPage } from "next";
import React from "react";
import Header from "../../components/Header";

export const metadata: Metadata = {
  title: 'Usuário'
}
const Page: NextPage = () => {
  
  return (
    <>
      <Header />
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