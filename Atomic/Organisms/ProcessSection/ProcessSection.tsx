import { Button, Spacer, Text } from '@atomic';
import { IProcessStep } from '@types';
import ProcessStep from 'Atomic/Molecules/ProcessStep/ProcessStep';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

import styles from './ProcessSection.module.scss';

interface IProcessSectionProps {
  title: string;
  text: string;
  btnText: string;
  btnUrl: string;
  processSteps: IProcessStep[];
}

const ProcessSection: React.FC<IProcessSectionProps> = ({
  title,
  text,
  btnText,
  btnUrl,
  processSteps,
}) => {
  return (
    <section className={styles.section}>
      <div className='left'>
        <Text varient='h2'>{title}</Text>
        <Spacer
          top='2xs'
          bottom='2xs'
        >
          <Text varient='body1'>{text}</Text>
        </Spacer>
        <Button
          varient='secondary'
          color='primary'
          href={`${btnUrl}`}
        >
          {btnText}
          <BsArrowRight size={28.5} />
        </Button>
      </div>
      <div className={styles.right}>
        {processSteps.map((step, i) => (
          <ProcessStep
            stepTitle={step.stepTitle}
            stepText={step.stepText}
            i={i}
            key={i}
          />
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;
