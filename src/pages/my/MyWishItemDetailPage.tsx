import { Body12, Body14, Body16, Body18, Heading24 } from '@/components/common/typography';
import useTopNavigation from '@/hooks/useTopNavigation';
import React, { Fragment, SyntheticEvent, useState } from 'react';
import {
  emptyIcon,
  fudingUserImg,
  fundingAmount,
  fundingRate,
  fundingUserItemWrraper,
  fundingUserList,
  fundingUserListSection,
  linkBtn,
  modifyModeFooter,
  wishItemDescription,
  wishItemImageSection,
  wishItemImg,
  wishItemInfoSection,
  wishItemNameWrraper,
  wishItemPriceWrraper,
} from './MyWishItemDetailPage.css';
import Button from '@/components/common/Button';
import defaultItemImg from '@/assets/defaultItemImg.png';
import FundingStatusBadge from '@/components/wishlist/FundingStatusBadge';
import Empty from '@/components/common/Empty';
import ProgressBar from '@/components/common/ProgressBar';
import Switch from '@/components/common/Switch';
import Popup from '@/components/common/Popup';

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
        <FundingStatusBadge status="active" />
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
      <ProgressBar total={120000} value={70000} />
      <Body16 className={wishItemDescription} color="black64">
        기타 설명을 입력하는
        어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구어쩌구저쩌구
      </Body16>
    </section>
  );
};

const WishItemInfoModifyForm = () => {
  const handleSwitchChange = (checked: boolean) => {
    console.warn(checked);
  };

  return (
    <section className={wishItemInfoSection}>
      <div className={wishItemNameWrraper}>
        <Body16 fw="bold">펀딩 진행하기</Body16>
        <Switch onChange={handleSwitchChange} />
      </div>
      <div>
        <div>TextField</div>
        <div>TextField</div>
        <div>TextField</div>
      </div>
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
        <ul className={fundingUserList}>
          {userList.map(({ name, price }, index) => (
            <li key={`${name}_${index}`} className={fundingUserItemWrraper}>
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
        </ul>
      ) : (
        <div className={emptyIcon}>
          <Empty text="위시템이 아직 없어요." />
        </div>
      )}
    </section>
  );
};

type ModifyModeFooterProps = {
  availableDelete: boolean;
  onClickModfiyButton: () => void;
  onClickDeleteButton: () => void;
};

const ModifyModeFooter: React.FC<ModifyModeFooterProps> = ({
  availableDelete,
  onClickModfiyButton,
  onClickDeleteButton,
}) => {
  return (
    <section className={modifyModeFooter}>
      {availableDelete && (
        <Button onClick={onClickDeleteButton} type="gray" size="large">
          삭제하기
        </Button>
      )}
      <Button
        onClick={onClickModfiyButton}
        type={availableDelete ? 'gray' : 'primary'}
        size="large"
      >
        수정하기
      </Button>
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

  const [modifyMode, setModifyMode] = useState(true);
  const [isShowPopup, setIsShowPopup] = useState(false);

  const deleteWishItem = () => {
    console.warn('위시아이템 삭제');
    handlePopup(false);
  };

  const handlePopup = (isShow: boolean) => {
    setIsShowPopup(isShow);
  };

  const modifyWishItem = () => {
    console.warn('위시아이템 수정');
  };

  return (
    <Fragment>
      <main>
        <WishItemImage />
        {modifyMode ? <WishItemInfoModifyForm /> : <WishItemInfo />}
        <FundingUserList userList={dummy} />
        <ModifyModeFooter
          onClickModfiyButton={modifyWishItem}
          onClickDeleteButton={() => handlePopup(true)}
          availableDelete={true}
        />
        {isShowPopup && (
          <Popup
            title="정말 삭제하시겠어요?"
            onClickMainButton={deleteWishItem}
            onClickCancelButton={() => handlePopup(false)}
            mainButtonText="삭제"
            cancelButtonText="취소"
          />
        )}
      </main>
    </Fragment>
  );
};

export default MyWishItemDetailPage;
