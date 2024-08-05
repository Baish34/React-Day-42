import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Stays() {
  return (
    <>
      <Header />
      <main className="container py-4">
        <h1>Featured Stays</h1>
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="https://images.unsplash.com/photo-1598228723793-52759bba239c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdXNlfGVufDB8fDB8fHww"
                class="img-fluid rounded-start"
                alt="stay 1"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Cozy Cottage Retreat</h5>
                <p class="card-text">
                  Wake up to a breathtaking view of the Taj Mahal form this
                  luxurious apartment. Explore the rich history and beauty of
                  this iconic monument right from your window.
                </p>
                <p class="card-text">
                  <small class="text-body-secondary">
                    Last updated 2 mins ago
                  </small>
                </p>
                 <Link to="/stays/1" className="btn btn-primary">View More</Link>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="https://images.unsplash.com/photo-1544646280-e243b3ab7d1e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG91c2UlMjBpbiUyMGp1bmdsZSUyMG1vdW50YWlufGVufDB8fDB8fHww"
                class="img-fluid rounded-start"
                alt="stay 2"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Beachfront Paradise Villa</h5>
                <p class="card-text">
                  Escape to nature with this cozy mountain retreat. Enjoy
                  tranquility and stunning views while being surrounded by lush
                  forests and fresh mountain air.
                </p>
                <p class="card-text">
                  <small class="text-body-secondary">
                    Last updated 4 mins ago
                  </small>
                </p>
                <Link to="/stays/2" className="btn btn-primary">View More</Link>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdXNlfGVufDB8fDB8fHww"
                class="img-fluid rounded-start"
                alt="stay 3"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">
                  Urban Loft in the City
                </h5>
                <p class="card-text">
                  Indulge in luxury with this stunning seaside villa. Relax on
                  pristine beaches, take a dip in the private pool, and soak up
                  the sun in this exclusive coastal retreat.
                </p>
                <p class="card-text">
                  <small class="text-body-secondary">
                    Last updated 8 mins ago
                  </small>
                </p>
                <Link to="/stays/3" className="btn btn-primary">View More</Link>
              </div>
            </div>
          </div>
        </div>
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                class="img-fluid rounded-start"
                alt="stay 4"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Rustic Cabin in the Woods</h5>
                <p class="card-text">
                  Experience urban living at its finest with this modern loft.
                  Conveniently located in the city center, it offers style,
                  comfort, and easy access to dining and entertainment options.
                </p>
                <p class="card-text">
                  <small class="text-body-secondary">
                    Last updated 10 mins ago
                  </small>
                </p>
                <Link to="/stays/4" className="btn btn-primary">View More</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
