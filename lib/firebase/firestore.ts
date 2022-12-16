import {
  DocumentData,
  getFirestore,
  QueryDocumentSnapshot,
} from 'firebase-admin/firestore';
import { app } from './app';

export const firestore = getFirestore(app);

// helper function to convert firestore data to typed resource
export const converter = <T>() => ({
  toFirestore: (data: T) => data,
  fromFirestore: (snap: QueryDocumentSnapshot) => snap.data() as T,
});

// helper to apply converter to collections
export const dataPoint = <T extends DocumentData>(collectionPath: string) =>
  firestore.collection(collectionPath).withConverter(converter<T>());
