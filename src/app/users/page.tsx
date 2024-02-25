import type { NextPage } from "next";
import Link from "next/link";
export const metadata = {
  title: '',
  description:''
}
const Page : NextPage = () => {
  return (
    <>
      <Link href='/'> Página Inicial </Link>
      <h1>Gustavo Mendes</h1>
      <p>Sou estudante de sistemas de informação. Amo ajudar pessoas, resolver problemas e principalmente programar.
        Comecei meio tarde a estudar programação, porém minha paixão já é enorme.
      </p>

    </>
  )
}

export default Page;