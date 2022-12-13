import { TextField } from '@mui/material';
import React, { useState } from 'react';

export default function ValidateInput({ inputRef, helperText, label, name, type, regexCheck, inputs, setInputs, isAllError, setIsAllError }) {
    const [isError, setIsError] = useState(false);
    const [input, setInput] = useState('');
    const checkInput = (e) => {
        const { value } = e.target;
        const isRegexCheck = !regexCheck.test(value);
        setInput(value);
        setInputs({ ...inputs, [name]: value })
        setIsError(isRegexCheck);
        setIsAllError({...isAllError, [name] : isRegexCheck});
    };
    
    return (
        <div>
            <TextField inputRef={inputRef} error={isError} helperText={helperText} type={type} label={label} name={name} value={input} onChange={checkInput}/>
        </div>
    );
};
