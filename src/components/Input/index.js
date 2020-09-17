import React from 'react';

import styles from './styles.module.scss'

const Input = ({...restProps}) => {
  return (
     <input {...restProps} className={styles.input}/>
  );
};

export default Input
