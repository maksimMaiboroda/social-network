import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
  _state: {
    profilePage: {
      oldPostData: [
        { id: 1, message: "Hi, how are you?", likesCount: 20 },
        { id: 2, message: "It's my first post", likesCount: 11 }
      ],
      newPostText: ""
    },

    dialogsPage: {
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
    },

    sidebar: {}
  },
  _callSubscriber() {
    console.log("State changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  }
};

export default store;
