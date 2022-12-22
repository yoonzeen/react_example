import { TextField } from '@mui/material';
import React, { useState } from 'react';

export default function ValidateInput({ helperText, label, name, type, regexCheck, inputs, setInputs, isAllError, setIsAllError }) {
    const [isError, setIsError] = useState(false);
    const [input, setInput] = useState('');
    //문자열 체크
    const checkStrVaild = (str) => {
        return str && str.replace(/ /g, "").length;
    }
    const checkInput = (e) => {
        const { value } = e.target;
        const isRegexCheck = !regexCheck.test(value);
        const isEmptyCheck = !checkStrVaild(value);
        // 빈 값일 때 무조건 에러
        if (isEmptyCheck) setIsError(isEmptyCheck);
        else setIsError(isRegexCheck);
        setInput(value);
        setInputs({ ...inputs, [name]: value })
        setIsAllError({ ...isAllError, [name]: isRegexCheck || isEmptyCheck });
    };

    return (
        <>
            <TextField style={{display:'block'}} error={isError} helperText={helperText} type={type} label={label} name={name} value={input} onChange={checkInput}/>
        </>
    );
};
