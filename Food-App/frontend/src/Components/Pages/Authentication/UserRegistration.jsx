import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

const UserRegistration = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const password = watch("password");

  const addUser = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/user-register",
        data,
        { withCredentials: true },
      );
      console.log(response.data);
      alert("User Registered Successfully!!!");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        className="container-fluid min-vh-100 d-flex align-items-center py-5"
        style={{
          background: "#FFF7ED",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div className="container">
          <div className="row justify-content-center align-items-center g-0">
            <div className="col-lg-5 col-md-8">
              <div
                className="card border-0 shadow-lg overflow-hidden"
                style={{ borderRadius: "24px" }}
              >
                <div className="card-body p-4 p-md-5">
                  <Link
                    to="#"
                    className="text-decoration-none fw-bold fs-3"
                    style={{ color: "#246B45" }}
                  >
                    <i className="bi bi-egg-fried me-2"></i>
                    Bite<span style={{ color: "#F97316" }}>Buddy</span>
                  </Link>

                  <div className="mt-4 mb-4">
                    <span
                      className="badge rounded-pill px-3 py-2 mb-3"
                      style={{
                        background: "#DCFCE7",
                        color: "#166534",
                      }}
                    >
                      <i className="bi bi-stars me-1"></i>
                      JOIN OUR FOOD COMMUNITY
                    </span>

                    <h2 className="fw-bold" style={{ color: "#183D2B" }}>
                      Create your account
                    </h2>

                    <p className="text-secondary small">
                      Delicious food and happy moments start here.
                    </p>
                    <span>
                      <Link
                        to={"/food-partner-registration"}
                        className="text-decoration-none  text-muted small fw-bold"
                      >
                        Continue as Food Partner
                      </Link>
                    </span>
                  </div>

                  <form onSubmit={handleSubmit(addUser)}>
                    <div className="mb-3">
                      <label className="form-label fw-semibold small">
                        Full Name
                      </label>
                      <div className="input-group">
                        <span className="input-group-text bg-white border-end-0">
                          <i className="bi bi-person text-secondary"></i>
                        </span>
                        <input
                          type="text"
                          className="form-control border-start-0 py-2"
                          placeholder="Enter your full name"
                          {...register("fullName")}
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-semibold small">
                        Email Address
                      </label>
                      <div className="input-group">
                        <span className="input-group-text bg-white border-end-0">
                          <i className="bi bi-envelope text-secondary"></i>
                        </span>
                        <input
                          type="email"
                          className="form-control border-start-0 py-2"
                          placeholder="you@example.com"
                          {...register("email")}
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-semibold small">
                        Password
                      </label>
                      <div className="input-group">
                        <span className="input-group-text bg-white border-end-0">
                          <i className="bi bi-lock text-secondary"></i>
                        </span>
                        <input
                          type="password"
                          className="form-control border-start-0 py-2"
                          placeholder="Create a password"
                          {...register("password")}
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-semibold small">
                        Confirm Password
                      </label>
                      <div className="input-group">
                        <span className="input-group-text bg-white border-end-0">
                          <i className="bi bi-shield-check text-secondary"></i>
                        </span>
                        <input
                          type="password"
                          className="form-control border-start-0 py-2"
                          placeholder="Re-enter your password"
                          {...register("confirmPassword", {
                            required: "Please confirm your password",
                            validate: (value) => {
                              value === password || "Passwords do not match";
                            },
                          })}
                        />
                      </div>
                      {errors.confirmPassword && (
                        <small className="text-danger">
                          {errors.confirmPassword.message}
                        </small>
                      )}
                    </div>

                    <div className="form-check mb-4">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="terms"
                      />
                      <label
                        className="form-check-label small text-secondary"
                        htmlFor="terms"
                      >
                        I agree to the{" "}
                        <Link to="#" style={{ color: "#246B45" }}>
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link to="#" style={{ color: "#246B45" }}>
                          Privacy Policy
                        </Link>
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="btn w-100 text-white fw-semibold py-3"
                      style={{
                        background: "#F97316",
                        borderRadius: "12px",
                      }}
                    >
                      Create Account
                      <i className="bi bi-arrow-right ms-2"></i>
                    </button>

                    <div className="d-flex align-items-center my-4">
                      <hr className="flex-grow-1" />
                      <span className="px-3 text-secondary small">
                        OR SIGN UP WITH
                      </span>
                      <hr className="flex-grow-1" />
                    </div>

                    <button
                      type="button"
                      className="btn btn-outline-secondary w-100 py-2"
                      style={{ borderRadius: "12px" }}
                    >
                      <i className="bi bi-google me-2"></i>
                      Continue with Google
                    </button>
                  </form>

                  <p className="text-center text-secondary small mt-4 mb-0">
                    Already have an account?{" "}
                    <Link
                      to="/user-login"
                      className="fw-bold text-decoration-none"
                      style={{ color: "#246B45" }}
                    >
                      Log in
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-5 d-none d-lg-block">
              <div
                className="position-relative ms-4 overflow-hidden shadow"
                style={{
                  height: "690px",
                  borderRadius: "24px",
                  background:
                    "linear-gradient(180deg, transparent 30%, rgba(13,40,26,.92) 100%), url('https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=85') center/cover",
                }}
              >
                <div className="position-absolute bottom-0 p-5 text-white">
                  <span
                    className="badge rounded-pill px-3 py-2 mb-3"
                    style={{ background: "#F97316" }}
                  >
                    MADE WITH LOVE
                  </span>

                  <h1 className="fw-bold display-5">
                    Good food.
                    <br />
                    Great mood.
                  </h1>

                  <p className="text-white-50">
                    Discover delicious meals, explore new flavours and make
                    every meal a moment to remember.
                  </p>

                  <div className="d-flex gap-3 mt-4">
                    <div className="bg-white bg-opacity-10 rounded-4 p-3">
                      <i className="bi bi-bicycle fs-3"></i>
                      <div className="small mt-2">Quick delivery</div>
                    </div>

                    <div className="bg-white bg-opacity-10 rounded-4 p-3">
                      <i className="bi bi-heart fs-3"></i>
                      <div className="small mt-2">Made for you</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserRegistration;
