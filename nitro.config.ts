import { defineNitroConfig } from 'nitropack/config';

export default defineNitroConfig({
  routeRules: {
    '/api/**': {
      cors: true,
      headers: { 'access-control-allow-methods': 'GET,POST,PATCH,PUT,DELETE' },
    },
  },
});
