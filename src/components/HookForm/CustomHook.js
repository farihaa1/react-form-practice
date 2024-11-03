import { useState } from "react"

const useInputState = (defaultValue)=>{
    const [value, setValue] = useState(defaultValue);

    const handleOnChange = e =>{
        setValue(e.target.value);
    }
    return [value, handleOnChange];
}
export default useInputState;