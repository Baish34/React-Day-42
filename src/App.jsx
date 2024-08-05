import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";


export default function App() {
  return (
    <>
      <Header />
    <main className="container py-4">
      <h1>Latest Listings</h1>
      <article>
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="hotel 1"
          className="img-fluid rounded"
        />
        <h2 className="pt-2">Cozy Loft in the City Center</h2>
        <p>Entire loft . 2 guests . 1 bedroom . 1 bed . 1 bath</p>
        <p>
          Enjoy your stay in this stylish loft apartment located in the heart of
          the city. Close to restaurants, shops, and attractions, it's the
          perfect base for exploring the city.
        </p>
        <p>$200 per night</p>
      </article>
      <article>
        <img
          src="https://images.unsplash.com/photo-1561501900-3701fa6a0864?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIwfHxob3RlbHxlbnwwfHwwfHx8MA%3D%3D"
          alt="hotel 2"
          className="img-fluid rounded"
        />
        <h2 className="pt-2">Beachfront Villa with Stunning Views</h2>
        <p>Entire Villa . 8 guests . 4 bedroom . 4 bed . 3 baths</p>
        <p>
          Relax and unwind in this beautiful beachfront villa. Wake up to
          panoramic ocean views, take a dip in the beach, and enjoy seamless
          indoor-outdoor living.
        </p>
        <p>$400 per night</p>
      </article>
    </main>
      <Footer />
      </>
  );
}
