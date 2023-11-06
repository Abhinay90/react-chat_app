import { useState } from "react";

const Form = ({ setName }) => {
    const [value, setValue] = useState('');
    const submit = () => {
        setName(value);
    }

    return (
        <div className="form-container">
            <form className="form" onSubmit={submit}>
                <header>
                    <h1>Login From</h1>
                </header>
                <div>
                    <input
                        type="text"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder="Enter User-Name"
                        autoFocus
                    />
                </div>
                {
                    value ? (<div>
                        <input type="submit" value='Start Chat' />
                    </div>) : (null)
                }

            </form>
        </div>
    );
}

export default Form;

