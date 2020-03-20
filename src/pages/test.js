import React from 'react';
import styles from './styles.scss';
import s from './test.scss';
import { fetch } from '@/utils';
const Test = () => {
  fetch.post('/page/404', { a: 1 }).then(res => {
    console.log(res);
  });
  return <div className={styles.big}>测试</div>;
};

export default Test;
