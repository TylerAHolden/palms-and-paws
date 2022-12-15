import React from 'react';
import { styled } from 'goober';

type Props = {
  className?: string;
};

const LoadingSVG = styled('svg')`
  width: 20px;
  height: 20px;
  animation: spinner-rotate 750ms linear infinite;
  margin-left: 6px;
  margin-right: -12px;
  circle {
    fill: transparent;
    stroke-width: 4px;
    stroke-dasharray: 128px;
    stroke-dashoffset: 82px;
    stroke: currentcolor;
  }
`;

const LoadingSpinner: React.FC<Props> = ({ className }) => {
  return (
    <LoadingSVG className={className} viewBox='0 0 64 64'>
      <circle transform='translate(32,32)' r={26} />
    </LoadingSVG>
  );
};

export default LoadingSpinner;
