import { get } from '~/lib/firebase/api/private-collection';

export default eventHandler(async (event) => {
  const { account, resource, id } = event.context.params;
  return get(account, resource, id);
});
