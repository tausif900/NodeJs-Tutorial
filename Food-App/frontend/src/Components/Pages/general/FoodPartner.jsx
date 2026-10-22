import React from "react";
import { Link, useParams } from "react-router-dom";

const FoodPartner = () => {
  const { foodPartnerId } = useParams();
  console.log(foodPartnerId);

  

  return (
    <main className="min-vh-100 bg-light">
      <nav className="navbar bg-white border-bottom">
        <div className="container">
          <Link className="navbar-brand fw-bold text-dark" to="/">
            <span className="text-danger">Food</span>Reels
          </Link>
          <Link to="/" className="btn btn-outline-dark btn-sm">
            Back to videos
          </Link>
        </div>
      </nav>

      <div className="container py-4 py-md-5">
        <section className="row justify-content-center">
          <div className="col-12 col-lg-9 col-xl-8">
            <div className="card border-0 shadow-sm rounded-4 mb-4">
              <div className="card-body p-4 p-md-5">
                <div className="d-flex flex-column flex-sm-row align-items-center align-items-sm-start gap-4">
                  <div
                    className="rounded-circle bg-danger-subtle text-danger d-flex align-items-center justify-content-center flex-shrink-0 fw-bold fs-2"
                    style={{ width: 104, height: 104 }}
                    aria-hidden="true"
                  ></div>
                  <div className="flex-grow-1 text-center text-sm-start">
                    <div className="d-flex flex-column flex-md-row align-items-center gap-2 mb-2">
                      <h1 className="h3 fw-bold mb-0"></h1>
                      <span className="badge rounded-pill text-bg-light border">
                        Food partner
                      </span>
                    </div>
                    <p className="text-secondary mb-3"></p>
                    <div className="d-flex justify-content-center justify-content-sm-start gap-4">
                      <div>
                        <strong></strong> meals
                      </div>
                      <div>
                        <strong></strong> served
                      </div>
                      <div>
                        <strong></strong> posts
                      </div>
                    </div>
                  </div>
                </div>

                <hr className="my-4" />
                <div className="row g-3">
                  <div className="col-12 col-sm-6">
                    <div className="small text-secondary">Business name</div>
                    <div className="fw-semibold"></div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="small text-secondary">Contact person</div>
                    <div className="fw-semibold"></div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="small text-secondary">Phone</div>
                    <div className="fw-semibold"></div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="small text-secondary">Email</div>
                    <div className="fw-semibold text-break"></div>
                  </div>
                  <div className="col-12">
                    <div className="small text-secondary">Location</div>
                    <div className="fw-semibold"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex align-items-center justify-content-between border-bottom pb-3 mb-3">
              <h2 className="h5 fw-bold mb-0">MEALS &amp; VIDEOS</h2>
              <span className="small text-secondary"></span>
            </div>

            <div className="row row-cols-2 row-cols-md-3 g-2 g-md-3"></div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default FoodPartner;
