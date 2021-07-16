
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
            dialogsData: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Victor'},
            {id: 6, name: 'Valera'},

        ],
            messageData: [
            {id: 1, name: 'Hi'},
            {id: 2, name: 'How is your IT-kamasutra?'},
            {id: 3, name: 'Bazuka!'},
            {id: 4, name: 'Yo!'},
            {id: 5, name: 'Kabzda!'},
            {id: 6, name: 'Kotejka'},

        ],
    };

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {...state,
                messageData: [...state.messageData, {id:7, name: body}],
            };
            //stateCopy.messageData.push({id:7, name: body});
        default:
            return state;
    }
}
export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })


export default dialogsReducer;