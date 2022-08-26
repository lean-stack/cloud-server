import type { NextApiRequest, NextApiResponse } from 'next';
import { Resource } from '~/model/resource';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Resource | Resource[]>
) {
  const { method } = req;

  // Set CORS methods
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');

  switch (method) {
    case 'OPTIONS':
      res.status(204).end();
      break;
    case 'GET':
      res.status(200).json([{ id: '1', title: 'Works' }]);
      break;
    case 'POST':
      const body = req.body;
      res.status(201).json({ id: '1', title: 'Works' });
      break;
  }
}
