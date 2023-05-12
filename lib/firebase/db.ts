import {
  DocumentData,
  FirestoreDataConverter,
  getFirestore,
  PartialWithFieldValue,
} from 'firebase-admin/firestore';
import { app } from './app';

export const db = getFirestore(app);

// base model type
export type Resource = Record<string, unknown> & {
  id: string;
};

// helper function to convert firestore data to typed resource
export const converter = <T extends Resource>(): FirestoreDataConverter<T> => ({
  toFirestore: (modelObject: PartialWithFieldValue<T>): DocumentData => {
    const { id, ...doc } = modelObject;
    return doc;
  },
  fromFirestore: (snapshot) =>
    ({
      id: snapshot.id,
      ...snapshot.data(),
    } as T),
});

// helper to apply converter to collections
export const dataPoint = <T extends Resource>(collectionPath: string) =>
  db.collection(collectionPath).withConverter(converter<T>());
