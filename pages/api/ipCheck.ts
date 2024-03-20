import unwantedIps from '@/helpers/unwantedIps';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')

  const ip =
    req.headers['x-forwarded-for'] ||
    // req.socket.remoteAddress ||
    req.connection.remoteAddress

  try {
    if (unwantedIps.includes(ip)) {
      return res.status(403).json({ status: 403, msg: 'Access denied' });
    } else {
      return res.status(200).json({ status: 200, msg: 'Access permited' });
    }
    
  } catch (err) {
    res.status(500).json({ success: false });
  }
}