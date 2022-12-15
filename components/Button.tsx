import Link from 'next/link';
import LoadingSpinner from './LoadingSpinner';
import React from 'react';
import { TbExternalLink } from 'react-icons/tb';
import { styled } from 'goober';

interface Props {
  onClick?: (e: any) => void;
  size?: 'small' | 'normal' | 'large';
  routerLink?: string;
  className?: any;
  buttonStyle?: 'grey' | 'green' | 'blue' | 'clear' | 'outline';
  href?: string;
  IconStart?: React.ReactNode;
  IconEnd?: React.ReactNode;
  iconOnly?: boolean;
  loading?: boolean;
  disabled?: boolean;
  [key: string]: any;
}

const StyledButton = styled('a')<any>`
  .start {
    margin-right: 6px;
  }
  .end {
    margin-left: 6px;
  }

  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  font-weight: inherit;
  letter-spacing: inherit;
  font-size: inherit;
  text-decoration: none;
  cursor: pointer;

  position: relative;
  outline: none;
  border-radius: 50px;
  border: none;

  margin: 4px;
  padding: 0;
  display: flex;
  z-index: 1;

  transition: all 0.1s ease;
  .btn-content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  --font-size: 18px;
  --h-padding: 23px;
  --v-padding: 8px;
  @media (max-width: 680px) {
    --font-size: 15px;
    --h-padding: 19px;
    --v-padding: 6px;
  }
  @media (max-width: 480px) {
    --font-size: 14px;
    --h-padding: 15px;
    --v-padding: 4px;
  }

  padding-inline-start: var(--h-padding);
  padding-inline-end: var(--h-padding);
  padding-top: var(--v-padding);
  padding-bottom: var(--v-padding);
  font-size: var(--font-size);
  &.small {
    font-size: calc(var(--font-size) * 0.75);
  }
  .btn-text {
    font-family: var(--font-family-sans-serif);
    font-size: inherit;
    letter-spacing: 0.05em;
    font-weight: 400;
    color: inherit;
  }

  .external-link {
    transition: transform 0.2s ease;
    width: var(--font-size);
    margin-left: 6px;
    margin-top: -1px;
  }

  &:hover {
    .external-link {
      transform: scale(1.3);
    }
  }

  &.grey {
    background: var(--light-grey);
    color: var(--black);
    &:hover {
      opacity: 0.8;
    }
  }

  &.green {
    background: var(--green);
    color: white;
    &:hover {
      opacity: 0.8;
    }
  }
`;

export const Button: React.FC<Props> = ({
  iconOnly = false,
  className,
  IconStart,
  IconEnd,
  buttonStyle = 'grey',
  onClick,
  children,
  size = 'normal',
  routerLink,
  href,
  disabled,
  loading,
  ...rest
}) => {
  const _onClick = (e: any) => {
    e.currentTarget.blur();

    onClick && onClick(e);
  };

  const ConditionalWrapper = ({ condition, wrapper, children }: any) =>
    condition ? wrapper(children) : children;

  return (
    <>
      <ConditionalWrapper
        condition={routerLink || href}
        wrapper={(children: any) => (
          <Link
            scroll={false}
            href={routerLink || href || '/'}
            passHref={Boolean(routerLink || href)}
          >
            {children}
          </Link>
        )}
      >
        <StyledButton
          type='button'
          disabled={disabled}
          as={href || routerLink ? 'div' : 'button'}
          className={
            buttonStyle +
            ' ' +
            (buttonStyle === 'outline' ? 'btn-outline ' : '') +
            (buttonStyle === 'clear' ? 'btn-clear ' : '') +
            (size === 'small' ? 'small ' : '') +
            (size === 'large' ? 'large ' : '') +
            (iconOnly ? 'icon-only ' : '') +
            (className ? className : '')
          }
          onClick={(e: any) => _onClick(e)}
          {...rest}
        >
          <div className='btn-content'>
            {IconStart}
            <div className='btn-text'>{children}</div>
            {IconEnd}
            {href ? <TbExternalLink className='external-link' /> : null}
            {loading && <LoadingSpinner />}
          </div>
        </StyledButton>
      </ConditionalWrapper>
    </>
  );
};
