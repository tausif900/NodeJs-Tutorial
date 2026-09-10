import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData(e.target);

      const response = await axios.post(
        "http://localhost:3000/upload-post",
        formData,
      );
      console.log(response);
      alert(response.data.message);
      navigate("/posts");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="create-post-section">
        <h1>CreatePost</h1>
        <form onSubmit={handleSubmit} className="form-section">
          <input type="file" name="image" accept="image/*" />
          <input
            type="text"
            name="caption"
            placeholder="Enter caption here"
            required
          />
          <button type="submit">Submit</button>
        </form>
      </section>
    </>
  );
};

export default CreatePost;
