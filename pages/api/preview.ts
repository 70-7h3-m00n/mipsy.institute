import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
import { routes } from '@/config/index'

// https://<your-site>/api/preview?secret=<token>&slug=<path>
const preview = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.query.secret !== process.env.PREVIEW_SECRET) {
    return res.status(401).json({ message: 'Invalid token' })
  }

  res.setPreviewData({})
  res.redirect(routes.front.root)
}

export default preview
