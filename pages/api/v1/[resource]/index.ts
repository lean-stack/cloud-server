// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import Cors from "cors";
import { Resource } from "../../../../lib/firebase/model/resource";
import { create, getAll } from "../../../../lib/firebase/api/public-collection";

// Initializing the cors middleware
// You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
const cors = Cors({
  methods: ["GET", "POST"],
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
    query: { resource },
  } = req;

  switch (method) {
    case "GET":
      const data = await getAll(resource as string);
      res.status(200).json(data);
      break;
    case "POST":
      const createdItem = await create(resource as string, body as Resource);
      res.status(201).json(createdItem);
      break;

    default:
      res.status(204).end();
      break;
  }
}
