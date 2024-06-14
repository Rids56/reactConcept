import React, { useReducer } from 'react'
import ContactList from './ContactList';
import Chat from './Chat';
import './contactlist.css'
import { initialState, msgReducer } from './msgReducer';

const contacts = [
  { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
  { id: 1, name: 'Alice', email: 'alice@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' },
];

function Message() {
  const [state, dispatch] = useReducer(msgReducer, initialState);
  const msg = state?.message;
  const contact = contacts?.find((e) => e.id === state?.selectedId);

  return (
    <div className='container'>
      <ContactList
        contacts={contacts}
        selectedId={state.selectedId}
        dispatch={dispatch}
      />

      <Chat
        key={contact.id}
        contact={contact}
        message={msg}
        dispatch={dispatch}
      />
    </div>
  )
}

export default Message;