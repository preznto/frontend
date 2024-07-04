import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/my/_layout/')({
  component: () => <div>My Page</div>,
});
