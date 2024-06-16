import CreateWishListPage from '@/pages/my/CreateWishListPage';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/my/wishlist/create')({
  component: () => <CreateWishListPage />,
});
