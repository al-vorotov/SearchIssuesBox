import React from 'react';

import styles from './styles.modules.scss'

const Issue = (...restProps) => {

  return (
     <input {...restProps}/>
  );
};

export default Issue;
