import React, { useState } from 'react'
import useInput from './hooks/21useInput';

function UseInputHookFormOne() {
    const [firstName,bindFirstName, resetFirstName] = useInput('');
    const [lastName,bindLastName, resetLastName] = useInput('');

    const submitHandler = (e) => {
        e.preventDefault();
        alert(`Hello  ${firstName} ${lastName}`);
        resetFirstName();
        resetLastName();
    };
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>First Name:</label>
                    <input {...bindFirstName} type='text' />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input  {...bindLastName}  type='text' />
                </div>
                <button onClick={submitHandler}>Submit</button>
            </form>
        </div>
    )
}

export default UseInputHookFormOne; 