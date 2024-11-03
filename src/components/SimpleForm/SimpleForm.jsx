

const SimpleForm = () => {
    const handleOnSubmit = e =>{
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.phone.value);
        console.log('form submitted')
    }
    return (
       <div>
        <h1>Simple Form</h1>
         <div onSubmit={handleOnSubmit}>
            <form>
                <input type="text" name="name" />
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

export default SimpleForm;