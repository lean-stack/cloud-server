export default defineEventHandler((event) => {
  if (event.path.startsWith('/api/') && isPreflightRequest(event)) {
    appendCorsPreflightHeaders(event, { methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE'] });
    sendNoContent(event);
  }
});
