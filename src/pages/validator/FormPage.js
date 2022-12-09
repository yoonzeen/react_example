import React, { useRef, useState } from 'react';
import { Button, TextField } from '@mui/material';
import { ValidationGroup, Validate } from 'mui-validate';

const FormPage = () => {
    const userNameRef = useRef();
    const userPwRef = useRef();
    const userEmailRef = useRef();
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
    const focusInput = (ref, name) => {
        ref.current.focus();
        if(name === '이름' || name === '이메일') alert(`${name}을 입력해주세요.`);
        else if (name === '비밀번호') alert(`${name}를 입력해주세요.`);
    }

    const onSubmit = () => {
        console.log(error)
        if (!checkStrVaild(inputs.userName)) {
            focusInput(userNameRef, '이름');
            return;
        }
        if (!checkStrVaild(inputs.userPw)) {
            focusInput(userPwRef, '비밀번호');
            return;
        }
        if (!checkStrVaild(inputs.userEmail)) {
            focusInput(userEmailRef, '이메일');
            return;
        }
    };

    return (
        <div className='formPage'>
            <div className='mb10'>
                <ValidationGroup>   
                    <Validate required regex={/^[가-힣]*$/}>
                        <TextField inputRef={userNameRef} helperText="한글로 입력하세요." label="Name" name="userName" value={inputs.userName} onChange={checkInput}/>
                    </Validate>
                </ValidationGroup>
            </div>
            <div className='mb10'>
                <ValidationGroup>  
                    <Validate required regex={/^\d{0,5}$/}>
                        <TextField inputRef={userPwRef} label="Password" name="userPw" type="password" value={inputs.userPw} onChange={checkInput} />
                    </Validate>
                </ValidationGroup>
            </div>
            <div className='mb10'>
                <ValidationGroup>  
                    <Validate required>
                        <TextField inputRef={userEmailRef} label="Email" name="userEmail" type="email" value={inputs.userEmail} onChange={checkInput} />
                    </Validate>
                </ValidationGroup>
            </div>  
            <Button type="submit" variant="contained" onClick={onSubmit} >submit</Button>
        </div>
    );
};

export default FormPage;