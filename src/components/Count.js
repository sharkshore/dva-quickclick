import React from 'react';
import {connect} from 'dva';
import styles from './Count.less'

/**
 无状态组件,函数式写法,没有this.state,只有this.props(即函数的参数)
 */
function Count({dispatch,record,current }) {
  function add() {
     dispatch({type: 'count/add'});
  }
  return (
    <div className={styles.normal}>
      <div>
        <div className={styles.normal}>
          <div className={styles.record}>Highest Record: {record}</div>
          <div className={styles.current}>{current}</div>
          <div className={styles.button}>
            <button onClick={() => {
              add();
              console.log(222);
            }}>+
            </button>
          </div>
        </div>
      </div>
    </div>

  );
}

function mapStateToProps(state, ownProps) {
  return {
    record: state.count.record,
    current: state.count.current
  };
}

export default connect(mapStateToProps)(Count);

