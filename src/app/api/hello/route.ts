import { NextResponse } from "next/server"

export async function GET() {
  const users = [
    {
      id:1 , name: 'Gustavo'
    },
    {
      id:2 , name: 'Felipe'
    },
    {
      id:3 , name: 'Camilo'
    },
  ]
  return NextResponse.json(users)
}
