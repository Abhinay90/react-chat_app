import { useState } from "react";


const Typing = ({ setMessage }) => {

    const [msg, setMsg] = useState('');

    function handleOnClick() {
        if (msg) setMessage(msg);
        setMsg('');
    }


    return (

        <>
            <form action="#" onSubmit={handleOnClick}>
                <input type='text'
                    value={msg}
                    placeholder="Type a message"
                    onChange={(e) => setMsg(e.target.value)}
                    autoFocus
                />
                {
                    msg ? (
                        <button onClick={handleOnClick}>
                            <i class="fa-solid fa-paper-plane"></i>
                        </button>
                    ) : (null)//<i class="fa-solid fa-microphone"></i>
                }
            </form>
        </>
    );
}

export default Typing;