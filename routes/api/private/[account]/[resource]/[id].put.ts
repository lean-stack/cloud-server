import { update } from '~/lib/firebase/api/private-collection';

export default eventHandler(async (event) => {
  const { account, resource, id } = event.context.params;
  const patchedData = await readBody(event);
  return await update(account, resource, { id, ...patchedData });
});
