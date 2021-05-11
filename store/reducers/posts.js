initialState = {
  posts: [],
  userPosts: [],
  single: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_POSTS":
      return {
        ...state,
        posts: action.posts,
        userPosts: action.userPosts,
      };
    case "SET_SINGLE":
      return {
        ...state,
        single: action.payload,
      };
    default:
      return state;
  }
};
