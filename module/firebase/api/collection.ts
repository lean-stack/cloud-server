import { Resource } from '~/model/resource';
import { dataPoint } from '../firestore';

export async function getAll(collectionPath: string) {
  const snapshot = await dataPoint<Resource>(collectionPath).get();
  return snapshot.docs.map((d) => d.data());
}

export async function create(collectionPath: string, data: Resource) {
  const itemRef = dataPoint<Resource>(collectionPath).doc();
  const item = { ...data, id: itemRef.id };
  await itemRef.set(item);
  return item;
}

export async function update(collectionPath: string, data: Resource) {
  const itemRef = dataPoint<Resource>(collectionPath).doc(data.id);
  const item = { ...data, id: itemRef.id };
  await itemRef.set(item);
  return item;
}
