import useTopNavigation from '@/hooks/useTopNavigation';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/my/wishlist/create')({
  component: () => <Page />,
});

const Page = () => {
  useTopNavigation({ left: 'back' });
  return <div>Hello /my/wishlist/create!</div>;
};
