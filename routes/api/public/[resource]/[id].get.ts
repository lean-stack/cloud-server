import { get } from '~/lib/firebase/api/public-collection';

export default eventHandler(async (event) => {
  const { resource, id } = event.context.params;
  return get(resource, id);
});
