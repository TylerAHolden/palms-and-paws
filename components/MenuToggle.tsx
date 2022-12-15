import * as React from 'react';

import { motion } from 'framer-motion';
import { styled } from 'goober';

const Path = (props: any) => (
  <motion.path
    fill='transparent'
    strokeWidth='1'
    stroke='hsl(0, 0%, 18%)'
    strokeLinecap='round'
    {...props}
  />
);

const MenuButton = styled('button')`
  position: relative;
  width: 50px;
  height: 50px;
  display: flex;
  padding: 0;
  margin: 0;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: transparent;
  margin: -10px 0;
  z-index: 1000;
`;

export const MenuToggle = ({ toggle }: { toggle: () => void }) => (
  <MenuButton onClick={toggle} aria-label='Menu'>
    <svg width='26' height='26' viewBox='0 0 23 23'>
      <Path
        variants={{
          closed: { d: 'M 2 2.5 L 20 2.5' },
          open: { d: 'M 3 16.5 L 17 2.5' },
        }}
      />
      <Path
        d='M 2 9.423 L 20 9.423'
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: 'M 2 16.346 L 20 16.346' },
          open: { d: 'M 3 2.5 L 17 16.346' },
        }}
      />
    </svg>
  </MenuButton>
);
