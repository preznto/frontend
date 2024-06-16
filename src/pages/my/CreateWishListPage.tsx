import { Heading24 } from '@/components/common/typography';
import { BANK_OPTIONS } from '@/constants/bank';
import useTopNavigation from '@/hooks/useTopNavigation';
import { Form, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import * as styles from './CreateWishListPage.css';
import { useCallback } from 'react';

// TODO: regex 별도 파일로 분리?
const accountNumberRegex = /^[0-9][0-9-]*[0-9]$/;

// TODO: api 명세랑 네이밍 맞추기
const bankValues = BANK_OPTIONS.map((bank) => bank.value) as string[];
const schema = z.object({
  bank: z.enum(['', ...bankValues]).and(z.string().min(1)),
  accountNumber: z.string().regex(accountNumberRegex).min(1),
  name: z.string().min(1),
  dueDate: z.date().min(new Date()),
});
type FormValues = z.infer<typeof schema>;
const CreateWishListPage: React.FC = () => {
  useTopNavigation({ left: 'back' });
  const methods = useForm<FormValues>({ resolver: zodResolver(schema) });
  const { register, handleSubmit } = methods;

  const onSubmit = useCallback((data: FormValues) => {
    console.log(data); // TODO: api 호출
  }, []);
  return (
    <div className={styles.page}>
      <Heading24 className={styles.title}>위시리스트 생성하기</Heading24>
      <Form className={styles.form} {...methods}>
        <div className={styles.accountField}>
          <select {...register('bank')}>
            {BANK_OPTIONS.map((bank) => (
              <option key={bank.value} value={bank.value}>
                {bank.label}
              </option>
            ))}
          </select>
          <input {...register('accountNumber')} placeholder="계좌번호를 입력해주세요" />
        </div>
        <input {...register('name')} placeholder="실명을 입력해주세요" />
        <input
          {...register('dueDate', { valueAsDate: true })}
          type="date"
          placeholder="날짜를 선택해주세요"
        />
      </Form>
      <button className={styles.button} onClick={handleSubmit(onSubmit, console.error)}>
        생성하기
      </button>
    </div>
  );
};
export default CreateWishListPage;
