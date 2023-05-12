import { patch } from '~/lib/firebase/api/private-collection';

export default eventHandler(async (event) => {
  const { account, resource, id } = event.context.params;
  const patchedData = await readBody(event);
  return await patch(account, resource, { id, ...patchedData });
});
