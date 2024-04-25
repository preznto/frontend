import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/my/wishlist/$wishlistId/')({
  component: () => <div>Hello /my/wishlist/$wishlistId!</div>,
});
