import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import Count from '../components/Count'

function IndexPage() {
  return (
    <div>
      <Count/>
    </div>

  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
