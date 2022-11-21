import React from 'react';

import styles from './Text.module.scss';

type font =
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
  varient: font;
}

const Text: React.FC<ITextProps> = ({ children, varient }) => {
  switch (varient) {
    case 'h1':
      return <h1 className={styles.h1}>{children}</h1>;
    case 'h2':
      return <h2 className={styles.h2}>{children}</h2>;
    case 'h3':
      return <h3 className={styles.h3}>{children}</h3>;
    case 'h4':
      return <h4 className={styles.h4}>{children}</h4>;
    case 'h5':
      return <h5 className={styles.h5}>{children}</h5>;
    case 'h6':
      return <h6 className={styles.h6}>{children}</h6>;
    case 'body1':
      return <p className={styles.body1}>{children}</p>;
    case 'body2':
      return <p className={styles.body2}>{children}</p>;
    case 'label1':
      return <p className={styles.lable1}>{children}</p>;
    case 'label2':
      return <p className={styles.label2}>{children}</p>;
  }
};

export default Text;
