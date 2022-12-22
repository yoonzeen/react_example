import { FormHelperText, TextField } from '@mui/material';
import { Validate, ValidationGroup } from 'mui-validate';
import React, { useState } from 'react';

const FormPage2 = () => {
    const [form, setForm] = useState({
        userId: '',
        userPw: '',
    });
    const changeInput = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    }
    return (
        <div className='formPage'>
            <div className='desc'>
                <h3 className='blue '><a href="https://www.npmjs.com/package/mui-validate" title="mui-validate" target="_blank" rel="noreferrer">mui-validate</a></h3>
                <p>
                    -  Published a month ago
                </p>
            </div>
            <div>
                <div className='mb10'>
                    <ValidationGroup>
                        <Validate name="userId" required="required">
                            <TextField onChange={changeInput}/>
                        </Validate>
                        <div className='ml14'><FormHelperText>Fill your id.</FormHelperText></div>
                    </ValidationGroup>
                </div>
                <div className='mb10'>
                    <ValidationGroup>
                        <Validate name="userPw" regex={[/^[0-9]{4,4}$/, 'This is required in 4 letters of number.']}>
                            <TextField type="password" onChange={changeInput} />
                        </Validate>
                        <div className='ml14'>
                            <FormHelperText>Fill your password of 4 letters of number.</FormHelperText>
                        </div>
                    </ValidationGroup>
                </div>
            </div>
        </div>
    );
};

export default FormPage2;