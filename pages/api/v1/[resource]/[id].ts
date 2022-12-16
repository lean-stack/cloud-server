// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import Cors from "cors";
import { Resource } from "../../../../lib/firebase/model/resource";
import {
  create,
  get,
  getAll,
  patch,
  remove,
  update,
} from "../../../../lib/firebase/api/public-collection";

// Initializing the cors middleware
// You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
const cors = Cors({
  methods: ["GET", "PUT", "PATCH", "DELETE"],
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

type Data = Resource | Resource[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await runMiddleware(req, res, cors);

  const {
    body,
    method,
    query: { resource, id },
  } = req;

  switch (method) {
    case "GET":
      const data = await get(resource as string, id as string);
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).end();
      }
      break;

    case "PUT":
      const updatedItem = await update(resource as string, body as Resource);
      res.status(201).json(updatedItem);
      break;

    case "PATCH":
      const doc = body as Resource;
      doc.id = id as string; // ensure id
      const patchedItem = await patch(resource as string, doc);
      res.status(201).json(patchedItem);
      break;

    case "DELETE":
      await remove(resource as string, id as string);
      res.status(204).end();
      break;

    default:
      res.status(204).end();
      break;
  }
}
