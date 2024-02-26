interface PropsUser  {
  params: {id: string}
  searchParams: {lang: string}
}
export default function UsersDetails({params,searchParams} : PropsUser) {
  return (
    <>
      Hello user {params.id} (IDIOMA: {searchParams.lang})
    </>
  )
}
