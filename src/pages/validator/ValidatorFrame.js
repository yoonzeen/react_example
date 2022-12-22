import NavValidate from 'components/common/NavValidate';
import React, { useState } from 'react';
import FormPage0 from './FormPage0';
import FormPage1 from './FormPage1';
import FormPage2 from './FormPage2';
import FormPage3 from './FormPage3';

const ValidatorFrame = () => {
    const [value, setValue] = useState(0);
    return (
        <div>
            <NavValidate value={value} setValue={setValue} />
            <div className='mt30'>
                {value === 0 && <FormPage0 />}
                {value === 1 && <FormPage1 />}
                {value === 2 && <FormPage2 />}
                {value === 3 && <FormPage3 />}
            </div>
        </div>
    );
};

export default ValidatorFrame;