import { useEffect, useRef } from "react";

const RefForm = () => {

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);

    useEffect(()=>{
        nameRef.current.focus();
    },[])

    const handleOnSubmit = e =>{
        e.preventDefault();
        console.log(nameRef.current.value)
        console.log(emailRef.current.value)
        console.log(phoneRef.current.value)
    }
    return (
        <div>
            <h1>Ref Form</h1>
            <div onSubmit={handleOnSubmit}>
            <form>
                <input ref={nameRef} type="text" name="name" />
                <br />
                <input ref={emailRef} type="email" name="email" id="" />
                <br />
                <input ref={phoneRef} type="tel" name="phone" id="" />
                <br />
                <button>Submit</button>
            </form>
        </div>
        </div>
    );
};

export default RefForm;