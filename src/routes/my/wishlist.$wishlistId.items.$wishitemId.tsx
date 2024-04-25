import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/my/wishlist/$wishlistId/items/$wishitemId')({
  component: () => <div>Hello /my/wishlist/$wishlistId/items/$wishitemId!</div>,
});
