import { useState } from "react";

const StateFullForm = () => {
  const [email, setEmail] = useState(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState(null);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    console.log(name);
    console.log(phone);
    
  };
  const handleOnEmail = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  const handleOnName = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };
  const handleOnPhone = (e) => {
    console.log(e.target.value);
    setPhone(e.target.value);
  };

  return (
    <div>
        <h1>State using form</h1>
      <div onSubmit={handleOnSubmit}>
        <form>
          <input onChange={handleOnName} type="text" name="name" />
          <br />
          <input onChange={handleOnEmail} type="email" name="email" id="" />
          <br />
          <input onChange={handleOnPhone} type="tel" name="phone" id="" />
          <br />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default StateFullForm;
