import { remove } from '~/lib/firebase/api/private-collection';

export default eventHandler(async (event) => {
  const { account, resource, id } = event.context.params;
  await remove(account, resource, id);
  sendNoContent(event);
});
