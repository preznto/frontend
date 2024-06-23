import Button from '@/components/common/Button';
import Empty from '@/components/common/Empty';
import { WishItemType } from '@/components/wishlist/WishItem';
import WishListTab from '@/components/wishlist/WishListTab';
import { useNavigate } from '@tanstack/react-router';
import { container as tabContainerStyle } from '@/components/wishlist/WishListTab.css';

const MyWishListPage: React.FC = () => {
  const navigate = useNavigate();
  // TODO: 위시리스트 API 연동
  const mockWishItems: WishItemType[] = [
    {
      id: 1,
      name: '아이폰 13',
      imageUrl: 'https://via.placeholder.com/150',
      price: 30000,
      funded: 10000,
      status: 'active',
    },
    {
      id: 2,
      name: '맥북 프로',
      imageUrl: 'https://via.placeholder.com/150',
      price: 2000000,
      funded: 1000000,
      status: 'inactive',
    },
  ];
  return mockWishItems ? (
    <WishListTab my wishItems={mockWishItems} />
  ) : (
    <div className={tabContainerStyle}>
      <Empty text="위시리스트 생성하기 버튼을 눌러\n계좌번호 입력하고 위시템을 담아보세요.">
        <Button
          type="primary"
          size="medium"
          onClick={() => navigate({ to: '/my/wishlist/create' })}
        >
          위시리스트 생성하기
        </Button>
      </Empty>
    </div>
  );
};

export default MyWishListPage;
