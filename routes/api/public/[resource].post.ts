import { create } from '~/lib/firebase/api/public-collection';

export default eventHandler(async (event) => {
  const { resource } = event.context.params;
  const body = await readBody(event);
  setResponseStatus(event, 201);
  return await create(resource, body);
});
