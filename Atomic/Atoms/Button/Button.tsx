import React from 'react';

import styles from './Button.module.scss';

type ButtonVarient = 'cta' | 'secondary';
type Color = 'primary' | 'outline' | 'fill' | 'black' | 'white';

interface IButtonProps {
  children: React.ReactNode;
  varient: ButtonVarient;
  color: Color;
  href: string;
}

const Button: React.FC<IButtonProps> = ({
  children,
  varient,
  color = 'none',
  href,
}) => {
  return (
    <a
      href={href}
      className={`${styles.btn} ${styles[varient]} ${styles[color]}`}
    >
      {children}
    </a>
  );
};

export default Button;
