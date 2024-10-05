import { useRef } from "react";

function UseRefHook2() {
  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.focus();
  };

  return (
    <>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Focus Input</button>
    </>
  );
}

export default UseRefHook2;

/*
By clicking the button,
the input field will get focus.
*/

              