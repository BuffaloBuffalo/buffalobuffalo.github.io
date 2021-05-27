
import React from 'react';
import * as styles from './Meta.module.scss';

// type Props = {
//   date: string
// };

const Meta = ({ date }) => (
  <div className={styles['meta']}>
    <p className={styles['meta__date']}>Published {new Date(date).toLocaleDateString('en-US', { timeZone: 'America/New_York', year: 'numeric', month: 'short', day: 'numeric' })}</p>
  </div>
);

export default Meta;
