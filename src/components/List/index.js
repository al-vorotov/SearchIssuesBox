import React from 'react';

import styles from './styles.modules.scss'

const List = (...restProps) => {

  return (
     <input {...restProps}/>
  );
};

export default List;
