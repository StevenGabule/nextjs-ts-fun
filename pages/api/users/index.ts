// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next'
import { sampleUserData } from './../../../utils/sample-data';

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (!Array.isArray(sampleUserData)) {
      throw new Error('Cannot find user data')
    }
    res.status(200).json(sampleUserData)
  } catch (error: any) {
    res.status(500).json({ statusCode: 500, message: error.message })
  }
}
