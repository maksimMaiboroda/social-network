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
    }
  },

  getState() {
    return this._state;
  },

  _callSubscriber() {
    console.log("State changed");
  },

  addPost() {
    let newPost = {
      id: 3,
      message: this._state.profilePage.newPostText,
      likesCount: 0
    };

    this._state.profilePage.oldPostData.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },

  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },

  addMessage() {
    let newMessage = {
      messageText: this._state.dialogsPage.newMessageText,
      id: 6
    };

    this._state.dialogsPage.oldMessageData.push(newMessage);
    this._state.dialogsPage.newMessageText = "";
    this._callSubscriber(this._state);
  },

  updateNewMessageText(newText) {
    this._state.dialogsPage.newMessageText = newText;
    this._callSubscriber(this._state);
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  }
};


export default store;
