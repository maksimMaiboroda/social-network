import profileReducer, { addPostActionCreator, deletePost } from "./profileReducer";

let state = {
  oldPostData: [
    { id: 1, message: "Hi, how are you?", likesCount: 20 },
    { id: 2, message: "It's my first post", likesCount: 11 }
  ]
};

it("length of post should be incremented", () => {
  // 1. test data
  let action = addPostActionCreator("react-test");

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.oldPostData.length).toBe(3);
});

it("message of new post should be correct", () => {
  // 1. test data

  let action = addPostActionCreator("react-test");

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.oldPostData[2].message).toBe("react-test");
});

it("after deleting length of messages should be decrement", () => {
  // 1. test data

  let action = deletePost(1);

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.oldPostData.length).toBe(1);
});

it("after deleting length shouldn't be decrement if id is incorrect", () => {
  // 1. test data

  let action = deletePost(1000);

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.oldPostData.length).toBe(2);
});