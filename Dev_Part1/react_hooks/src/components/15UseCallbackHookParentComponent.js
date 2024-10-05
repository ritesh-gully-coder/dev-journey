import React,{useCallback, useState} from 'react'
import UseCallbackHookTitle from './15UseCallbackHookTitle';
import UseCallbackHookButton from './15UseCallbackHookButton';
import UseCallbackHookCount from './15UseCallbackHookCount';
import { SettingsAccessibility } from '@mui/icons-material';

function UseCallbackHookParentComponent() {
    const [age, setAge] = useState(27);
    const [salary, setSalary] = useState(90000);

    // const incrementAge = () =>{
    //     setAge(age+1)
    // }
    // const incrementSalary = () => {
    //     setSalary(salary + 10000)
    // }
    const incrementAge = useCallback(() =>{
        setAge(age+1)
    },[age])
    const incrementSalary = useCallback(() => {
        setSalary(salary + 10000)
    },[salary])
    return (
        <div>
            <UseCallbackHookTitle />
            <UseCallbackHookCount text="Age" count={age}/>
            <UseCallbackHookButton handleClick={incrementAge}>Increment Age</UseCallbackHookButton>
            <UseCallbackHookCount text="Salary" count={salary} />
            <UseCallbackHookButton handleClick={incrementSalary}>Increment Salary</UseCallbackHookButton>
        </div>
    )
}

export default UseCallbackHookParentComponent;