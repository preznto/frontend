import { Body14 } from '@/components/common/typography';
import WishItem, { WishItemType } from '@/components/wishlist/WishItem';
import * as styles from './WishListTab.css';
import Empty from '@/components/common/Empty';

interface WishListTabProps {
  my?: boolean;
}

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
const WishListTab: React.FC<WishListTabProps> = ({ my }) => {
  return (
    <div className={styles.container}>
      <div className={styles.numOfItems}>
        <span style={{ display: 'flex' }}>
          <Body14>총&nbsp;</Body14>
          <Body14 fw="bold" color="secondary100">
            {mockWishItems.length}
          </Body14>
          <Body14>개의 위시템</Body14>
        </span>
        {my && <button>상품추가</button>}
      </div>

      <ol className={styles.list}>
        {mockWishItems.length === 0 && (
          <Empty text="위시템이 아직 없어요.\n상품추가를 통해 위시리스트를 채워보세요." />
        )}
        {mockWishItems.length > 0 &&
          mockWishItems.map((item) => (
            <li key={item.id}>
              <WishItem item={item} />
            </li>
          ))}
      </ol>
    </div>
  );
};

export default WishListTab;
