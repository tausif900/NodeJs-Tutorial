import React from "react";
import { Link } from "react-router-dom";

const FoodPartnerRegistration = () => {
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

                  <div className="mt-4 mb-4">
                    <span
                      className="badge rounded-pill px-3 py-2 mb-3"
                      style={{ background: "#EDE9FE", color: "#6D28D9" }}
                    >
                      <i className="bi bi-stars me-1"></i>
                      GROW WITH US
                    </span>

                    <h2 className="fw-bold" style={{ color: "#302052" }}>
                      Become a Food Partner
                    </h2>
                    <p className="text-secondary small">
                      Bring your delicious food to more customers and grow your
                      business with us.
                    </p>
                    <span>
                      <Link
                        to={"/user-registration"}
                        className="text-decoration-none  text-muted small fw-bold"
                      >
                        Continue as Normal User
                      </Link>
                    </span>
                  </div>

                  <form className="row">
                    <div className="col">
                      {" "}
                      <div className="mb-3">
                        <label className="form-label fw-semibold small">
                          Restaurant / Business Name
                        </label>
                        <div className="input-group">
                          <span className="input-group-text bg-white border-end-0">
                            <i className="bi bi-shop text-secondary"></i>
                          </span>
                          <input
                            type="text"
                            className="form-control border-start-0 py-2"
                            placeholder="Enter business name"
                          />
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="form-label fw-semibold small">
                          Owner Name
                        </label>
                        <div className="input-group">
                          <span className="input-group-text bg-white border-end-0">
                            <i className="bi bi-person text-secondary"></i>
                          </span>
                          <input
                            type="text"
                            className="form-control border-start-0 py-2"
                            placeholder="Enter owner's full name"
                          />
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="form-label fw-semibold small">
                          Business Email
                        </label>
                        <div className="input-group">
                          <span className="input-group-text bg-white border-end-0">
                            <i className="bi bi-envelope text-secondary"></i>
                          </span>
                          <input
                            type="email"
                            className="form-control border-start-0 py-2"
                            placeholder="business@example.com"
                          />
                        </div>
                      </div>
                      <div className="form-check mb-4">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="partnerTerms"
                        />
                        <label
                          className="form-check-label small text-secondary"
                          htmlFor="partnerTerms"
                        >
                          I agree to the{" "}
                          <a href="#" style={{ color: "#6D28D9" }}>
                            Partner Terms
                          </a>{" "}
                          and Privacy Policy.
                        </label>
                      </div>
                    </div>

                    <div className="col">
                      {" "}
                      <div className="mb-3">
                        <label className="form-label fw-semibold small">
                          Contact Number
                        </label>
                        <div className="input-group">
                          <span className="input-group-text bg-white border-end-0">
                            <i className="bi bi-telephone text-secondary"></i>
                          </span>
                          <input
                            type="tel"
                            className="form-control border-start-0 py-2"
                            placeholder="Enter contact number"
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
                          />
                        </div>
                      </div>
                      <div className="mb-4">
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
                            placeholder="Confirm your password"
                          />
                        </div>
                      </div>
                      <button
                        type="button"
                        className="btn w-100 text-white fw-semibold py-3"
                        style={{
                          background: "#6D45C5",
                          borderRadius: "12px",
                        }}
                      >
                        Create Partner Account
                        <i className="bi bi-arrow-right ms-2"></i>
                      </button>
                    </div>
                  </form>

                  <div className="text-center mt-4">
                    <p className="text-secondary small mb-0">
                      Already a partner?{" "}
                      <a
                        href="/food-partner/login"
                        className="fw-bold text-decoration-none"
                        style={{ color: "#6D28D9" }}
                      >
                        Sign in
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-5 d-none d-lg-block">
              <div
                className="position-relative ms-4 overflow-hidden shadow"
                style={{
                  height: "750px",
                  borderRadius: "24px",
                  background:
                    "linear-gradient(180deg, transparent 20%, rgba(35,18,66,.95) 100%), url('https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1000&q=85') center/cover",
                }}
              >
                <div className="position-absolute top-0 start-0 p-4">
                  <span className="badge rounded-pill bg-white text-dark px-3 py-2">
                    <i
                      className="bi bi-patch-check-fill me-1"
                      style={{ color: "#6D45C5" }}
                    ></i>
                    PARTNER WITH CONFIDENCE
                  </span>
                </div>

                <div className="position-absolute bottom-0 p-5 text-white">
                  <span
                    className="badge rounded-pill px-3 py-2 mb-3"
                    style={{ background: "#F97316" }}
                  >
                    YOUR BUSINESS, OUR PLATFORM
                  </span>

                  <h1 className="fw-bold display-5">
                    Your kitchen.
                    <br />
                    More customers.
                  </h1>

                  <p className="text-white-50">
                    Showcase your signature dishes, reach hungry customers and
                    take your food business to the next level.
                  </p>

                  <div className="row g-3 mt-3">
                    <div className="col-6">
                      <div className="p-3 rounded-4 bg-white bg-opacity-10">
                        <i className="bi bi-graph-up-arrow fs-3"></i>
                        <div className="fw-semibold mt-2">Grow Business</div>
                        <div className="small text-white-50">
                          Reach new customers
                        </div>
                      </div>
                    </div>

                    <div className="col-6">
                      <div className="p-3 rounded-4 bg-white bg-opacity-10">
                        <i className="bi bi-bag-check fs-3"></i>
                        <div className="fw-semibold mt-2">More Orders</div>
                        <div className="small text-white-50">
                          Share your best food
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

export default FoodPartnerRegistration;
