import React from 'react';
import { styled } from 'goober';

const DotButton = styled('button')`
  background-color: transparent;
  cursor: pointer;
  position: relative;
  padding: 0;
  outline: 0;
  border: 0;
  width: 17px;
  height: 30px;
  margin-right: 3px;
  margin-left: 3px;
  display: flex;
  align-items: center;
  &:after {
    background-color: var(--black);
    opacity: 0.2;
    width: 100%;
    height: 4px;
    border-radius: 2px;
    content: '';
  }
  &.is-selected {
    width: 27px;
    &:after {
      background-color: var(--black);
      opacity: 1;
    }
  }
`;

export const CarouselDotButton = ({ selected, onClick }: any) => (
  <DotButton
    className={`${selected ? 'is-selected' : ''}`}
    type='button'
    onClick={onClick}
  />
);
