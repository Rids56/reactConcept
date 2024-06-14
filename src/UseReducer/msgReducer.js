export const initialState = {
    selectedId: 0,
    message: 'Hello',
}

export function msgReducer(state, action) {
    switch (action.type) {
        case 'change_selectionId': {
            return {
                ...state,
                selectedId: action.contactId,
                message: '',
            };
        }
        case 'edit_msg': {
            return {
                ...state,
                message: action.message,
            }
        }
        default: {
            throw Error('Unknown' + action.type)
        }
    }
}