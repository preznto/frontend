import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/my/wishlist/$wishlistId/')({
  component: () => <Page />,
});

const Page = () => {
  return <div>Hello /my/wishlist/$wishlistId!</div>;
};
