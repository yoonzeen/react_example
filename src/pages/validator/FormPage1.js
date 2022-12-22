import React, { useState } from 'react';
import { Button, IconButton } from '@mui/material';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import InfoIcon from '@mui/icons-material/Info';
import ModalComp from 'components/common/ModalComp';
const FormPage1 = () => {
    const [open, setOpen] = useState(false);
    const initState = {
        userEmail: '',
        userPw: '',
        userRepeatPw: '',
        userMajor: '',
    };
    const [inputs, setInputs] = useState(initState);

    const changeInput = (e) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    const onSubmit = () => {  
        console.log('submit')
    };

    /* 비밀번호가 비밀번호확인과 일치한지의 여부 */
    ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
        if (value !== inputs.userPw) return false;
        return true;
    });

    return (
        <div className='formPage'>
            <div className='desc'>
                <h3 className='blue '><a href="https://www.npmjs.com/package/react-material-ui-form-validator" title="react-material-ui-form-validator" target="_blank" rel="noreferrer">react-material-ui-form-validator</a> <IconButton onClick={() => setOpen(true)}><InfoIcon /></IconButton></h3>
                {open && <ModalComp title={'모달'} contents={'모달 내용.'} open={open} setOpen={setOpen} />}
                <p>
                    - 'validators'라는 props에서 기본적으로 주어지는 validator가 있다. <br />
                    &nbsp;&nbsp;<span className='sm'>(matchRegexp, isEmail, isEmpty, required, trim, isNumber, isFloat, isPositive, maxNumber, minNumber, <br />
                    &nbsp;&nbsp;maxFloat, minFloat, isString, minStringLength, maxStringLength, isFile, maxFileSize, allowedExtensions)</span><br/>
                    - array의 순서에 따라 validator에 맞는 errorMessages도 설정할 수 있다.<br />
                    - 직접 validator를 만들 수도 있음. (ex. 비밀번호 확인 필드에서 비밀번호와의 일치 여부)<br />
                    - Published 6 months ago
                </p>
            </div>
            <ValidatorForm onSubmit={onSubmit}>
                <div className='mb10'>
                    <TextValidator label="Email *" helperText={'Fill your email.'} onChange={changeInput} value={inputs.userEmail} validators={['required', 'isEmail']} errorMessages={['This field is required.', 'Email is not valid.']} name="userEmail" type="email"/>
                </div>
                <div className='mb10'>
                    <TextValidator label="Password *" helperText={'Fill your password of 4 letters of number.'} onChange={changeInput} value={inputs.userPw}
                        validators={['required', 'matchRegexp:^[0-9]{4,4}$']}
                        errorMessages={['This field is required.', 'This is required in 4 letters of number.']}
                        name="userPw" type="password" />
                </div>
                <div className='mb10'>
                    <TextValidator label="Confirm password *" onChange={changeInput} value={inputs.userRepeatPw}
                        validators={['required', 'matchRegexp:^[0-9]{4,4}$', 'isPasswordMatch']}
                        errorMessages={['This field is required.', 'This is required in 4 letters of number.', 'Not matched with password you inserted.']}
                        name="userRepeatPw" type="password" />
                </div>
                <div className='mb10'>
                    <TextValidator label="Major" helperText={'Fill your major. Not required.'} onChange={changeInput} value={inputs.userMajor}
                        name="userMajor" type="text" />
                </div>  
                <Button onClick={onSubmit} variant="contained">submit</Button>
            </ValidatorForm>
        </div>
    );
};

export default FormPage1;