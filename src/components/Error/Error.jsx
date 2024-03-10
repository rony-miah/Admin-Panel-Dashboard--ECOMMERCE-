import React from 'react'
import { Alert, Button } from 'antd';
import { Link } from 'react-router-dom';

const Error = () => {
    const btnStyle = {
        marginTop: "10px"
    }
    return (
        <div>
            <Alert
                message="Error"
                description="This is an error message."
                type="error"
                showIcon
            />
            <Link to="/">
                <Button style={btnStyle} type="primary" danger>
                    Back to Home
                </Button>
            </Link>
        </div>
    )
}

export default Error