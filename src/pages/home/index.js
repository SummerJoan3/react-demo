import React from 'react';
import styles from '../styles.scss';
import { Button } from 'antd';
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 10 };
  }
  render() {
    const { count } = this.state;
    return (
      <div className={styles.big}>
        <Button type="primary" onClick={() => this.setState({ count: count + 1 })}>
          加加加
        </Button>
        <Button type="primary" onClick={() => this.setState({ count: count - 1 })}>
          减减减
        </Button>
      </div>
    );
  }
}

export default Home;
