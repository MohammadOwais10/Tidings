import React, { useState } from "react";
import "./PostNewsPage.css";
import axios from "axios";

const PostNewsPage = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  const categories = [
    "Business",
    "Technology",
    "Sports",
    "Entertainment",
    "Health",
    "Science ",
    "General",
  ];

  const createPostSubmitHandler = async (e) => {
    e.preventDefault();

    const myForm = new FormData();
    myForm.set("name", name);
    myForm.set("title", title);
    myForm.set("description", description);
    myForm.set("category", category);
    myForm.set("images", images);

    const response = await axios.post(
      "https://newsapi.org/v2/articles",
      myForm
    );
    if (response.status === 201) {
      console.log("Successful Post");
    } else {
      console.log("Try again");
    }
  };

  const createPostImagesChange = (e) => {
    const files = Array.from(e.target.files);
    setImages([]);
    setImagesPreview([]);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  return (
    <>
      <div className="post">
        <div className="postContainer">
          <form
            className="createPostForm"
            encType="multipart/form-data"
            onSubmit={createPostSubmitHandler}
          >
            <h1>Create Post</h1>

            <div>
              <i class="fas fa-user"></i>
              <input
                type="text"
                placeholder="Author Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div>
              <i class="fas fa-stream"></i>

              <input
                type="text"
                placeholder="Title"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div>
              <i class="fas fa-asterisk"></i>
              <textarea
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                cols="30"
                rows="1"
              ></textarea>
            </div>

            <div>
              <i class="fas fa-list"></i>
              <select onChange={(e) => setCategory(e.target.value)}>
                <option value="">Choose Category</option>
                {categories.map((cate) => (
                  <option key={cate} value={cate}>
                    {cate}
                  </option>
                ))}
              </select>
            </div>

            <div id="createPostFormFile">
              <input
                type="file"
                name="avatar"
                accept="image/*"
                onChange={createPostImagesChange}
                multiple
              />
            </div>

            <div id="createPostFormImage">
              {imagesPreview.map((image, index) => (
                <img key={index} src={image} alt="Product Preview" />
              ))}
            </div>

            <button id="createPostBtn" type="submit">
              Post News
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PostNewsPage;
