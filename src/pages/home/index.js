import React from 'react';
import styles from '../styles.scss';
import s from '../test.scss';
import { fetch } from '@/utils';
const Test = props => {
  fetch.post('/page/404', { a: 1 }).then(res => {
    console.log(res);
  });
  console.log(props.match);
  return (
    <div className={styles.big}>
      adsad
      <a href="http://www.w3school.com.cn" className={s.big}>
        sdasd
      </a>
      <div
        onClick={() => {
          props.history.push('test');
        }}
      >
        
        aaaa
      </div>
    </div>
  );
};

export default Test;
