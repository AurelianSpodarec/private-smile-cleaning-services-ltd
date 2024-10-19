import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { accept } = req.body;

    if (accept) {
      res.setHeader('Set-Cookie', `accept=true; Path=/; Max-Age=31536000; HttpOnly; SameSite=Strict${process.env.NODE_ENV === 'production' ? '; Secure' : ''}`);
      return res.status(200).json({ success: true });
    }
  }
  return res.status(400).json({ success: false });
}
