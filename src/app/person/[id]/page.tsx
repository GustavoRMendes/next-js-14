export default function UserPage({params}: {params: {id: string}}) {
  return (
    <div>
      <h2>Hello User {params.id}</h2>
    </div>
  )
}
