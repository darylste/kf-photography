import { Button, Spacer, Text } from 'Atomic/Atoms';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

import styles from './ProcessSection.module.scss';

interface IProcessStep {
  stepTitle: string;
  stepText: string;
}

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
          <div
            className='stage'
            key={i}
          >
            <div className={styles.stepNum}>0{i + 1}</div>
            <Spacer
              top='2xs'
              bottom='3xs'
            >
              <Text varient='h5'>{step.stepTitle}</Text>
            </Spacer>
            <Text varient='body1'>{step.stepText}</Text>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;
