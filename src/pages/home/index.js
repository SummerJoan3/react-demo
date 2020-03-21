import React from 'react';
import styles from '../styles.scss';
import s from '../test.scss';
import { Button, Empty, Spin } from 'antd';
import { fetch } from '@/utils';
const Test = props => {
  fetch.post('/page/404', { a: 1 }).then(res => {
    console.log(res);
  });
  console.log(props.match);
  const fu = () => {
    props.history.push('test');
  };
  return (
    <div className={styles.big}>
      adsad
      <a href="http://www.w3school.com.cn" className={s.big}>
        sdasd
      </a>
      <div onClick={fu}>aaaa</div>
      <Button type="primary">faad</Button>
      <Spin />
      <Empty />
    </div>
  );
};

export default Test;
