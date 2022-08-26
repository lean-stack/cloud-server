import type { NextApiRequest, NextApiResponse, NextConfig } from 'next';
import { Resource } from '~/model/resource';
import { create, getAll } from '~/module/firebase/api/public-collection';
import { validateRequest } from '~/utils/validate-request';

export const config = { api: { bodyParser: { strict: true } } };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Resource | Resource[]>
) {
  const result = validateRequest(req);
  if (result !== 'SUCCESS') {
    res.status(406).end();
    return;
  }

  const {
    body,
    method,
    query: { resource },
  } = req;

  const resourceName = resource as string;

  // Set CORS methods
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');

  switch (method) {
    case 'OPTIONS':
      res.status(204).end();
      break;
    case 'GET':
      const data = await getAll(resourceName);
      res.status(200).json(data);
      break;
    case 'POST':
      const item = await create(resourceName, body as Resource);
      res.status(201).json(item);
      break;
  }
}
