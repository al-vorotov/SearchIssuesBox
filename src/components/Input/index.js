import React from 'react';

import styles from './styles.modules.scss'

const Input = ({...restProps}) => {
  console.log('----->restProps', restProps)
  return (
     <input {...restProps}/>
  );
};

export default Input
