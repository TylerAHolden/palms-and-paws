import React from 'react';
import { styled } from 'goober';

type Props = {
  children: React.ReactNode;
  color?: 'green' | 'yellow';
};

const Container = styled('div')`
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  overflow: hidden;
  white-space: nowrap;
  &.green {
    background: var(--green);
    h3 {
      color: white;
    }
  }
  &.yellow {
    background: var(--yellow);
    h3 {
      color: white;
    }
  }
  &:hover {
    h3 {
      opacity: 0.3;
    }
  }
  @-webkit-keyframes slide {
    from {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    to {
      -webkit-transform: translate3d(-50%, 0, 0);
      transform: translate3d(-50%, 0, 0);
    }
  }
  @-moz-keyframes slide {
    from {
      -moz-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    to {
      -moz-transform: translate3d(-50%, 0, 0);
      transform: translate3d(-50%, 0, 0);
    }
  }
  @-o-keyframes slide {
    from {
      transform: translate3d(0, 0, 0);
    }
    to {
      transform: translate3d(-50%, 0, 0);
    }
  }
  @keyframes slide {
    from {
      -webkit-transform: translate3d(0, 0, 0);
      -moz-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    to {
      -webkit-transform: translate3d(-50%, 0, 0);
      -moz-transform: translate3d(-50%, 0, 0);
      transform: translate3d(-50%, 0, 0);
    }
  }
`;

const MarqueeContent = styled('div')`
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  animation: slide 40s linear infinite;
  will-change: transform;
`;

const MarqueeContentWrapper = styled('div')`
  display: inline-block;
  h3 {
    margin-top: 4px;
    transition: opacity 0.3s ease;
    display: inline-block;
    margin-right: 10px;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
`;

export const Marquee: React.FC<Props> = ({ children, color }) => {
  return (
    <Container className={color || ''}>
      <MarqueeContent>
        <MarqueeContentWrapper>
          {children}
          {children}
          {children}
          {children}
          {children}
        </MarqueeContentWrapper>
        <MarqueeContentWrapper>
          {children}
          {children}
          {children}
          {children}
          {children}
        </MarqueeContentWrapper>
      </MarqueeContent>
    </Container>
  );
};
