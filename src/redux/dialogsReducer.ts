import { InferActionsTypes } from "./reduxStore";

let initialState = {
  oldDialogsData: [
    { urlD: 1, userAva: "img", userName: "Viktor" },
    { urlD: 2, userAva: "img", userName: "Andrei" },
    { urlD: 3, userAva: "img", userName: "Sveta" },
    { urlD: 4, userAva: "img", userName: "Vika" },
    { urlD: 5, userAva: "img", userName: "Dima" },
    { urlD: 6, userAva: "img", userName: "Valera" }
  ],

  oldMessageData: [
    {
      messageText:
        "0 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, autem?",
      id: 1
    },
    {
      messageText:
        "1 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, autem?",
      id: 2
    },
    {
      messageText:
        "2 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, autem?",
      id: 3
    },
    {
      messageText:
        "3 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, autem?",
      id: 4
    },
    {
      messageText:
        "4 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, autem?",
      id: 5
    }
  ],

  newMessageText: ""
};

type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case 'ADD_MESSAGE': {
      return {
        ...state,
        oldMessageData: [
          ...state.oldMessageData,
          {
            messageText: action.newMessageText,
            id: 6
          }
        ]
      };
    }

    default:
      return state;
  }
};

type ActionsTypes = InferActionsTypes<typeof actions>;

export const actions = {
    addMessageActionCreator: (text: string) => ({
        type: 'ADD_MESSAGE',
        newMessageText: text
    } as const)
}



export default dialogsReducer;
