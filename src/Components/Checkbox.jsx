import React from "react";
import styles from './styles/Checkbox.module.css'

export const CheckboxC = ({id,value,handleCarModel}) => {
  return (
    <>
      <label onChange={(e)=>handleCarModel(id, value,e)} className= {styles.container}>
        {value}
        <input type="checkbox" />
        <span  className={styles.checkmark}></span>
      </label>
    </>
  );
};
