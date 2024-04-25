// Register the router instance for type safety
import { router } from '@tanstack/react-router';
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}
