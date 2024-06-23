import { Body14 } from '@/components/common/typography';
import WishItem, { WishItemType } from '@/components/wishlist/WishItem';
import * as styles from './WishListTab.css';
import Empty from '@/components/common/Empty';
import TextButton from '../common/TextButton';

interface WishListTabProps {
  my?: boolean;
  wishItems: WishItemType[];
}

/**
 * @description 위시리스트 탭. 방문자와 어드민이 모두 사용하는 컴포넌트
 * @param {boolean} my - 내 위시리스트인지 여부
 *
 */
const WishListTab: React.FC<WishListTabProps> = ({ my, wishItems }) => {
  return (
    <div className={styles.container}>
      <div className={styles.numOfItems}>
        <span style={{ display: 'flex' }}>
          <Body14>총&nbsp;</Body14>
          <Body14 fw="bold" color="secondary100">
            {wishItems.length}
          </Body14>
          <Body14>개의 위시템</Body14>
        </span>
        {my && <TextButton iconName="plus">상품추가</TextButton>}
      </div>

      <ol className={styles.list}>
        {wishItems.length === 0 && (
          <Empty text="위시템이 아직 없어요.\n상품추가를 통해 위시리스트를 채워보세요." />
        )}
        {wishItems.length > 0 &&
          wishItems.map((item) => (
            <li key={item.id}>
              <WishItem item={item} />
            </li>
          ))}
      </ol>
    </div>
  );
};

export default WishListTab;
