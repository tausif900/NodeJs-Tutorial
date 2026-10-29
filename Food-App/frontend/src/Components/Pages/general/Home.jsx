import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [foodItems, setFoodItems] = useState([]);

  const fetchFoodItems = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/food/get-food-items",
        { withCredentials: true },
      );
      console.log(response.data);
      setFoodItems(response.data.foodItems);
    } catch (error) {
      console.log(error);
    }
  };

  const likeFoodItem = async (item) => {
    console.log(item);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/food/like-food-item",
        { foodItem: item._id },
        { withCredentials: true },
      );
      fetchFoodItems();
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  const saveFoodItem = async (item) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/food/save-food-item",
        { foodItem: item._id },
        { withCredentials: true },
      );
      fetchFoodItems();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFoodItems();
  }, []);

  return (
    <main
      className="bg-black"
      style={{
        height: "100dvh",
        overflowY: "auto",
        scrollSnapType: "y mandatory",
      }}
    >
      {foodItems.map((item, idx) => {
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
              key={item._id}
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
              className="position-absolute end-0 d-flex flex-column gap-3 p-4"
              style={{ bottom: "10rem", zIndex: 1 }}
            >
              <button
                type="button"
                className="border-0 bg-transparent text-white p-0"
                aria-label="Like"
                onClick={() => {
                  likeFoodItem(item);
                }}
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z" />
                </svg>
              </button>
              <small className="text-black">likes : {item.likesCount}</small>
              <button
                type="button"
                className="border-0 bg-transparent text-white p-0"
                aria-label="Save"
                onClick={() => {
                  saveFoodItem(item);
                }}
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M19 21l-7-5-7 5V3h14v18Z" />
                </svg>
              </button>
              <small className="text-black">Save : {item.saveCount}</small>
            </div>

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
                  onClick={() => navigate(`/food-partner/${item.foodPartner}`)}
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
