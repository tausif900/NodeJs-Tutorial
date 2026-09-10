import React, { useEffect, useState } from "react";
import axios from "axios";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/get-posts");
      console.log(response.data.posts);
      setPosts(response.data.posts);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <section className="feed-section">
        {posts.length > 0 ? (
          posts.map((p) => {
            return (
              <div className="row">
                <div className="card col-lg-4" style={{ width: " 18rem" }}>
                  <img src={p.image} class="card-img-top pt-2" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">{p.caption}</h5>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div>
            <h1>No Posts Available</h1>
          </div>
        )}
      </section>
    </>
  );
};

export default Feed;
