import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { Button, TextField } from '@mui/material';
 
const validationSchema = yup.object({
    userEmail: yup
        .string('Enter your email.')
        .email('Enter a valid email.')
        .required('Email is required.'),
    userName: yup
        .string('Enter your name.')
        .matches(/^[a-z]+$/, 'Enter your name of lower case.')
        .required('Name is  required.'),
    userPw: yup
        .string('Enter your password.')
        .min(8, 'Password should be of minimum 8 characters length.')
        .required('Password is required.'),
});

const FormPage3 = () => {
    const [btnDisabled, setBtnDisabled] = useState(true);
    const formik = useFormik({
        initialValues: {
            userEmail:'',
            userName: '',
            userPw: '',
        },
        validationSchema:validationSchema,
        onSubmit:(values) => {
            // same shape as initial values
            console.log(values);
        }
    });     
    const { values, touched, errors, handleChange, handleSubmit } = formik;
        
    useEffect(() => {
        if (values.userEmail && values.userName && values.userPw) {
            setBtnDisabled(false);
        } else {
            setBtnDisabled(true);
        }
    }, [values]);
        
    return (
        <div className='formPage'>
            <div className='desc'>
                <h3 className='blue '><a href="https://formik.org/" title="Formik" target="_blank" rel="noreferrer">Formik</a></h3>
                <p>
                    - formik과 yup(validator) 결합으로 주로 사용
                </p>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className='mb10'>
                        <TextField name="userEmail" label="Email" value={values.userEmail}
                            onChange={handleChange}
                            error={touched.userEmail && Boolean(errors.userEmail)}
                            helperText={touched.userEmail && errors.userEmail}
                        />
                    </div>
                    <div className='mb10'>
                        <TextField name="userName" label="Name" value={values.userName}
                            onChange={handleChange}
                            error={touched.userName && Boolean(errors.userName)}
                            helperText={touched.userName && errors.userName}
                        />
                    </div>
                    <div className='mb10'>
                        <TextField name="userPw" label="Password" value={values.userPw}
                            onChange={handleChange} type="password"
                            error={touched.userPw && Boolean(errors.userPw)}
                            helperText={touched.userPw && errors.userPw}
                        />
                    </div>

                    {/* <div className='mb10'>
                        <Button variant="contained"
                            onClick={() => validateForm().then(() => console.log('blah'))}
                        >
                            Validate All
                        </Button>
                    </div> */}
                    <div>
                        <Button variant="contained" type="submit" disabled={btnDisabled}>Submit</Button>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default FormPage3;