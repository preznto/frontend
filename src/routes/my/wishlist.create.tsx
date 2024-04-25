import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/my/wishlist/create')({
  component: () => <div>Hello /my/wishlist/create!</div>,
});
