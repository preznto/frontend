import { IconBank } from '@/components/common/icons';

type BankOption = {
  value: string;
  label: string;
  icon: JSX.Element;
};

export const BANK_OPTIONS = [
  {
    value: 'kb',
    label: '국민',
    icon: <IconBank.국민 />,
  },
  {
    value: 'nh',
    label: '농협',
    icon: <IconBank.농협 />,
  },
  {
    value: 'shinhan',
    label: '신한',
    icon: <IconBank.신한 />,
  },
  {
    value: 'woori',
    label: '우리',
    icon: <IconBank.우리 />,
  },
  {
    value: 'hana',
    label: '하나',
    icon: <IconBank.하나 />,
  },
  {
    value: 'ibk',
    label: '기업',
    icon: <IconBank.기업 />,
  },
  {
    label: '산업',
    value: 'sib',
    icon: <IconBank.산업 />,
  },
  {
    label: '새마을금고',
    value: 'saemaeul',
    icon: <IconBank.새마을금고 />,
  },
  {
    label: '제일',
    value: 'first',
    icon: <IconBank.제일 />,
  },
  {
    label: '수협',
    value: 'suhyup',
    icon: <IconBank.수협 />,
  },
  {
    label: '신협',
    value: 'shinhyup',
    icon: <IconBank.신협 />,
  },
  {
    label: '씨티뱅크',
    value: 'citibank',
    icon: <IconBank.씨티 />,
  },
  {
    label: '케이뱅크',
    value: 'keibank',
    icon: <IconBank.케이 />,
  },
  {
    label: '카카오뱅크',
    value: 'kakaobank',
    icon: <IconBank.카카오 />,
  },
  {
    label: '토스',
    value: 'toss',
    icon: <IconBank.토스 />,
  },
  {
    label: '광주',
    value: 'gwangju',
    icon: <IconBank.광주 />,
  },
  {
    label: '대구',
    value: 'daegu',
    icon: <IconBank.대구 />,
  },
  {
    label: '부산',
    value: 'busan',
    icon: <IconBank.부산 />,
  },
] as const satisfies BankOption[];

export type BankValue = (typeof BANK_OPTIONS)[number]['value'];
