import ProgressBar from '../common/ProgressBar';
import { Body12 } from '../common/typography';
import FundingStatusBadge from './FundingStatusBadge';
import * as styles from './WishItem.css';

// TODO: api 명세에 맞게 WishItem type 정의
export type FundingStatus = 'active' | 'inactive' | 'completed';
export type WishItemType = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  funded: number;
  status: FundingStatus;
};

interface WishItemProps {
  item: WishItemType;
  onClick?: () => void;
}

const WishItem = ({ item, onClick }: WishItemProps) => {
  return (
    <div
      className={styles.container}
      data-inactive={item.status === 'inactive'}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
      onClick={onClick}
    >
      <img className={styles.image} src={item.imageUrl} alt={item.name} width={88} height={88} />
      <div className={styles.contentsWrapper}>
        <div className={styles.spaceBetween}>
          <Body12 maxLines={2} className={styles.name}>
            {item.name}
          </Body12>
          <FundingStatusBadge status={item.status} />
        </div>
        <div className={styles.progressBarWrapper}>
          <div className={styles.spaceBetween}>
            <Body12 fw="bold">{item.funded.toLocaleString()}원</Body12>
            <Body12>{Math.round((item.funded / item.price) * 100)}% 달성</Body12>
          </div>
          <ProgressBar total={item.price} value={item.funded} />
        </div>
      </div>
    </div>
  );
};

export default WishItem;
