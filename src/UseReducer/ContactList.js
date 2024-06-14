import React from 'react'

function ContactList(props) {
    const { contacts, selectedId, dispatch } = props;
    
    return (
        <section className="contactlist">
            <ul>
                {contacts?.map((e) => (
                    <li
                        key={e.id}
                        onClick={() => {
                            dispatch({
                                type: 'change_selectionId',
                                contactId: e.id,
                            })
                        }}>
                        {selectedId === e.id ? <b>{e.name}</b> : e.name}
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default ContactList