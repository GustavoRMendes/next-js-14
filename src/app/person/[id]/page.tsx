import type { Metadata } from "next"
import React from "react"
interface PropsPage {
  params: {
    id: string
  }
}
export const metadata: Metadata = {
  title: 'Person'
}
export default function UserPage({params}: PropsPage) {
  return (
    <div>
      <h2>Hello Person {params.id}</h2>
    </div>
  )
}
