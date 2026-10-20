import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const userLogin = (data) => {
    console.log(data);
  };

  return (
    <>
      {" "}
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

                  <div className="mt-5 mb-4">
                    <span
                      className="badge rounded-pill px-3 py-2 mb-3"
                      style={{
                        background: "#DCFCE7",
                        color: "#166534",
                      }}
                    >
                      <i className="bi bi-emoji-smile me-1"></i>
                      WE MISSED YOU!
                    </span>

                    <h2 className="fw-bold" style={{ color: "#183D2B" }}>
                      Welcome back!
                    </h2>

                    <p className="text-secondary small">
                      Sign in to discover your next favourite meal.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit(userLogin)}>
                    <div className="mb-4">
                      <label className="form-label fw-semibold small">
                        Email Address
                      </label>

                      <div className="input-group">
                        <span className="input-group-text bg-white border-end-0">
                          <i className="bi bi-envelope text-secondary"></i>
                        </span>

                        <input
                          type="email"
                          className="form-control border-start-0 py-3"
                          placeholder="Enter your email address"
                          {...register("email", {
                            required: "email is required",
                          })}
                        />
                        <span className="text-danger">
                          {errors.email && errors.email.message}
                        </span>
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
                          className="form-control border-start-0 py-3"
                          placeholder="Enter your password"
                          {...register("password", {
                            required: "password is required",
                          })} 
                        />
                        <span className="text-danger">
                          {errors.password && errors.password.message}
                        </span>
                      </div>
                    </div>

                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="remember"
                        />
                        <label
                          className="form-check-label small text-secondary"
                          htmlFor="remember"
                        >
                          Remember me
                        </label>
                      </div>

                      <a
                        to="/forgot-password"
                        className="small fw-semibold text-decoration-none"
                        style={{ color: "#F97316" }}
                      >
                        Forgot password?
                      </a>
                    </div>

                    <button
                      type="submit"
                      className="btn w-100 text-white fw-semibold py-3"
                      style={{
                        background: "#F97316",
                        borderRadius: "12px",
                      }}
                    >
                      Sign In
                      <i className="bi bi-arrow-right ms-2"></i>
                    </button>

                    <div className="d-flex align-items-center my-4">
                      <hr className="flex-grow-1" />
                      <span className="px-3 text-secondary small">
                        OR CONTINUE WITH
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

                  <p className="text-center text-secondary small mt-5 mb-0">
                    New to BiteBuddy?{" "}
                    <Link
                      to="/user-registration"
                      className="fw-bold text-decoration-none"
                      style={{ color: "#246B45" }}
                    >
                      Create an account
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-5 d-none d-lg-block">
              <div
                className="position-relative ms-4 overflow-hidden shadow"
                style={{
                  height: "650px",
                  borderRadius: "24px",
                  background:
                    "linear-gradient(180deg, transparent 25%, rgba(13,40,26,.93) 100%), url('https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1000&q=85') center/cover",
                }}
              >
                <div className="position-absolute top-0 start-0 p-4">
                  <span
                    className="badge rounded-pill px-3 py-2"
                    style={{
                      background: "#FFFFFF",
                      color: "#246B45",
                    }}
                  >
                    <i className="bi bi-star-fill me-1 text-warning"></i>
                    YOUR FOOD, YOUR WAY
                  </span>
                </div>

                <div className="position-absolute bottom-0 p-5 text-white">
                  <h1 className="fw-bold display-5">
                    Your cravings.
                    <br />
                    Our mission.
                  </h1>

                  <p className="text-white-50">
                    From comfort food to exciting new flavours, something
                    delicious is always waiting for you.
                  </p>

                  <div className="d-flex align-items-center gap-3 mt-4">
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center"
                      style={{
                        width: "48px",
                        height: "48px",
                        background: "#F97316",
                      }}
                    >
                      <i className="bi bi-heart-fill fs-5"></i>
                    </div>

                    <div>
                      <div className="fw-semibold">
                        Made fresh, delivered happy.
                      </div>
                      <div className="small text-white-50">
                        Your next meal is calling!
                      </div>
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

export default UserLogin;
