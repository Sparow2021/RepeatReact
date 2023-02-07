import React from 'react';
import classes from './MyInput.module.css'
const MyInput = (props) => {
    return (
        <input {...props} className={classes.myInput} type="text" />
    );
}

export default MyInput;