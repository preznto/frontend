// Register the router instance for type safety
import { router } from '@/App'
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}