import { Button, Spacer, Text } from 'Atomic/Atoms';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

import styles from './ProcessSection.module.scss';

const ProcessSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className='left'>
        <Text varient='h2'>How it works</Text>
        <Spacer
          top='2xs'
          bottom='2xs'
        >
          <Text varient='body1'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </Text>
        </Spacer>
        <Button
          varient='secondary'
          color='primary'
          href='/contact'
        >
          Book your photoshoot <BsArrowRight size={28.5} />
        </Button>
      </div>
      <div className={styles.right}>
        <div className='stage'>
          <div className={styles.stepNum}>01</div>
          <Spacer
            top='2xs'
            bottom='3xs'
          >
            <Text varient='h5'>Create a package</Text>
          </Spacer>
          <Text varient='body1'>
            Euismod faucibus turpis eu gravida mi. Pellentesque et velit
            aliquam.
          </Text>
        </div>

        <div className='stage'>
          <div className={styles.stepNum}>02</div>
          <Spacer
            top='2xs'
            bottom='3xs'
          >
            <Text varient='h5'>Reserve your date</Text>
          </Spacer>
          <Text varient='body1'>
            Euismod faucibus turpis eu gravida mi. Pellentesque et velit
            aliquam.
          </Text>
        </div>

        <div className='stage'>
          <div className={styles.stepNum}>03</div>
          <Spacer
            top='2xs'
            bottom='3xs'
          >
            <Text varient='h5'>Enjoy your day</Text>
          </Spacer>
          <Text varient='body1'>
            Euismod faucibus turpis eu gravida mi. Pellentesque et velit
            aliquam.
          </Text>
        </div>

        <div className='stage'>
          <div className={styles.stepNum}>04</div>
          <Spacer
            top='2xs'
            bottom='3xs'
          >
            <Text varient='h5'>Recieve photos</Text>
          </Spacer>
          <Text varient='body1'>
            Euismod faucibus turpis eu gravida mi. Pellentesque et velit
            aliquam.
          </Text>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
