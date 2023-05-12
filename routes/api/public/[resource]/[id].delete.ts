import { remove } from '~/lib/firebase/api/public-collection';

export default eventHandler(async (event) => {
  const { resource, id } = event.context.params;
  await remove(resource, id);
  sendNoContent(event);
});
