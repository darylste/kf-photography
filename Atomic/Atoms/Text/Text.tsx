import React from 'react';

import styles from './Text.module.scss';

type FontVarient =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'body1'
  | 'body2'
  | 'label1'
  | 'label2';

interface ITextProps {
  children: React.ReactNode;
  varient: FontVarient;
  color?: 'black' | 'white';
}

const Text: React.FC<ITextProps> = ({ children, varient, color = 'black' }) => {
  switch (varient) {
    case 'h1':
      return <h1 className={`${styles.h1} ${styles[color]}`}>{children}</h1>;
    case 'h2':
      return <h2 className={`${styles.h2} ${styles[color]}`}>{children}</h2>;
    case 'h3':
      return <h3 className={`${styles.h3} ${styles[color]}`}>{children}</h3>;
    case 'h4':
      return <h4 className={`${styles.h4} ${styles[color]}`}>{children}</h4>;
    case 'h5':
      return <h5 className={`${styles.h5} ${styles[color]}`}>{children}</h5>;
    case 'h6':
      return <h6 className={`${styles.h6} ${styles[color]}`}>{children}</h6>;
    case 'body1':
      return <p className={`${styles.body1} ${styles[color]}`}>{children}</p>;
    case 'body2':
      return <p className={`${styles.body2} ${styles[color]}`}>{children}</p>;
    case 'label1':
      return <p className={`${styles.lable1} ${styles[color]}`}>{children}</p>;
    case 'label2':
      return <p className={`${styles.label2} ${styles[color]}`}>{children}</p>;
  }
};

export default Text;
