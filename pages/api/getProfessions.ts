// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"
import prisma from "../../prisma/client"
type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    //Get prisma to fetch the professions
    const data = await prisma.professions.findMany()
    return res.status(200).json(data)
  } catch (error) {
    return res.status(500).json(error)
  }
}
