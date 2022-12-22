import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import ValidateInput from 'components/validator/ValidateInput';
import regex from 'assets/data/regex';

const FormPage0 = () => {
    const initState = {
        userName: '',
        userPw: '',
        userEmail: ''
    };
    const [isAllError, setIsAllError] = useState({
        userName: true,
        userPw: true,
        userEmail: true
    });
    const [inputs, setInputs] = useState(initState);
    const [btnDisabled, setBtnDisabled] = useState(true);

    const onSubmit = () => {  
        console.log('submit')
    };

    useEffect(() => {
        if (!isAllError.userName && !isAllError.userPw && !isAllError.userEmail) setBtnDisabled(false);
        else setBtnDisabled(true);
    }, [isAllError]);

    return (
        <div className='formPage'>
            <div className='desc'>
                <h3 className='blue '>MUI에서 기본으로 제공하는 Validator</h3>
                <p>
                    - 커스텀이 자유롭다.<br/>
                    - TextField 컴포넌트의 error라는 props에서 true/false에 따라 error처리 해줌. <br />
                    - error 관련 상태관리를 따로 해주어야 함.
                </p>
            </div>
            <div>
                <div className='mb10'>
                    <ValidateInput helperText="Fill your name in Korean." label="Name *" name="userName" type="text" regexCheck={regex.userName} inputs={inputs} setInputs={setInputs} isAllError={isAllError} setIsAllError={setIsAllError} />
                </div>
                <div className='mb10'>
                    <ValidateInput helperText="At least 8 characters including uppercase and lowercase letters and numbers. " label="Password *" name="userPw" type="password" regexCheck={regex.userPw} inputs={inputs} setInputs={setInputs} isAllError={isAllError} setIsAllError={setIsAllError}  />
                </div>
                <div className='mb10'>
                    <ValidateInput helperText="Fill your email." label="Email *" name="userEmail" type="email" regexCheck={regex.userEmail} inputs={inputs} setInputs={setInputs} isAllError={isAllError} setIsAllError={setIsAllError} />
                </div>  
                <Button type="submit" variant="contained" disabled={btnDisabled} onClick={onSubmit}>submit</Button>
            </div>
        </div>
    );
};

export default FormPage0;