import { Link } from "react-router-dom";

const Home = () => (
  <main className="bg-light text-dark min-vh-100">
    <header className="container">
      <nav className="navbar navbar-expand-md py-3 border-bottom">
        <Link to="/" className="navbar-brand fw-bold fs-4 text-success">
          Bite<span className="text-warning">Buddy</span>
        </Link>
        <div className="ms-auto d-flex flex-wrap justify-content-end align-items-center gap-2">
          <a
            href="#menu"
            className="d-none d-lg-inline text-decoration-none text-dark me-2"
          >
            Explore menu
          </a>
          <Link to="/user-login" className="btn btn-outline-success btn-sm">
            User login
          </Link>
          <Link to="/user-registration" className="btn btn-success btn-sm">
            User register
          </Link>
          <span className="vr mx-1 d-none d-md-inline" />
          <Link to="/food-partner-login" className="btn btn-outline-dark btn-sm">
            Partner login
          </Link>
          <Link
            to="/food-partner-registration"
            className="btn btn-warning btn-sm"
          >
            Partner register
          </Link>
        </div>
      </nav>
    </header>

    <section className="container py-5">
      <div className="row align-items-center g-5 py-lg-4">
        <div className="col-lg-6">
          <span className="badge rounded-pill text-bg-warning mb-3">
            FRESH FROM LOCAL KITCHENS
          </span>
          <h1 className="display-3 fw-bold lh-1 mb-4">
            Good food brings people{" "}
            <span className="text-success">together.</span>
          </h1>
          <p className="lead text-secondary mb-4">
            Discover delicious dishes from local kitchens and find your next
            favourite meal.
          </p>
          <div className="d-flex flex-wrap gap-3 align-items-center">
            <a href="#menu" className="btn btn-warning btn-lg">
              Explore the menu
            </a>
            <Link
              to="/food-partner-registration"
              className="btn btn-outline-success btn-lg"
            >
              Share your food
            </Link>
          </div>
          <p className="text-secondary mt-4 mb-0">
            Made by local kitchens, shared with love.
          </p>
        </div>
        <div className="col-lg-6">
          <img
            className="img-fluid rounded-4 shadow"
            src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85"
            alt="A table filled with delicious food"
          />
        </div>
      </div>
    </section>

    <section id="menu" className="container py-5">
      <div className="d-flex flex-wrap justify-content-between align-items-end mb-4 gap-2">
        <div>
          <span className="text-success fw-semibold small">
            THE COMMUNITY MENU
          </span>
          <h2 className="display-6 fw-bold mb-0">Made nearby, loved by you.</h2>
        </div>
        <p className="text-secondary mb-1">
          A taste of what our food partners make
        </p>
      </div>
      <div className="row g-4">
        <div className="col-md-6 col-lg-4">
          <article className="card h-100 border-0 shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=900&q=85"
              className="card-img-top object-fit-cover"
              style={{ height: "230px" }}
              alt="Freshly baked pizza"
            />
            <div className="card-body">
              <span className="badge text-bg-warning mb-2">PARTNER PICK</span>
              <h3 className="card-title h4">Garden Fresh Pizza</h3>
              <p className="card-text text-secondary">
                A crisp, oven-baked favourite topped with fresh ingredients.
              </p>
            </div>
            <div className="card-footer bg-white border-0 text-secondary small pb-3">
              Fresh from a local kitchen
            </div>
          </article>
        </div>
        <div className="col-md-6 col-lg-4">
          <article className="card h-100 border-0 shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85"
              className="card-img-top object-fit-cover"
              style={{ height: "230px" }}
              alt="A colourful bowl of fresh food"
            />
            <div className="card-body">
              <span className="badge text-bg-warning mb-2">PARTNER PICK</span>
              <h3 className="card-title h4">Hearty Green Bowl</h3>
              <p className="card-text text-secondary">
                A bright and satisfying bowl made for a feel-good lunch.
              </p>
            </div>
            <div className="card-footer bg-white border-0 text-secondary small pb-3">
              Fresh from a local kitchen
            </div>
          </article>
        </div>
        <div className="col-md-6 col-lg-4">
          <article className="card h-100 border-0 shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=900&q=85"
              className="card-img-top object-fit-cover"
              style={{ height: "230px" }}
              alt="A beautifully served restaurant meal"
            />
            <div className="card-body">
              <span className="badge text-bg-warning mb-2">PARTNER PICK</span>
              <h3 className="card-title h4">House Special Thali</h3>
              <p className="card-text text-secondary">
                A comforting spread inspired by home-style cooking.
              </p>
            </div>
            <div className="card-footer bg-white border-0 text-secondary small pb-3">
              Fresh from a local kitchen
            </div>
          </article>
        </div>
      </div>
    </section>

    <section className="container py-5">
      <div className="bg-success text-white rounded-4 p-4 p-md-5 d-flex flex-column flex-md-row align-items-md-center justify-content-between gap-4">
        <div>
          <span className="small fw-semibold text-warning">
            FOR FOOD LOVERS WHO COOK
          </span>
          <h2 className="display-6 fw-bold mt-2">
            Your kitchen deserves a bigger table.
          </h2>
          <p className="mb-0 text-white-50">
            Bring your dishes to BiteBuddy and meet the people who will love
            them.
          </p>
        </div>
        <div className="d-flex flex-column align-items-start gap-3 flex-shrink-0">
          <Link
            to="/food-partner-registration"
            className="btn btn-warning btn-lg"
          >
            Join as a partner
          </Link>
          <Link to="/food-partner-login" className="link-light">
            Already a partner? Log in
          </Link>
        </div>
      </div>
    </section>

    <footer className="container py-4 border-top d-flex flex-wrap justify-content-between align-items-center gap-3">
      <Link to="/" className="navbar-brand fw-bold text-success mb-0">
        Bite<span className="text-warning">Buddy</span>
      </Link>
      <span className="text-secondary small">
        Good food. Good neighbours. Great days.
      </span>
      <div className="d-flex gap-3">
        <Link to="/food-partner-login" className="link-secondary">
          Partner login
        </Link>
        <Link to="/food-partner-registration" className="link-secondary">
          Partner registration
        </Link>
      </div>
    </footer>
  </main>
);

export default Home;
