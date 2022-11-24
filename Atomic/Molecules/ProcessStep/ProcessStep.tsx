import { Spacer, Text } from '@atomic';
// import { IProcessStep } from '@types';
import React from 'react';

import styles from './ProcessStep.module.scss';

interface IProcessStep {
  stepTitle: string;
  stepText: string;
  i: number;
}

const ProcessStep: React.FC<IProcessStep> = ({ stepTitle, stepText, i }) => {
  return (
    <div
      className='stage'
      key={i}
    >
      <div className={styles.stepNum}>0{i + 1}</div>
      <Spacer
        top='2xs'
        bottom='3xs'
      >
        <Text varient='h5'>{stepTitle}</Text>
      </Spacer>
      <Text varient='body1'>{stepText}</Text>
    </div>
  );
};

export default ProcessStep;
