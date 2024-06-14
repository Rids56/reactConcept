import React from 'react'

function Chat(props) {
    const { contact, message, dispatch } = props;

    return (
        <section className='chat'>
            <textarea
                rows="9" cols="30"
                value={message}
                placeholder={'Chat to ' + contact?.name}
                onChange={((e) => {
                    dispatch({
                        type: 'edit_msg',
                        message: e.target.value,
                    })
                })}
            />
            <button className='sendBtn'>Send To {contact?.name}</button>
        </section>
    )
}

export default Chat