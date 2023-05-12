import { create } from '~/lib/firebase/api/private-collection';

export default eventHandler(async (event) => {
  const { account, resource } = event.context.params;
  const body = await readBody(event);
  setResponseStatus(event, 201);
  return await create(account, resource, body);
});
