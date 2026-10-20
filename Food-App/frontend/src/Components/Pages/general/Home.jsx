import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [foodItems, setFoodItems] = useState([]);

  const fetchFoodItems = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/food/get-food-items",
        { withCredentials: true },
      );
      setFoodItems(response.data.foodItems);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFoodItems();
  });

  return (
    <main
      className="bg-black"
      style={{
        height: "100dvh",
        overflowY: "auto",
        scrollSnapType: "y mandatory",
      }}
    >
      {foodItems.map((item) => {
        return (
          <article
            className="position-relative mx-auto overflow-hidden"
            style={{
              height: "100dvh",
              maxWidth: "520px",
              scrollSnapAlign: "start",
            }}
          >
            <video
              className="position-absolute top-0 start-0 w-100 h-100"
              style={{ objectFit: "cover" }}
              src={item.foodVideo}
              autoPlay
              muted
              loop
              playsInline
              aria-label="Food video"
            />

            <div
              className="position-absolute bottom-0 start-0 w-100 p-4 text-white"
              style={{
                background: "linear-gradient(transparent, rgba(0, 0, 0, 0.82))",
                paddingTop: "6rem",
              }}
            >
              <div className="d-flex align-items-center justify-content-between gap-3">
                <div>
                  <h2 className="h5 fw-bold mb-2">{item.foodName}</h2>
                  <p className="mb-0" style={{ maxWidth: "360px" }}>
                    {item.description}
                  </p>
                </div>
                <Link
                  to={`/food-partner/${item.foodPartner}`}
                  className="btn btn-light btn-sm fw-semibold flex-shrink-0"
                >
                  View partner
                </Link>
              </div>
            </div>
          </article>
        );
      })}
    </main>
  );
};

export default Home;
