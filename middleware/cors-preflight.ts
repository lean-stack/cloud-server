export default defineEventHandler((event) => {
  if (event.path.startsWith('/api/') && isPreflightRequest(event)) {
    sendNoContent(event);
  }
});
