import { Resource } from '../db';
import * as baseCollection from './collection';

const collectionPath = (resourceName: string) => `/public/resources/${resourceName}`;

export async function getAll(resourceName: string) {
  return baseCollection.getAll(collectionPath(resourceName));
}

export async function get(resourceName: string, id: string) {
  return baseCollection.get(collectionPath(resourceName), id);
}

export async function create(resourceName: string, data: Resource) {
  return baseCollection.create(collectionPath(resourceName), data);
}

export async function update(resourceName: string, data: Resource) {
  return baseCollection.update(collectionPath(resourceName), data);
}

export async function patch(resourceName: string, data: Resource) {
  return baseCollection.patch(collectionPath(resourceName), data);
}

export async function remove(resourceName: string, id: string) {
  return baseCollection.remove(collectionPath(resourceName), id);
}
