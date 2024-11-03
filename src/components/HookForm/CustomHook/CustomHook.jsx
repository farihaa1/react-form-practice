import useInputState from "../CustomHook";

const CustomHook = () => {
  const [name, handleNameChange] = useInputState("rojoni");

  const handleOnSubmit = (e) => {
    console.log('form data', name)
    e.preventDefault();
  };
  return (
    <div>
      <h1>Custom hook using</h1>
      <div>
        <form onSubmit={handleOnSubmit}>
          <input value={name} onChange={handleNameChange} type="text" name="name" />
          <br />
          <input type="email" name="email" id="" />
          <br />
          <input type="tel" name="phone" id="" />
          <br />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CustomHook;
