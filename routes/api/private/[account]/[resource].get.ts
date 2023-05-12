import { getAll } from '~/lib/firebase/api/private-collection';

export default eventHandler(async (event) => {
  const { account, resource } = event.context.params;
  return getAll(account, resource);
});
