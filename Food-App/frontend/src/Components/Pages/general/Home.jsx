import axios from "axios";
import React, { useEffect } from "react";

const Home = () => {
  const getFoodItems = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/food/get-food-items",
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFoodItems();
  }, []);

  return (
    <div className="min-vh-100 bg-body-tertiary">
      <nav className="navbar navbar-expand bg-white border-bottom sticky-top py-2">
        <div className="container">
          <a href="/" className="navbar-brand fw-bold fs-3 text-dark mb-0">
            Bite<span className="text-warning">Buddy</span>
          </a>
          <div className="d-none d-md-block mx-auto flex-grow-1 px-5">
            <input
              className="form-control form-control-sm bg-body-tertiary border-0"
              type="search"
              placeholder="Search dishes and kitchens"
              aria-label="Search"
            />
          </div>
          <div className="d-flex align-items-center gap-3">
            <a
              href="/"
              className="text-dark fs-4 text-decoration-none"
              aria-label="Home"
            >
              &#8962;
            </a>
            <a
              href="/user-login"
              className="text-dark fs-4 text-decoration-none"
              aria-label="Messages"
            >
              &#9993;
            </a>
            <a
              href="/food-partner-login"
              className="btn btn-warning btn-sm text-white fw-semibold"
            >
              Partner sign in
            </a>
          </div>
        </div>
      </nav>

      <main className="container py-4">
        <div className="row justify-content-center g-4">
          <section className="col-lg-7 col-xl-6">
            <article className="card border rounded-3 mb-4 overflow-hidden">
              <div className="card-header bg-white border-0 d-flex align-items-center gap-2 py-3 px-3">
                <div className="rounded-circle border border-warning border-2 p-1">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                    alt=""
                    className="rounded-circle object-fit-cover"
                    width="34"
                    height="34"
                  />
                </div>
                <div className="flex-grow-1 lh-sm">
                  <div className="fw-semibold small">
                    mias.kitchen{" "}
                    <span className="text-secondary fw-normal">&#8226; 2h</span>
                  </div>
                  <small className="text-secondary">Brooklyn, New York</small>
                </div>
                <button
                  type="button"
                  className="btn btn-sm text-dark fs-5 py-0"
                  aria-label="More post options"
                >
                  &#8230;
                </button>
              </div>
              <div className="ratio ratio-4x3 bg-dark">
                <iframe
                  src="https://ik.imagekit.io/TausifImg900/01a13eb2-bcfa-7367-8174-b115e41ebcf5_sgAEp2yh9"
                  className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
                  alt="Wood-fired margherita pizza topped with basil"
                />
              </div>
              <div className="card-body px-3 py-2">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <div className="d-flex gap-3 align-items-center">
                    <button
                      type="button"
                      className="btn btn-link link-dark p-0 fs-3 text-decoration-none lh-1"
                      aria-label="Like post"
                    >
                      &#9825;
                    </button>
                    <button
                      type="button"
                      className="btn btn-link link-dark p-0 fs-4 text-decoration-none lh-1"
                      aria-label="Comment on post"
                    >
                      &#9711;
                    </button>
                    <button
                      type="button"
                      className="btn btn-link link-dark p-0 fs-4 text-decoration-none lh-1"
                      aria-label="Share post"
                    >
                      &#10148;
                    </button>
                  </div>
                  <button
                    type="button"
                    className="btn btn-link link-dark p-0 fs-4 text-decoration-none"
                    aria-label="Save post"
                  >
                    &#9641;
                  </button>
                </div>
                <div className="small fw-semibold mb-1">1,248 likes</div>
                <p className="small mb-1">
                  <span className="fw-semibold">mias.kitchen</span> Wood-fired
                  Margherita{" "}
                  <span className="text-secondary">
                    Slow-fermented dough, San Marzano tomatoes, fresh
                    mozzarella, and basil from our garden. Made fresh every day.
                  </span>
                </p>
                <a
                  href="/"
                  className="small text-secondary text-decoration-none"
                >
                  View all 38 comments
                </a>
                <div className="small text-secondary mt-2">2 HOURS AGO</div>
                <div className="border-top mt-2 pt-2 d-flex align-items-center gap-2">
                  <span className="fs-5">&#9786;</span>
                  <span className="small text-secondary flex-grow-1">
                    Add a comment...
                  </span>
                  <span className="text-primary small fw-semibold">Post</span>
                </div>
              </div>
            </article>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;
