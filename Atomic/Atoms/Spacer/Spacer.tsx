import cn from 'classnames';
import React from 'react';

import styles from './Spacer.module.scss';

type Spacing = '3xs' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

interface ISpacerProps {
  children?: React.ReactNode;
  top?: Spacing;
  right?: Spacing;
  bottom?: Spacing;
  left?: Spacing;
}

const Spacer: React.FC<ISpacerProps> = ({
  children,
  top,
  right,
  bottom,
  left,
}) => {
  return (
    <div
      className={cn(
        styles.spacer,
        styles[`top-${top}`],
        styles[`right-${right}`],
        styles[`bottom-${bottom}`],
        styles[`left-${left}`],
      )}
    >
      {children}
    </div>
  );
};

export default Spacer;
