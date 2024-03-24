import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "state";
import PostWidget from "./PostWidget";
import axios from "axios"

/**
 * A widget component that displays posts.
 */
const PostsWidget = ({ userID, isProfile = false }) => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);
  const token = useSelector((state) => state.token);

  const getPosts = async () => {

    try{

      // const response = await axios.get("http://localhost:3001/posts", {
      //   headers: { Authorization: `Bearer ${token}` },
      // });

      // const {data} = await axios.get("http://localhost:3001/posts", {
      // const {data} = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts`, {
      const {data} = await axios.get(`${process.env.REACT_APP_VERCEL_URL}/posts`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      // console.log("Response in getPosts in PostsWidget.jsx: ", data);
      // const data = await response.json();
      dispatch(setPosts({ posts: data }));
    }
    catch(err){
      console.log(err)
    }

    // const response = await fetch("http://localhost:3001/posts", {
    //   method: "GET",
    //   headers: { Authorization: `Bearer ${token}` },
    // });
    // const data = await response.json();
    // console.log("Response in getPosts in PostsWidget.jsx: ", data);
    // dispatch(setPosts({ posts: data }));
  };

  const getUserPosts = async () => {

    try{
      // const response = await axios.get(`http://localhost:3001/posts/${userID}/posts`, {
      //   headers: { Authorization: `Bearer ${token}` },
      // });
      // const {data} = await axios.get(`http://localhost:3001/posts/${userID}/posts`, {
      // const {data} = await axios.get(`${process.env.REACT_APP_BASE_URL}/posts/${userID}/posts`, {
      const {data} = await axios.get(`${process.env.REACT_APP_VERCEL_URL}/posts/${userID}/posts`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      // const data = await response.json();
      dispatch(setPosts({ posts: data }));
    }
    catch(err){
      console.log(err)
    }

    // const response = await fetch(
    //   `http://localhost:3001/posts/${userID}/posts`,
    //   {
    //     method: "GET",
    //     headers: { Authorization: `Bearer ${token}` },
    //   }
    // );
    // const data = await response.json();
    // dispatch(setPosts({ posts: data }));
  };

  useEffect(() => {
    if (isProfile) {
      getUserPosts();
    } else {
      getPosts();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {posts.map(
        ({
          _id,
          userID,
          firstName,
          lastName,
          description,
          location,
          picturePath,
          userPicturePath,
          likes,
          comments,
        }) => (
          <PostWidget
            key={_id}
            postID={_id}
            postUserID={userID}
            name={`${firstName} ${lastName}`}
            description={description}
            location={location}
            picturePath={picturePath}
            userPicturePath={userPicturePath}
            likes={likes}
            comments={comments}
          />
        )
      )}
    </>
  );
};

export default PostsWidget;
