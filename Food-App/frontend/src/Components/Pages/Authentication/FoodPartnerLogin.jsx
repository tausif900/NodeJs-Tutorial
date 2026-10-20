import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const FoodPartnerLogin = () => {
  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const partnerLogin = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/food-partner-login",
        data,
        { withCredentials: true },
      );
      console.log(response.data);
      navigate("/add-food-items");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        className="container-fluid min-vh-100 d-flex align-items-center py-5"
        style={{
          background: "#F4F2FF",
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
                  <a
                    href="#"
                    className="text-decoration-none fw-bold fs-3"
                    style={{ color: "#39246B" }}
                  >
                    <i className="bi bi-shop me-2"></i>
                    Bite<span style={{ color: "#F97316" }}>Buddy</span>
                    <span
                      className="d-block text-secondary mt-1"
                      style={{ fontSize: "11px", letterSpacing: "2px" }}
                    >
                      PARTNER PORTAL
                    </span>
                  </a>

                  <div className="mt-5 mb-4">
                    <span
                      className="badge rounded-pill px-3 py-2 mb-3"
                      style={{ background: "#EDE9FE", color: "#6D28D9" }}
                    >
                      <i className="bi bi-shop-window me-1"></i>
                      BUSINESS DASHBOARD
                    </span>

                    <h2 className="fw-bold" style={{ color: "#302052" }}>
                      Welcome back!
                    </h2>

                    <p className="text-secondary small">
                      Sign in to manage your food business and orders.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit(partnerLogin)}>
                    <div className="mb-4">
                      <label className="form-label fw-semibold small">
                        Business Email
                      </label>
                      <div className="input-group">
                        <span className="input-group-text bg-white border-end-0">
                          <i className="bi bi-envelope text-secondary"></i>
                        </span>
                        <input
                          type="email"
                          className="form-control border-start-0 py-3"
                          placeholder="Enter your business email"
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
                          className="form-control border-start-0 py-3"
                          placeholder="Enter your password"
                          {...register("password")}
                        />
                      </div>
                    </div>

                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="rememberPartner"
                        />
                        <label
                          className="form-check-label small text-secondary"
                          htmlFor="rememberPartner"
                        >
                          Remember me
                        </label>
                      </div>

                      <a
                        href="/food-partner/forgot-password"
                        className="small fw-semibold text-decoration-none"
                        style={{ color: "#6D28D9" }}
                      >
                        Forgot password?
                      </a>
                    </div>

                    <button
                      type="submit"
                      className="btn w-100 text-white fw-semibold py-3"
                      style={{
                        background: "#6D45C5",
                        borderRadius: "12px",
                      }}
                    >
                      Sign In to Dashboard
                      <i className="bi bi-arrow-right ms-2"></i>
                    </button>
                  </form>

                  <div className="d-flex align-items-center my-4">
                    <hr className="flex-grow-1" />
                    <span className="px-3 text-secondary small">
                      PARTNER ACCESS
                    </span>
                    <hr className="flex-grow-1" />
                  </div>

                  <div
                    className="rounded-4 p-3"
                    style={{
                      background: "#F5F3FF",
                      border: "1px solid #E9E2FF",
                    }}
                  >
                    <div className="d-flex gap-3 align-items-center">
                      <div
                        className="rounded-3 d-flex align-items-center justify-content-center"
                        style={{
                          minWidth: "45px",
                          height: "45px",
                          background: "#EDE9FE",
                          color: "#6D28D9",
                        }}
                      >
                        <i className="bi bi-shield-lock fs-4"></i>
                      </div>
                      <div>
                        <div
                          className="fw-semibold small"
                          style={{ color: "#39246B" }}
                        >
                          Secure Partner Login
                        </div>
                        <div
                          className="text-secondary"
                          style={{ fontSize: "11px" }}
                        >
                          Access your business workspace securely.
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-center text-secondary small mt-5 mb-0">
                    Not a partner yet?{" "}
                    <a
                      href="/food-partner/register"
                      className="fw-bold text-decoration-none"
                      style={{ color: "#6D28D9" }}
                    >
                      Register your business
                    </a>
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
                    "linear-gradient(180deg, transparent 20%, rgba(35,18,66,.95) 100%), url('https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1000&q=85') center/cover",
                }}
              >
                <div className="position-absolute top-0 start-0 p-4">
                  <span className="badge rounded-pill bg-white text-dark px-3 py-2">
                    <i className="bi bi-stars me-1 text-warning"></i>
                    YOUR BUSINESS STARTS HERE
                  </span>
                </div>

                <div className="position-absolute bottom-0 p-5 text-white">
                  <h1 className="fw-bold display-5">
                    Great food.
                    <br />
                    Bigger opportunities.
                  </h1>

                  <p className="text-white-50">
                    Your partner dashboard is the place to manage your menu,
                    showcase your food and keep your business moving forward.
                  </p>

                  <div className="mt-4 p-3 rounded-4 bg-white bg-opacity-10">
                    <div className="d-flex align-items-center gap-3">
                      <div
                        className="rounded-circle d-flex align-items-center justify-content-center"
                        style={{
                          width: "48px",
                          height: "48px",
                          background: "#F97316",
                        }}
                      >
                        <i className="bi bi-shop fs-4"></i>
                      </div>
                      <div>
                        <div className="fw-semibold">
                          Your kitchen, your brand
                        </div>
                        <div className="small text-white-50">
                          Make every dish count.
                        </div>
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

export default FoodPartnerLogin;
