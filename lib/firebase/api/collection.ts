import { Resource, dataPoint } from '../db';

export async function getAll(collectionPath: string) {
  const snapshot = await dataPoint<Resource>(collectionPath).get();
  return snapshot.docs.map((d) => d.data());
}

export async function get(collectionPath: string, id: string) {
  const itemRef = dataPoint<Resource>(collectionPath).doc(id);
  const doc = await itemRef.get();
  return doc.data();
}

export async function create(collectionPath: string, data: Resource) {
  const itemRef = dataPoint<Resource>(collectionPath).doc();
  const item = { ...data, id: itemRef.id } as Resource;
  await itemRef.create(item);
  return item;
}

export async function update(collectionPath: string, data: Resource) {
  const itemRef = dataPoint<Resource>(collectionPath).doc(data.id);
  await itemRef.set(data);
  return data;
}

export async function patch(collectionPath: string, data: Resource) {
  const itemRef = dataPoint<Resource>(collectionPath).doc(data.id);
  await itemRef.update(data);
  const doc = await itemRef.get();
  return doc.data();
}

export async function remove(collectionPath: string, id: string) {
  const itemRef = dataPoint<Resource>(collectionPath).doc(id);
  await itemRef.delete();
}
