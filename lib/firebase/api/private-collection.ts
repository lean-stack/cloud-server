import { Resource } from '../db';
import * as baseCollection from './collection';

const collectionPath = (account: string, resourceName: string) =>
  `/private/${account}/${resourceName}`;

export async function getAll(account: string, resourceName: string) {
  return baseCollection.getAll(collectionPath(account, resourceName));
}

export async function get(account: string, resourceName: string, id: string) {
  return baseCollection.get(collectionPath(account, resourceName), id);
}

export async function create(account: string, resourceName: string, data: Resource) {
  return baseCollection.create(collectionPath(account, resourceName), data);
}

export async function update(account: string, resourceName: string, data: Resource) {
  return baseCollection.update(collectionPath(account, resourceName), data);
}

export async function patch(account: string, resourceName: string, data: Resource) {
  return baseCollection.patch(collectionPath(account, resourceName), data);
}

export async function remove(account: string, resourceName: string, id: string) {
  return baseCollection.remove(collectionPath(account, resourceName), id);
}
