import Link, { LinkProps } from 'next/link';
import React, { ReactNode } from 'react';

interface IProps extends LinkProps {
  children: ReactNode;
  target?: string;
  rel?: string;
}

const NoScrollLink = ({
  children,
  href,
  passHref,
  ...rest
}: IProps): JSX.Element => (
  <Link href={href} passHref={passHref} scroll={false} {...rest}>
    {children}
  </Link>
);

export default NoScrollLink;
