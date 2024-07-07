import MyWishItemDetailPage from '@/pages/my/MyWishItemDetailPage';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/my/wishlist/$wishlistId/items/$wishitemId')({
  component: () => <MyWishItemDetailPage />,
});
