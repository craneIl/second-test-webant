import { Alert } from 'antd';
import React from 'react';

export default function alert(type, descriptionAlert){
    let result = null;
    if(type.toLowerCase() == 'error'){
        console.log('error');
        result = (
            <Alert
            className=" my-4 "
            message="Error"
            description={descriptionAlert}
            type="error"
            showIcon
            />
        )
    } else if(type.toLowerCase() == 'success'){
        result = (
            <Alert
            className=" my-4 "
            message="Successfully"
            description={descriptionAlert}
            type="success"
            showIcon
        />
        )
    }
    return(
        <div>
            {result}
        </div>
    )
}