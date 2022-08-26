import { initializeApp, cert, getApps, getApp } from 'firebase-admin/app';

const serviceAccount = JSON.parse(process.env.FB_SERVICE_ACCOUNT!);

const appOptions = {
  credential: cert(serviceAccount),
};

export const app = !getApps().length ? initializeApp(appOptions) : getApp();
