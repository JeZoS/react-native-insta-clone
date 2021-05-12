export const fetchPosts = () => {
  return async (dispatch, getState) => {
    const email = getState().auth.email;
    const response = await fetch(
      "https://insta-clone-522aa-default-rtdb.firebaseio.com/posts.json"
    );
    const resData = await response.json();
    var newData = [];
    var userData = [];
    for (const key in resData) {
      var dta = {
        id: key,
        profilePic: resData[key].profilePic,
        caption: resData[key].caption,
        postImage: resData[key].postImage,
        likes: resData[key].likes,
        comment: resData[key].comment,
        userName: resData[key].userName,
      };
      newData.push(dta);
      if (resData[key].userName === email) {
        userData.push(dta);
      }
    }
    dispatch({
      type: "SET_POSTS",
      posts: newData.reverse(),
      userPosts: userData.reverse(),
    });
  };
};

export const uploadPost = (url, description, email) => {
  return async (dispatch, getState) => {
    const email = getState().auth.email;
    const response = await fetch(
      "https://insta-clone-522aa-default-rtdb.firebaseio.com/posts.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          //   id: new Date().toString(),
          profilePic:
            "https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png",
          caption: description,
          postImage: url,
          likes: [`${email}`],
          comment: ["1"],
          userName: email,
        }),
      }
    );
  };
};

export const getSingle = (id) => {
  return async (dispatch) => {
    const response = await fetch(
      `https://insta-clone-522aa-default-rtdb.firebaseio.com/posts/${id}.json`
    );
    const resData = await response.json();
    dispatch({
      type: "SET_SINGLE",
      payload: resData,
    });
  };
};

export const deleteThisPost = (id) => {
  return async (dispatch) => {
    const response = await fetch(
      `https://insta-clone-522aa-default-rtdb.firebaseio.com/posts/${id}.json`,
      {
        method: "DELETE",
      }
    );
    const resData = await response.json();
  };
};

export const addComment = (
  id,
  email,
  comment,
  allComments
) => {
  return async (dispatch) => {
    console.log(id, email, comment, allComments);
    const response = await fetch(
      `https://insta-clone-522aa-default-rtdb.firebaseio.com/posts/${id}.json`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          comment: [
            ...allComments,
            {
              by: email,
              text: comment,
              id: new Date().toString(),
            },
          ],
        }),
      }
    );
    const resData = await response.json();
    console.log(resData);
  };
};
