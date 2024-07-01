import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/my/_layout/message')({
  component: () => <div>Message 탭</div>,
});
