import type { NextApiRequest, NextApiResponse } from 'next';
import { Resource } from '~/model/resource';
import { update } from '~/module/firebase/api/collection';
import { create, getAll } from '~/module/firebase/api/public-collection';
import { validateRequest } from '~/utils/validate-request';

export const config = { api: { bodyParser: { strict: true } } };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Resource | Resource[]>
) {
  const allowedMethods = ['OPTIONS', 'GET', 'POST'];

  const result = validateRequest(req, allowedMethods);
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
  res.setHeader('Access-Control-Allow-Methods', allowedMethods.join(', '));
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  switch (method) {
    case 'OPTIONS':
      res.status(204).end();
      break;
    case 'GET':
      const data = await getAll(resourceName);
      res.status(200).json(data);
      break;
    case 'POST':
      const createdItem = await create(resourceName, body as Resource);
      res.status(201).json(createdItem);
      break;
    case 'PUT':
      const updatedItem = await update(resourceName, body as Resource);
      res.status(200).json(updatedItem);
      break;
  }
}
