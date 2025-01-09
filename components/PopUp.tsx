import React, { useEffect, useState } from 'react';

import { Button } from './Button';
import { styled } from 'goober';

const PopupOverlay = styled('div')`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const PopupContent = styled('div')`
  background: white;
  padding: 20px;
  border-radius: 28px;
  text-align: center;
  position: relative;
  max-width: 90%;
  width: 100%;
  box-shadow: 0 4 26px rgba(0, 0, 0, 0.1), 0 1 5px rgba(0, 0, 0, 0.07);
  @media (min-width: 700px) {
    max-width: 700px;
  }
`;

const CloseButton = styled('button')`
  position: absolute;
  top: -10px;
  right: -10px;
  background: white;
  border: none;
  font-size: 20px;
  cursor: pointer;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  border: 1px solid #b2b2b2;
  &:hover {
    transform: scale(1.1);
  }
`;

const PopupImage = styled('img')`
  max-width: 100%;
  height: auto;
  border-radius: 18px;
`;

const PopupText = styled('p')`
  margin: 0;
  margin-top: 14px;
  margin-bottom: 14px;
  text-align: center;
`;

const OkayButton = styled(Button as any)`
  width: 100%;
  margin: auto;
  .btn-content {
    flex: 1;
  }
  .btn-text {
    text-align: center;
  }
`;

export const PopUp: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <PopupOverlay>
      <PopupContent>
        <CloseButton onClick={handleClose}>&times;</CloseButton>
        <PopupImage src='/santamonicapier.jpg' alt='Popup Image' />
        <PopupText>
          For those impacted by the fires throughout Los Angeles, we are in this
          together. Please call if there is anything we can do to support you or
          your furry family members during this time.
        </PopupText>

        <OkayButton buttonStyle='green' onClick={handleClose}>
          Okay
        </OkayButton>
      </PopupContent>
    </PopupOverlay>
  );
};
