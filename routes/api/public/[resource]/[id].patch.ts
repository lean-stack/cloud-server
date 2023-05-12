import { patch } from '~/lib/firebase/api/public-collection';

export default eventHandler(async (event) => {
  const { resource, id } = event.context.params;
  const patchedData = await readBody(event);
  return await patch(resource, { id, ...patchedData });
});
