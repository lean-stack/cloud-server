import type { NextApiRequest, NextApiResponse } from 'next';
import { Resource } from '../../../../model/resource';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Resource[]>
) {
  res.status(200).json([{ id: '1', title: 'Works' }]);
}
