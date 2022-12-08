import React, { useState } from 'react';
import { Button, TextField } from '@mui/material';
import { ValidationGroup, Validate } from 'mui-validate';

const FormPage = () => {
    const [inputs, setInputs] = useState({
        userName: '',
        userPw: '',
        userEmail: ''
    })
    const checkInput = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        })
    };
    const checkStrVaild = (str) => {
        return str && str.replace(/ /g, "").length;
    };

    const onSubmit = () => {
        if (!checkStrVaild(inputs.userName)) {
            alert('이름을 입력해주세요.');
            return;
        }
        if (!checkStrVaild(inputs.userPw)) {
            alert('비밀번호를 입력해주세요.');
            return;
        }
        if (!checkStrVaild(inputs.userEmail)) {
            alert('이메일을 입력해주세요.');
            return;
        }
    };

    return (
        <div className='formPage'>
            <div className='mb10'>
                <ValidationGroup initialValidation='noisy'>   
                    <Validate required regex={/^[가-힣]*$/}>
                        <TextField ref={userName} helperText="한글로 입력하세요." label="Name" name="userName" value={inputs.userName} onChange={checkInput}/>
                    </Validate>
                </ValidationGroup>
            </div>
            <div className='mb10'>
                <ValidationGroup>  
                    <Validate required regex={/^\d{0,5}$/}>
                        <TextField ref={userPw} label="Password" name="userPw" type="password" value={inputs.userPw} onChange={checkInput} />
                    </Validate>
                </ValidationGroup>
            </div>
            <div className='mb10'>
                <ValidationGroup>  
                    <Validate required>
                        <TextField ref={userEmail} label="Email" name="userEmail" type="email" value={inputs.userEmail} onChange={checkInput} />
                    </Validate>
                </ValidationGroup>
            </div>  
            <Button type="submit" variant="contained" onClick={onSubmit} >submit</Button>
        </div>
    );
};

export default FormPage;