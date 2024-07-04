import MyLayout from '@/pages/my/MyLayout';
import { Outlet, createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/my/_layout')({
  component: () => (
    <MyLayout>
      <Outlet />
    </MyLayout>
  ),
});
