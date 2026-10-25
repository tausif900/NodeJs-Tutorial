import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const AddFood = () => {
  const [videoName, setVideoName] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const addFoodItem = async (data) => {
    try {
      const formData = new FormData();
      formData.append("name", data.foodName);
      formData.append("description", data.description);
      formData.append("video", data.video[0]);

      const response = await axios.post(
        "http://localhost:3000/api/food/add-food-items",
        formData,
        {
          withCredentials: true,
        },
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="container-fluid min-vh-100 bg-light py-4 py-lg-5">
      <nav className="container d-flex justify-content-between align-items-center mb-5">
        <Link to={"/"} className="text-decoration-none fw-bold fs-4 text-dark">
          Bite<span className="text-warning">Buddy</span>
        </Link>
        <span className="badge rounded-pill text-bg-white border text-secondary px-3 py-2">
          Food Partner Studio
        </span>
      </nav>

      <div className="container">
        <div className="row justify-content-center align-items-center g-5">
          <section className="col-lg-5">
            <span className="badge rounded-pill text-bg-warning-subtle text-warning-emphasis px-3 py-2 mb-3">
              YOUR MENU, YOUR MOMENT
            </span>
            <h1 className="display-4 fw-bold text-dark mb-3">
              Make them crave{" "}
              <span className="text-warning">the first bite.</span>
            </h1>
            <p className="lead text-secondary mb-4">
              Share the dishes you’re proud of. A quick video and a few words
              are all it takes to bring your kitchen to life.
            </p>

            <div className="card border-0 shadow-sm rounded-4 mb-3">
              <div className="card-body d-flex gap-3 p-4">
                <div className="fs-3 text-warning">✳</div>
                <div>
                  <h2 className="h6 fw-bold">Made fresh, seen by more.</h2>
                  <p className="text-secondary small mb-0">
                    Your food story helps hungry people find their next
                    favorite.
                  </p>
                </div>
              </div>
            </div>

            <div className="row g-3">
              <div className="col-sm-6">
                <div className="card border-0 shadow-sm rounded-4 h-100">
                  <div className="card-body p-3">
                    <div className="text-success fs-4 mb-2">◉</div>
                    <h2 className="h6 fw-bold">Show the sizzle</h2>
                    <p className="small text-secondary mb-0">
                      Short videos stop the scroll.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="card border-0 shadow-sm rounded-4 h-100">
                  <div className="card-body p-3">
                    <div className="text-danger fs-4 mb-2">♡</div>
                    <h2 className="h6 fw-bold">Share your signature</h2>
                    <p className="small text-secondary mb-0">
                      Put your best dish forward.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="col-lg-6 col-xl-5">
            <div className="card border-0 shadow-lg rounded-4">
              <div className="card-body p-4 p-md-5">
                <div className="d-flex justify-content-between align-items-start mb-4">
                  <div>
                    <div className="small fw-bold text-warning text-uppercase mb-2">
                      New menu post
                    </div>
                    <h2 className="h3 fw-bold mb-1">Create a food post</h2>
                    <p className="text-secondary small mb-0">
                      Tell your story. Make it delicious.
                    </p>
                  </div>
                  <span className="badge rounded-circle text-bg-warning-subtle text-warning fs-5 p-3">
                    ✦
                  </span>
                </div>

                <form onSubmit={handleSubmit(addFoodItem)}>
                  <div className="mb-4">
                    <label
                      htmlFor="foodName"
                      className="form-label fw-semibold"
                    >
                      What’s cooking? <span className="text-danger">*</span>
                    </label>
                    <input
                      id="foodName"
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="e.g. Grandma’s Sunday lasagna"
                      {...register("foodName")}
                    />
                    <div className="form-text">
                      Give your dish a name people will remember.
                    </div>
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="foodDescription"
                      className="form-label fw-semibold"
                    >
                      A little about this dish
                    </label>
                    <textarea
                      id="foodDescription"
                      className="form-control"
                      rows="4"
                      placeholder="What makes it special? Ingredients, a family story, or that perfect finishing touch…"
                      {...register("description")}
                    />
                    <div className="form-text">
                      Keep it warm, short, and full of flavor.
                    </div>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="video" className="form-label fw-semibold">
                      Show us the good stuff{" "}
                      <span className="text-danger">*</span>
                    </label>
                    <label
                      htmlFor="video"
                      className="d-flex flex-column align-items-center justify-content-center text-center border border-2 border-dashed rounded-4 p-4 p-md-5 bg-light"
                      style={{
                        cursor: "pointer",
                        transition: "all 180ms ease",
                      }}
                    >
                      <span
                        className="d-flex align-items-center justify-content-center rounded-circle bg-warning-subtle text-warning-emphasis mb-3"
                        style={{ width: 56, height: 56, fontSize: 25 }}
                        aria-hidden="true"
                      >
                        {videoName ? "✓" : "↑"}
                      </span>
                      <span className="fw-semibold text-dark">
                        {videoName
                          ? "Video ready to upload"
                          : "Choose a food video"}
                      </span>
                      <span className="small text-secondary mt-1">
                        {videoName || "Click to browse your files"}
                      </span>
                      <span className="small text-secondary mt-2">
                        MP4, MOV or WebM · Keep it short and appetizing
                      </span>
                      <input
                        id="video"
                        className="visually-hidden"
                        type="file"
                        accept="video/*"
                        onChange={(e) => {
                          setVideoName(e.target.files?.[0]?.name ?? "");
                        }}
                        aria-describedby="foodVideoHelp"
                      />
                    </label>
                    <div id="foodVideoHelp" className="form-text mt-2">
                      Add a clip that shows your dish at its best.
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-warning btn-lg w-100 fw-semibold text-white"
                  >
                    Publish food Item <span className="ms-2">↗</span>
                  </button>
                  <p className="small text-secondary text-center mt-3 mb-0">
                    ✦ Made with care, served to the neighborhood.
                  </p>
                </form>
              </div>
            </div>
            <p className="small text-secondary text-center mt-3 mb-0">
              Your post will be shared with the BiteBuddy community.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default AddFood;
