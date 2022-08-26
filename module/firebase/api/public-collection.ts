import { Resource } from '~/model/resource';
import * as baseCollection from './collection';

const collectionPath = (resourceName: string) => `/public/${resourceName}/data`;

export async function getAll(resourceName: string) {
  return baseCollection.getAll(collectionPath(resourceName));
}

export async function create(resourceName: string, data: Resource) {
  return baseCollection.create(collectionPath(resourceName), data);
}
