import React from "react"
interface PropsPage {
  params: {
    id: string
  }
}
export default function UserPage({params}: PropsPage) {
  return (
    <div>
      <h2>Hello Person {params.id}</h2>
    </div>
  )
}
