import cn from 'classnames';
import React from 'react';

import styles from './Button.module.scss';

type ButtonVarient = 'cta' | 'secondary';
type Color = 'primary' | 'outline' | 'fill' | 'black' | 'white';

interface IButtonProps {
  children: React.ReactNode;
  varient: ButtonVarient;
  color: Color;
  href: string;
  className?: string;
}

const Button: React.FC<IButtonProps> = ({
  children,
  varient,
  color = 'none',
  href,
  className,
}) => {
  return (
    <a
      href={href}
      className={cn(
        styles.btn,
        styles[varient],
        styles[color],
        className && className,
      )}
    >
      {children}
    </a>
  );
};

export default Button;
