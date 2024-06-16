import { Color } from '@/theme/globalTheme.css';
import { FundingStatus } from './WishItem';
import Badge from '../common/Badge';

// TODO: api spec에 맞게 FundingStatus type 정의
const STATUS_DICT: Record<FundingStatus, string> = {
  active: '펀딩중',
  inactive: '펀딩중단',
  completed: '펀딩완료',
};

const STATUS_COLOR_DICT: Record<
  FundingStatus,
  {
    bg: Color;
    text: Color;
  }
> = {
  active: { bg: 'secondary100', text: 'white100' },
  inactive: { bg: 'black20', text: 'black100' },
  completed: { bg: 'black100', text: 'white100' },
};

interface FundingStatusBadgeProps {
  status: FundingStatus;
}
const FundingStatusBadge: React.FC<FundingStatusBadgeProps> = ({ status }) => {
  return (
    <Badge bgColor={STATUS_COLOR_DICT[status].bg} textColor={STATUS_COLOR_DICT[status].text}>
      {STATUS_DICT[status]}
    </Badge>
  );
};

export default FundingStatusBadge;
