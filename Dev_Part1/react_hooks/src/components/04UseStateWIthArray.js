import React, { useState } from 'react'

function UseStateWIthArray() {
    const [items, setItems] = useState([]);

    const addItem = () => {
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }

    return (
        <div>
            <h1>useState with Array</h1>
            <button onClick={addItem}>Add a Number</button>
            <ul>

                {/*  Implicit return */}
                {items.map(item => (
                    <li key={item.id}>
                        {item.value}
                    </li>
                ))}

                {/* Explicit return */}
                {/* {items.map(item => {
                    return (
                        <li key={item.id}>
                            {item.value}
                        </li>
                    );
                })} */}

            </ul>

        </div>
    )
}

export default UseStateWIthArray;


//Summary
//The useState hook lets you add state to functional components.
//In classes,the state is always an object.
//With the useState hook,the state does not have to ean object.
//The useState hook returns an array with 2 elements.
//The irst element is the current value of the state,and the second element is a state setter function.
//New state value depends on the previous state value? you can pass a function to the setter function.
//When dealing with objects or arrays,always make sure to spread your state variable and then call the setter function.

