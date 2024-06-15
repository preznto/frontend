import { IconBank } from '@/components/common/icons';

type AccountItem = {
  key: string;
  label: string;
  icon: JSX.Element;
};

export const ACCOUNT_MAP = [
  {
    key: 'kb',
    label: '국민',
    icon: <IconBank.국민 />,
  },
  {
    key: 'nh',
    label: '농협',
    icon: <IconBank.농협 />,
  },
  {
    key: 'shinhan',
    label: '신한',
    icon: <IconBank.신한 />,
  },
  {
    key: 'woori',
    label: '우리',
    icon: <IconBank.우리 />,
  },
  {
    key: 'hana',
    label: '하나',
    icon: <IconBank.하나 />,
  },
  {
    key: 'ibk',
    label: '기업',
    icon: <IconBank.기업 />,
  },
  {
    label: '산업',
    key: 'sib',
    icon: <IconBank.산업 />,
  },
  {
    label: '새마을금고',
    key: 'saemaeul',
    icon: <IconBank.새마을금고 />,
  },
  {
    label: '제일',
    key: 'first',
    icon: <IconBank.제일 />,
  },
  {
    label: '수협',
    key: 'suhyup',
    icon: <IconBank.수협 />,
  },
  {
    label: '신협',
    key: 'shinhyup',
    icon: <IconBank.신협 />,
  },
  {
    label: '씨티뱅크',
    key: 'citibank',
    icon: <IconBank.씨티 />,
  },
  {
    label: '케이뱅크',
    key: 'keibank',
    icon: <IconBank.케이 />,
  },
  {
    label: '카카오뱅크',
    key: 'kakaobank',
    icon: <IconBank.카카오 />,
  },
  {
    label: '토스',
    key: 'toss',
    icon: <IconBank.토스 />,
  },
  {
    label: '광주',
    key: 'gwangju',
    icon: <IconBank.광주 />,
  },
  {
    label: '대구',
    key: 'daegu',
    icon: <IconBank.대구 />,
  },
  {
    label: '부산',
    key: 'busan',
    icon: <IconBank.부산 />,
  },
] as const satisfies AccountItem[];

export type BankKey = (typeof ACCOUNT_MAP)[number]['key'];
