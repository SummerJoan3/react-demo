import React from 'react';
import styles from './styles.scss';
import s from './test.scss';
import { fetch } from '../utils';
const Test = () => {
  fetch.post('/page/404', { a: 1 }).then(res => {
    console.log(res);
  });
  return (
    <div className={styles.big}>
      adsad
      <a href="http://www.w3school.com.cn" className={s.big}>
        sdasd
      </a>
    </div>
  );
};

export default Test;
