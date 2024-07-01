import MyWishListPage from '@/pages/my/MyWishListPage';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/my/_layout/wishlist/$wishlistId/')({
  component: () => <MyWishListPage />,
});
