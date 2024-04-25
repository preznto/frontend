import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/my/wishlist/$wishlistId/items')({
  component: () => <div>Hello /my/wishlist/!</div>,
});
