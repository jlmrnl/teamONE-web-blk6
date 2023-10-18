import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Logo from "/LogoLost2.png";

function ContentPage() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({
    user_id: 1, // Replace with the actual user ID
    category: "",
    description: "",
    image_url: null,
  });

  const [selectedPost, setSelectedPost] = useState(null);
  const [commentInputs, setCommentInputs] = useState({}); // Separate comment input state

  const [currentUser, setCurrentUser] = useState(null);

  const fetchCurrentUser = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get("http://localhost:3000/user/current", {
        headers: {
          Authorization: ` ${token}`,
        },
      });
      console.log(response.data);

      if (response.status === 200) {
        setCurrentUser(response.data);
      } else {
        console.error("Error fetching current user");
      }
    } catch (error) {
      console.error("Error fetching current user:", error);
    }
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost({
      ...newPost,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setNewPost({
      ...newPost,
      image_url: file,
    });
  };

  const handlePostSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("user_id", newPost.user_id);
      formData.append("category", newPost.category);
      formData.append("description", newPost.description);
      formData.append("image_url", newPost.image_url);

      const response = await axios.post(
        "http://localhost:3000/posts",
        formData
      );

      if (response.status === 200) {
        setPosts([response.data, ...posts]);
        setNewPost({
          user_id: 1,
          category: "",
          description: "",
          image_url: null,
        });
      } else {
        console.error("Post creation failed");
      }
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  const handleToggleDelete = (post) => {
    setSelectedPost(post === selectedPost ? null : post);
  };

  const handleDeleteClick = (postId) => {
    try {
      axios
        .delete(`http://localhost:3000/posts/${postId}`)
        .then(() => {
          setPosts(posts.filter((post) => post.post_id !== postId));
        })
        .catch((error) => {
          console.error("Error deleting post:", error);
        });
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const addCommentToPost = async (postId, comment) => {
    try {
      const response = await axios.post(
        `http://localhost:3000/comments/post/${postId}/user/${newPost.user_id}`,
        { Comment: comment }
      );

      if (response.status === 200) {
        const updatedPosts = posts.map((post) => {
          if (post.post_id === postId) {
            const comments = post.comments
              ? [...post.comments, response.data]
              : [response.data];
            return { ...post, comments };
          }
          return post;
        });

        setPosts(updatedPosts);
        setCommentInputs({
          ...commentInputs,
          [postId]: "",
        });
      } else {
        console.error("Comment creation failed");
      }
    } catch (error) {
      console.error("Error creating comment:", error);
    }
  };

  const handleDeleteComment = async (postId, commentId) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/comments/${commentId}`
      );

      if (response.status === 200) {
        const updatedPosts = posts.map((post) => {
          if (post.post_id === postId) {
            const comments = post.comments.filter(
              (comment) => comment.CommentID !== commentId
            );
            return { ...post, comments };
          }
          return post;
        });

        setPosts(updatedPosts);
      } else {
        console.error("Error deleting comment");
      }
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  useEffect(() => {
    const fetchPostsAndComments = async () => {
      try {
        const response = await axios.get("http://localhost:3000/posts");
        console.log(response.data);

        if (response.status === 200) {
          const postsWithComments = await Promise.all(
            response.data.map(async (post) => {
              const commentsResponse = await axios.get(
                `http://localhost:3000/comments/post/${post.post_id}`
              );

              if (commentsResponse.status === 200) {
                post.comments = commentsResponse.data;
              } else {
                post.comments = [];
                console.error(
                  `Error fetching comments for post ${post.post_id}`
                );
              }

              return post;
            })
          );

          setPosts(postsWithComments);
        } else {
          console.error("Error fetching posts");
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPostsAndComments();
  }, []);

  return (
    <div className="bg-violet-100 min-h-screen font-sans">
      <header className="bg-purple text-white p-4 flex justify-between items-center">
        <div className="pl-4">
          <img
            src={Logo}
            alt="Your Logo"
            className="w-20 h-20 object-contain"
          />
        </div>
        <div className="header-mid">
          <h1 className="text-2xl font-bold">NEWS FEED</h1>
        </div>
        <div className="flex flex-row">
          {currentUser && (
            <div className="text-center mr-4 text-md">
              <p>WELCOME, {currentUser.name}</p>
            </div>
          )}
          <Link
            to="/"
            onClick={handleLogout}
            className="text-red-500 hover:text-red-700 cursor-pointer pr-4"
          >
            Logout
          </Link>
        </div>
      </header>
      <main className="max-w-3xl mx-auto mt-4">
        <div className="bg-white p-4 rounded shadow-lg border mb-4">
          <h2 className="text-2xl font-semibold mb-4">Create a New Post</h2>
          <div className="mb-4">
            <input
              type="text"
              name="category"
              value={newPost.category}
              onChange={handleInputChange}
              placeholder="Category"
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="description"
              value={newPost.description}
              onChange={handleInputChange}
              placeholder="Description"
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="file"
              name="image_url"
              onChange={handleFileChange}
              className="w-full p-2"
            />
          </div>
          <button
            onClick={handlePostSubmit}
            className="bg-violet-500 text-white px-4 py-2 rounded hover:bg-violet-600"
          >
            Post
          </button>
        </div>
        <div className="bg-violet-100 p-4 rounded-2xl">
          <h2 className="text-2xl font-semibold mb-4">Recent Posts</h2>
          {posts.map((post) => (
            <div
              key={post.post_id}
              className="bg-white border p-4 mb-4 rounded relative"
            >
              <p className="text-xl font-semibold">{post.category}</p>
              <p className=""> {post.description}</p>
              {post.image_url && (
                <div className="mt-2 text-center rounded-xl">
                  <img
                    src={`http://localhost:3000/uploads/${post.image_url}`}
                    alt="Post"
                    className="mx-auto w-96 h-96" // Center the image horizontally
                  />
                </div>
              )}
              <div className="absolute top-0 right-0 p-2 text-violet-600 hover:text-red-600">
                <button
                  className="text-violet-600 hover:text-violet-800"
                  onClick={() => handleToggleDelete(post)}
                >
                  &#8230;
                </button>
                {selectedPost === post && (
                  <button
                    className="text-red-600 hover:text-red-800 ml-2"
                    onClick={() => handleDeleteClick(post.post_id)}
                  >
                    Delete
                  </button>
                )}
              </div>
              <div className="mb-2">
                <input
                  type="text"
                  name="newComment"
                  value={commentInputs[post.post_id] || ""}
                  onChange={(e) => {
                    setCommentInputs({
                      ...commentInputs,
                      [post.post_id]: e.target.value,
                    });
                  }}
                  placeholder="Add a comment..."
                  className="w-full p-2 border rounded"
                />
              </div>
              <button
                onClick={() =>
                  addCommentToPost(post.post_id, commentInputs[post.post_id])
                }
                className="bg-violet-500 text-white px-4 py-2 rounded hover:bg-violet-600"
              >
                Add Comment
              </button>
              <div className="mt-2">
                {post.comments &&
                  post.comments.map((comment) => (
                    <div
                      key={comment.CommentID}
                      className="p-2 rounded mt-2 flex items-center"
                    >
                      <div className="flex-grow flex flex-row">
                        <p className="mr-2">{currentUser.name}:</p>
                        <p className="">{comment.Comment}</p>
                      </div>
                      <button
                        onClick={() =>
                          handleDeleteComment(post.post_id, comment.CommentID)
                        }
                        className="text-red-600 hover:text-red-800 ml-2"
                      >
                        ...
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default ContentPage;
