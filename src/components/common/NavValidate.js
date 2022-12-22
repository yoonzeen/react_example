import { Tab, Tabs } from '@mui/material';
import React from 'react';

const NavValidate = ({ value, setValue }) => {
    const handleChange = (e, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <Tabs value={value} className={`navValidate`} onChange={handleChange}>
                <Tab label="MUI 기본 제공 validator"/>
                <Tab label="react-material-ui-form-validator"/>
                <Tab label="mui-validate" />
                <Tab label="formik" />
            </Tabs>
        </>
    );
}; 

export default NavValidate;