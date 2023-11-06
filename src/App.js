import './App.css';
import { useEffect, useState } from 'react';
import Form from './Components/Form';
import Typing from './Components/Typing';
import { getDatabase, ref, push, set, onChildAdded } from "firebase/database";



function App() {
  const [name, setName] = useState('');
  const [chatsBox, setChatsBox] = useState([]);

  const db = getDatabase();
  const postChatsRef = ref(db, 'chatsBox');

  const setMessage = (msg) => {
    const newPostRef = push(postChatsRef);
    set(newPostRef, {
      name, massage: msg
    });
  }

  const upScroll=()=>{
     console.log('up-call');
    const refSection = document.getElementsByClassName('section')[0];
    if (refSection)
      refSection.scrollTop = refSection.scrollHeight;
  }

  useEffect(() => {
    onChildAdded(postChatsRef, (data) => {
      setChatsBox(
        chatsBox => [...chatsBox, { userName: data.val().name, massege: data.val().massage }]
        );
      }); 
  }, []);

  useEffect(() => {
    upScroll();
  }, [chatsBox])

  return (
    <>
      {name ? (null) :
        (<Form setName={setName} />)
      }
      {name ? (
        <div className='container'>
          <header className='header'>
            <h1>User:{name}</h1>
          </header>

          <section className='section'>
            {
              chatsBox.map((chat,i) => {
                return (
                  <div className={`chatBox ${chat.userName === name ? 'me' : ''}`}>
                    <p>
                      <strong>{chat.userName} :</strong>
                      <span> {chat.massege}</span>
                    </p>
                  </div>
                )
              })

            }

          </section>

          <footer className='footer'>
            <Typing setMessage={setMessage} />
          </footer>
        </div>
      ) : (null)}
    </>
  );
}

export default App;
