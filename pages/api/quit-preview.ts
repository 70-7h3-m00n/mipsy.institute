import type { NextApiRequest, NextApiResponse } from 'next'
import { routes } from '@/config/index'

const quitPreview = async (req: NextApiRequest, res: NextApiResponse) => {
  res.clearPreviewData()
  res.redirect(routes.front.root)
}

export default quitPreview
