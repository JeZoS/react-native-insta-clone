initialState = {
  posts: [],
  userPosts: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_POSTS":
      return {
        posts: action.posts,
        userPosts: action.userPosts,
      };
    default:
      return state;
  }
};
