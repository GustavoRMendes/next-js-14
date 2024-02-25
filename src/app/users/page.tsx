import InputForm from "@/components/InputForm";
import type { NextPage } from "next";
import Link from "next/link";
export const metadata = {
  title: '',
  description: ''
}
const Page: NextPage = () => {
  return (
    <>
      <Link href='/'> Página Inicial </Link>
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