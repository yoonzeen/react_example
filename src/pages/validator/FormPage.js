import React, { useRef, useState } from 'react';
import { Button } from '@mui/material';
import ValidateInput from 'components/validator/ValidateInput';
import regex from 'assets/data/regex';

const FormPage = () => {
    const userNameRef = useRef();
    const userPwRef = useRef();
    const userEmailRef = useRef();
    const [isAllError, setIsAllError] = useState({
        userName: false,
        userPw: false,
        userEmail: false
    });
    const [inputs, setInputs] = useState({
        userName: '',
        userPw: '',
        userEmail: ''
    });
    const checkStrVaild = (str) => {
        return str && str.replace(/ /g, "").length;
    };
    const focusInput = (ref, name) => {
        setIsAllError({...isAllError, [name] : true});
        ref.current.focus();
        console.log()
        if(name === 'userName' || name === 'userEmail') console.log(`${name}을 입력해주세요.`);
        else if (name === 'userPw') console.log(`${name}를 입력해주세요.`);
        console.log(isAllError)
    }

    const onSubmit = () => {
        console.log(inputs)
        if (!checkStrVaild(inputs.userName)) {
            focusInput(userNameRef, 'userName');
        }
        if (!checkStrVaild(inputs.userPw)) {
            focusInput(userPwRef, 'userPw');
        }
        if (!checkStrVaild(inputs.userEmail)) {
            focusInput(userEmailRef, 'userEmail');
        }
        console.log(isAllError)
        if (isAllError.userName || isAllError.userPw || isAllError.userEmail) { console.log('잘못된 곳이 있습니다.') };
    };
    

    return (
        <div className='formPage'>
            <div className='mb10'>
                <ValidateInput inputRef={userNameRef} helperText="한글로 입력하세요." label="Name" name="userName" type="text" regexCheck={regex.userName} inputs={inputs} setInputs={setInputs} isAllError={isAllError} setIsAllError={setIsAllError} />
            </div>
            <div className='mb10'>
                <ValidateInput inputRef={userPwRef} label="Password" name="userPw" type="password" regexCheck={regex.userPw} inputs={inputs} setInputs={setInputs} isAllError={isAllError} setIsAllError={setIsAllError}  />
            </div>
            <div className='mb10'>
                <ValidateInput inputRef={userEmailRef} label="Email" name="userEmail" type="email" regexCheck={regex.userEmail} inputs={inputs} setInputs={setInputs} isAllError={isAllError} setIsAllError={setIsAllError} />
            </div>  
            <Button type="submit" variant="contained" onClick={onSubmit}>submit</Button>
        </div>
    );
};

export default FormPage;