import React from 'react';
import { Body14, Body18 } from './typography';
import { buttonWrraper, descriptionStyle, dimmer, popup, titleWrraper } from './Popup.css';
import Button from './Button';

type Props = {
  title: string;
  description?: string;
  onClickMainButton: () => void;
  mainButtonText: string;
  onClickCancelButton?: () => void;
  cancelButtonText?: string;
};

const Popup: React.FC<Props> = ({
  title,
  description,
  mainButtonText,
  onClickMainButton,
  cancelButtonText,
  onClickCancelButton,
}) => {
  return (
    <div className={dimmer}>
      <div className={popup}>
        <div className={titleWrraper}>
          <Body18 fw="bold">{title}</Body18>
          {description && (
            <Body14 color="black64" className={descriptionStyle}>
              {description}
            </Body14>
          )}
        </div>
        <div className={buttonWrraper}>
          {cancelButtonText && (
            <Button type="gray" size="large" onClick={onClickCancelButton}>
              {cancelButtonText}
            </Button>
          )}
          <Button type="primary" size="large" onClick={onClickMainButton}>
            {mainButtonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
