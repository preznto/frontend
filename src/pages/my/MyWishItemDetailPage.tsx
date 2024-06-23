import Badge from '@/components/common/Badge';
import { Body12, Body14, Body16, Body18, Heading24 } from '@/components/common/typography';
import useTopNavigation from '@/hooks/useTopNavigation';
import React, { Fragment, SyntheticEvent } from 'react';
import {
  fudingUserImg,
  fundingAmount,
  fundingRate,
  fundingUserItemWrraper,
  fundingUserList,
  fundingUserListSection,
  linkBtn,
  progress,
  progressBar,
  progressBarWrraper,
  wishItemImageSection,
  wishItemImg,
  wishItemInfoSection,
  wishItemNameWrraper,
  wishItemPriceWrraper,
} from './MyWishItemDetailPage.css';
import Button from '@/components/common/Button';
import defaultItemImg from '@/assets/defaultItemImg.png';
import { assignInlineVars } from '@vanilla-extract/dynamic';

const WishItemImage = () => {
  const handleImageError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = defaultItemImg;
  };

  const handleLinkBtnClick = () => {
    window.open('https://www.naver.com');
  };

  return (
    <section className={wishItemImageSection}>
      <img
        className={wishItemImg}
        src="https://picsum.photos/id/237/1000/1000"
        alt="상품 이미지"
        onError={handleImageError}
      />
      <Button className={linkBtn} type="primary" size="small" onClick={handleLinkBtnClick}>
        링크 열기
      </Button>
    </section>
  );
};

const WishItemInfo = () => {
  return (
    <section className={wishItemInfoSection}>
      <div className={wishItemNameWrraper}>
        <Body18>LEXON MINA 무드등 조명 램프</Body18>
        <Badge color="blue">펀딩중</Badge>
      </div>
      <div>
        <Body12 color="black64">펀딩 달성 금액</Body12>
        <div className={wishItemPriceWrraper}>
          <Heading24 className={fundingAmount}>70,000원</Heading24>
          <Body14 color="black64">/ 12,000원</Body14>
          <Body14 className={fundingRate} fw="bold">
            65% 달성
          </Body14>
        </div>
      </div>
      <div className={progressBarWrraper}>
        <div className={progressBar} style={assignInlineVars({ [progress]: '30%' })} />
      </div>
      <Body16 color="black64">
        기타 설명을 입력하는
        어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구
      </Body16>
    </section>
  );
};

interface FundingUserListProp {
  userList: FundingUser[];
}

// TODO: API 스펙 확인 후 변경
interface FundingUser {
  name: string;
  price: number;
}

const FundingUserList: React.FC<FundingUserListProp> = ({ userList }) => {
  return (
    <section className={fundingUserListSection}>
      <Body18 fw="bold">아래 친구들이 선물해줬어요!</Body18>
      {userList.length > 0 ? (
        <li className={fundingUserList}>
          {userList.map(({ name, price }) => (
            <li className={fundingUserItemWrraper}>
              <img
                className={fudingUserImg}
                src="https://picsum.photos/id/237/1000/1000"
                alt="유저이미지"
              />
              <div>
                <Body16>{name}</Body16>
                <Body14 fw="bold">{price}원</Body14>
              </div>
            </li>
          ))}
        </li>
      ) : (
        <div>empty</div>
      )}
    </section>
  );
};

const MyWishItemDetailPage = () => {
  const dummy = [
    {
      name: '멍뭉 1세',
      price: 30000,
    },
    {
      name: '도베르만 검정이',
      price: 50000,
    },
    {
      name: '도베르만 검정이',
      price: 30000,
    },
  ];
  useTopNavigation({ left: 'back' });
  return (
    <Fragment>
      <main>
        <WishItemImage />
        <WishItemInfo />
        <FundingUserList userList={dummy} />
      </main>
    </Fragment>
  );
};

export default MyWishItemDetailPage;
