const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

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

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      return {
        ...state,
        newMessageText: "",
        oldMessageData: [
          ...state.oldMessageData,
          {
            messageText: state.newMessageText,
            id: 6
          }
        ]
      };
    }
    case UPDATE_NEW_MESSAGE_TEXT: {
      return {
        ...state,
        newMessageText: action.newText
      };
    }
    default:
      return state;
  }
};

export const addMessageActionCreator = () => ({ type: "ADD-MESSAGE" });

export const updateNewMessageTextActionCreator = text => ({
  type: "UPDATE-NEW-MESSAGE-TEXT",
  newText: text
});

export default dialogsReducer;
