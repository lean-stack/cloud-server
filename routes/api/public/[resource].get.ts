import { getAll } from '~/lib/firebase/api/public-collection';

export default eventHandler(async (event) => {
  const { resource } = event.context.params;
  return getAll(resource);
});
