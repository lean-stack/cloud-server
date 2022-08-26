import { NextApiRequest } from 'next';

export type ValidationResult = 'SUCCESS' | 'ERROR_CONTENT_TYPE' | 'ERROR_BODY';

export function validateRequest(req: NextApiRequest): ValidationResult {
  const { headers, body, method } = req;
  console.log(headers, method, body);
  if (['GET', 'DELETE', 'OPTIONS'].includes(method || '')) {
    return 'SUCCESS';
  }

  if (headers['content-type']?.indexOf('application/json') === -1) {
    return 'ERROR_CONTENT_TYPE';
  }

  if (typeof body !== 'object' || Array.isArray(body)) {
    return 'ERROR_BODY';
  }

  for (const prop in body) {
    const propType = typeof body[prop];
    if (propType === 'object' && body[prop] !== null) {
      return 'ERROR_BODY';
    }
  }

  return 'SUCCESS';
}
