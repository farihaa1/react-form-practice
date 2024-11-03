

const SimpleForm = () => {
    const handleOnSubmit = e =>{
        e.preventDefault();
        console.log('form submitted')
    }
    return (
        <div onSubmit={handleOnSubmit}>
            <form>
                <input type="text" />
                <br />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default SimpleForm;